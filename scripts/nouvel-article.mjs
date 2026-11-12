// Usage : npm run nouvel-article -- "Titre de mon article"
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Usage : npm run nouvel-article -- "Titre de mon article"');
  process.exit(1);
}
const slug = title.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const dir = `src/content/blog/${slug}`;
if (existsSync(dir)) { console.error(`Existe déjà : ${dir}`); process.exit(1); }
mkdirSync(dir, { recursive: true });
const today = new Date().toISOString().slice(0, 10);
writeFileSync(`${dir}/index.md`, `---
title: ${JSON.stringify(title)}
description: "Résumé en une phrase (affiché sur la carte et dans Google)."
date: ${today}
category: Write-up
team: offensif   # offensif (rouge) | defensif (bleu) | pont (violet)
tags: []
# cover: ./couverture.png
# coverAlt: "Description de l'image"
draft: true
---

Introduction.

## Première partie

Texte. Image : déposez le fichier dans ce dossier puis :

![Description](./capture.png)
`);
console.log(`✓ Créé : ${dir}/index.md  (draft: true → passez à false pour publier)`);
