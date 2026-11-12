---
title: Bienvenue sur askya
description: Pourquoi ce blog, ce que vous y trouverez, et comment un article est construit (Markdown, images, code).
date: 2026-11-12
category: Annonce
tags: [blog, méthodologie]
cover: ./couverture.png
coverAlt: Bandeau askya, logo et nuage de points
---

Voici le premier article d'**askya**. Ce blog sert de carnet de terrain : pentest, bug bounty, Active Directory, outillage. Les articles sont écrits en **Markdown** et publiés automatiquement en HTTPS.

## Ce que vous allez lire ici

- des **write-ups** de machines et de labs ;
- de la **méthodologie**, de la reconnaissance jusqu'au rapport ;
- de l'**outillage** : mon poste, mes scripts, mes configurations.

> Une piste n'est pas un bug. Tant qu'elle n'est pas prouvée, ce n'est qu'une hypothèse.

## Un bloc de code

Les blocs de code ont la coloration syntaxique et un bouton « copier » qui apparaît au survol :

```bash
# Énumération SMB avec NetExec (lab autorisé)
nxc smb 10.10.10.0/24 -u 'invite' -p '' --shares
```

```python
import requests

r = requests.get("https://example.com/api/v1/me", timeout=10)
print(r.status_code, r.headers.get("server"))
```

## Une image

Pour ajouter une image, placez-la dans le dossier de l'article et appelez-la en chemin relatif. Elle est optimisée automatiquement : redimensionnée et convertie en WebP.

![Le logo askya : un « A » barré du rouge Dekortix](./couverture.png)

## Un tableau

| Étape | Outil | Sortie |
|---|---|---|
| Recon | `subfinder`, `httpx` | liste d'hôtes vivants |
| Énumération | `nxc`, `ldapsearch` | utilisateurs, partages |
| Exploitation | selon la piste | preuve minimale |

---

Bonne lecture. Le flux [RSS](../../rss.xml) permet de suivre les nouveaux articles.
