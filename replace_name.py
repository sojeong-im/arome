import os

files = [
    "components/scent-kit-section.tsx",
    "components/header.tsx",
    "components/footer.tsx",
    "components/hero-title-arome.tsx",
    "app/page.tsx",
    "app/my-page/page.tsx",
    "app/globals.css",
    "app/cart/page.tsx",
    "app/layout.tsx",
    "app/shop/page.tsx",
    "app/about/page.tsx",
    "lib/data.ts"
]

for f in files:
    path = os.path.join("/Users/imsojeong/Desktop/site/arome", f)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
        content = content.replace("ARÔME", "AROM").replace("AROME", "AROM")
        # Also let's rename the component import/usage if it happens to be affected, though ARÔME matches text
        with open(path, 'w', encoding='utf-8') as file:
            file.write(content)
