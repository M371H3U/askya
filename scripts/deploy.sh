#!/usr/bin/env bash
# Compile le blog et publie dist/ sur la branche gh-pages (GitHub Pages, HTTPS).
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build
touch dist/.nojekyll            # sinon GitHub ignore le dossier _astro/
TMP=$(mktemp -d)
cp -r dist/. "$TMP"
cd "$TMP"
git init -q -b gh-pages
git add -A
git -c user.name=askya commit -q -m "Publication $(date '+%Y-%m-%d %H:%M')"
git push -f -q "$(git -C "$OLDPWD" remote get-url origin)" gh-pages
rm -rf "$TMP"
echo "✓ En ligne d'ici ~1 min : https://m371h3u.github.io/askya/"
