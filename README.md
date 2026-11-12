<p align="center"><img src="brand/logo.png" width="72" alt="askya"></p>
<h1 align="center">askya</h1>
<p align="center">Blog de sécurité, de l’attaque à la détection. Écrit en Markdown, généré par Astro et publié en HTTPS sur GitHub Pages.</p>

**Adresse du site : https://m371h3u.github.io/askya/**

## Écrire un article

```bash
npm run nouvel-article -- "Write-up : ma machine"
# → src/content/blog/write-up-ma-machine/index.md
```

1. Écrivez votre article en Markdown dans `index.md`.
2. Déposez vos images **dans le même dossier**, puis appelez-les avec `![texte](./image.png)`. Elles sont optimisées automatiquement.
3. Passez `draft: true` à `draft: false`.
4. Publiez :
   ```bash
   git add . && git commit -m "article : ..." && git push   # sauvegarde des sources
   npm run deploy                                          # compile et met le site en ligne (~1 min)
   ```

> Publication automatique au push (optionnel) : lancez `gh auth refresh -h github.com -s workflow`, puis déplacez `deploy/github-actions-deploy.yml` vers `.github/workflows/deploy.yml` et passez la source Pages sur « GitHub Actions ». Ensuite, `npm run deploy` ne sert plus.

### En-tête (frontmatter)

| Champ | Obligatoire | Rôle |
|---|---|---|
| `title` | oui | titre de l'article |
| `description` | oui | résumé affiché sur les cartes, dans les moteurs de recherche et le RSS |
| `date` | oui | `AAAA-MM-JJ` |
| `category` | non | libellé rouge au-dessus du titre (Write-up, Outil, Bug bounty…) |
| `tags` | non | `[ad, kerberos]` : chaque tag génère sa page `/tags/...` |
| `cover` / `coverAlt` | non | image de couverture (chemin relatif) et son texte alternatif |
| `updated` | non | date de mise à jour |
| `draft` | non | `true` : visible seulement en local (`npm run dev`) |

## En local

```bash
npm install
npm run dev       # http://localhost:4321/askya/  (rechargement à chaud)
npm run build     # génère dist/
```

## Charte

Thème unique **ambre** (écran CRT ambré), toujours sombre : fond `#0B0905`, accent `#FFB000`, polices Inter et JetBrains Mono. Le logo « A » est barré d'un trait ambre (`brand/`, image d'origine : `brand/logo-source.jpeg`). Les couleurs se règlent dans `src/styles/global.css` (`:root`).

**Couverture d'article** : `python3 brand/gen-cover.py "Titre" "SOUS-TITRE" src/content/blog/mon-article/couverture.png`.

## Domaine personnalisé (optionnel)

1. Créez `public/CNAME` contenant par exemple `blog.mondomaine.fr`.
2. Dans `astro.config.mjs`, remplacez `site` par `https://blog.mondomaine.fr` et `base` par `'/'`.
3. Chez votre registrar, ajoutez l'enregistrement DNS `CNAME blog → m371h3u.github.io`.
4. Dans GitHub, ouvrez Settings → Pages et cochez **Enforce HTTPS**.
