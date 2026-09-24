"""One-off asset preparation: resizes the design's images and converts the
fonts to WOFF2 so the site ships small, self-hosted files.

Run from the repo root:  python3 site/tools/prepare_assets.py
Needs: pip install pillow fonttools brotli
The Playpen Sans Arabic files come from the @fontsource-variable/playpen-sans-arabic
npm package (OFL); pass its unpacked folder as PLAYPEN_DIR.
"""
import os, shutil, sys
from PIL import Image
from fontTools.ttLib import TTFont

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PROJ = os.path.join(ROOT, "project")
DS = os.path.join(PROJ, "_ds", "global-mind-design-system-b977efb6-5760-4ab6-8f37-4d6ba8a9931f")
OUT = os.path.join(ROOT, "site", "static", "assets")
IMG, FONTS = os.path.join(OUT, "img"), os.path.join(OUT, "fonts")
PLAYPEN_DIR = os.environ.get("PLAYPEN_DIR")


def flat(path):
    im = Image.open(path)
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im, mask=im.split()[-1])
        return bg
    return im.convert("RGB")


def resize_w(im, w):
    if im.width <= w:
        return im
    return im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)


def jpg(src, dst, w, q=84):
    resize_w(flat(src), w).save(os.path.join(IMG, dst), "JPEG", quality=q, optimize=True, progressive=True)


def png(src, dst, w):
    resize_w(flat(src), w).save(os.path.join(IMG, dst), "PNG", optimize=True)


# Logo mark (on ivory): header, footer, favicons
png(f"{PROJ}/assets/logo-ivory.png", "logo-mark.png", 96)
png(f"{PROJ}/assets/logo-ivory.png", "logo-mark-192.png", 192)
png(f"{PROJ}/assets/logo-ivory.png", "favicon-32.png", 32)
png(f"{PROJ}/assets/logo-ivory.png", "apple-touch-icon.png", 180)
# Logo on navy: home hero artwork (~490px wide at most)
jpg(f"{PROJ}/assets/logo-navy.png", "logo-navy.jpg", 1000, 86)
# Nim Negah covers and inner pages
up = f"{PROJ}/uploads"
jpg(f"{up}/pasted-1789947039311-0.png", "cover-masters.jpg", 600, 88)
jpg(f"{up}/pasted-1789946999323-0.png", "cover-engineering.jpg", 600, 88)
jpg(f"{up}/pasted-1789947180230-0.png", "sample-study.jpg", 760, 86)
jpg(f"{up}/pasted-1789947133244-0.png", "sample-tests.jpg", 760, 86)
jpg(f"{up}/pasted-1789947208061-0.png", "sample-answers.jpg", 760, 86)
# Founder photo (About page only)
jpg(f"{up}/IMG_6171.jpg", "kimia.jpg", 900, 80)


def woff2(src, dst):
    f = TTFont(src)
    f.flavor = "woff2"
    f.save(os.path.join(FONTS, dst))


woff2(f"{DS}/assets/fonts/PlayfairDisplay.ttf", "PlayfairDisplay.woff2")
woff2(f"{DS}/assets/fonts/Vazirmatn.ttf", "Vazirmatn.woff2")
if PLAYPEN_DIR:
    for sub in ("arabic", "latin"):
        shutil.copy(f"{PLAYPEN_DIR}/files/playpen-sans-arabic-{sub}-wght-normal.woff2",
                    os.path.join(FONTS, f"PlaypenSansArabic-{sub}.woff2"))
    shutil.copy(f"{PLAYPEN_DIR}/LICENSE", os.path.join(FONTS, "OFL-PlaypenSansArabic.txt"))
else:
    print("PLAYPEN_DIR not set; skipped Playpen Sans Arabic", file=sys.stderr)

for name in sorted(os.listdir(IMG)) + sorted(os.listdir(FONTS)):
    p = os.path.join(IMG, name) if os.path.exists(os.path.join(IMG, name)) else os.path.join(FONTS, name)
    print(f"{os.path.getsize(p)//1024:>6} KB  {name}")
