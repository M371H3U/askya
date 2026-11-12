#!/usr/bin/env python3
"""Génère une image de couverture 1200x630 aux couleurs du blog.
Usage : python3 brand/gen-cover.py "Titre" "SOUS-TITRE" sortie.png [accent] [fond]
ex.   : python3 brand/gen-cover.py "Write-up : Forest" "HTB · ACTIVE DIRECTORY" src/content/blog/forest/couverture.png
"""
import random, subprocess, sys, tempfile, html
title, sub, out = sys.argv[1], sys.argv[2], sys.argv[3]
accent = sys.argv[4] if len(sys.argv) > 4 else '#FFB000'
bg = sys.argv[5] if len(sys.argv) > 5 else '#0B0905'
W, H = 1200, 630
random.seed(title)
dots = []
for y in range(12, H, 22):
    for x in range(12, W, 22):
        p = max(0, 1 - (x / W) * 0.9) * (1 - (y / H) * 0.5)
        if random.random() < p * 0.9:
            r = 1.1 + random.random() * 1.2 * p
            red = random.random() < 0.05
            dots.append(f'<circle cx="{x}" cy="{y}" r="{r:.2f}" fill="{accent if red else "#fff"}" opacity="{0.7 if red else 0.06 + 0.22 * p:.2f}"/>')
logo = ('<polygon fill="#FBF6EA" points="365,455 484,205 602,455 549,455 484,318 419,455"/>'
        f'<rect fill="{accent}" x="210" y="484" width="547" height="51"/>'
        '<polygon fill="#FBF6EA" points="169,868 313,565 366,565 246,817 484,594 721,817 601,565 654,565 799,868 702,868 484,664 266,868"/>')
size = 62 if len(title) < 34 else 50
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}">
<defs>
 <radialGradient id="g1" cx="15%" cy="0%" r="70%"><stop offset="0" stop-color="{accent}" stop-opacity=".28"/><stop offset="1" stop-color="{accent}" stop-opacity="0"/></radialGradient>
 <radialGradient id="g2" cx="92%" cy="25%" r="55%"><stop offset="0" stop-color="#EF4444" stop-opacity=".08"/><stop offset="1" stop-color="#EF4444" stop-opacity="0"/></radialGradient>
</defs>
<rect width="{W}" height="{H}" fill="{bg}"/><rect width="{W}" height="{H}" fill="url(#g1)"/><rect width="{W}" height="{H}" fill="url(#g2)"/>
{''.join(dots)}
<svg x="80" y="76" width="72" height="76" viewBox="160 195 648 683">{logo}</svg>
<text x="168" y="134" font-family="Inter" font-weight="800" font-size="44" letter-spacing="-1.3" fill="#FBF6EA">askya<tspan fill="{accent}" font-family="JetBrains Mono">_</tspan></text>
<text x="80" y="{H - 190}" font-family="JetBrains Mono" font-weight="700" font-size="20" letter-spacing="3" fill="{accent}">{html.escape(sub)}</text>
<text x="80" y="{H - 120}" font-family="Inter" font-weight="800" font-size="{size}" letter-spacing="-1.5" fill="#FBF6EA">{html.escape(title)}</text>
<rect y="{H - 6}" width="{W}" height="6" fill="{accent}"/>
</svg>'''
with tempfile.NamedTemporaryFile('w', suffix='.svg', delete=False) as f:
    f.write(svg)
subprocess.run(['rsvg-convert', f.name, '-o', out], check=True)
print('✓', out)
