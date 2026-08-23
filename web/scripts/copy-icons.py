import os
import shutil

assets_dir = r"C:\Users\KomaleswarReddy\.cursor\projects\c-Users-KomaleswarReddy-Desktop-Ezway-Businness\assets"
dest_base = r"c:\Users\KomaleswarReddy\Desktop\Ezway Businness\web\public\assets\icons"

mapping = {
    "cea318bb": "impact/icon-car.png",
    "c78f19ff": "impact/icon-user-check.png",
    "36a00141": "impact/icon-leaf.png",
    "4ee527b4": "impact/icon-location.png",
    "4ca8e9e9": "impact/icon-star.png",
    "a45f81f3": "impact/icon-heart.png",
    "9336725f": "impact/icon-award.png",
    "8833855e": "beliefs/icon-shield.png",
    "ae11bb00": "impact/dashed-path.png",
}

for uid, rel in mapping.items():
    matches = [f for f in os.listdir(assets_dir) if uid in f]
    if not matches:
        raise FileNotFoundError(uid)
    src = os.path.join(assets_dir, matches[0])
    out = os.path.join(dest_base, rel)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    shutil.copy2(src, out)
    print("copied", rel)

wallet_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" fill="none">
<rect width="72" height="72" rx="16" fill="#1A1A1A"/>
<path d="M18 26h36a4 4 0 0 1 4 4v4H18v-4a4 4 0 0 1 4-4Zm-4 8h44v14a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V34Zm32 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="#FE8800" stroke-width="3" stroke-linejoin="round"/>
</svg>"""

community_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" fill="none">
<rect width="72" height="72" rx="16" fill="#1A1A1A"/>
<circle cx="28" cy="30" r="6" stroke="#FE8800" stroke-width="3"/>
<path d="M16 50c2-8 8-12 12-12s10 4 12 12" stroke="#FE8800" stroke-width="3" stroke-linecap="round"/>
<circle cx="44" cy="32" r="5" stroke="#FE8800" stroke-width="3"/>
<path d="M36 50c1.5-6 6-9 10-9s8.5 3 10 9" stroke="#FE8800" stroke-width="3" stroke-linecap="round"/>
</svg>"""

for name, content in [
    ("impact/icon-wallet.svg", wallet_svg),
    ("beliefs/icon-community.svg", community_svg),
]:
    out = os.path.join(dest_base, name)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8") as f:
        f.write(content)
    print("created", name)

shutil.copy2(
    os.path.join(dest_base, "impact/icon-leaf.png"),
    os.path.join(dest_base, "beliefs/icon-leaf.png"),
)
print("done")
