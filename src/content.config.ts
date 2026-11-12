import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Un article = un fichier .md dans src/content/blog/
// (ou un dossier src/content/blog/mon-article/index.md avec ses images à côté).
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      category: z.string().default('Article'),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // Crédit / licence affiché sous la couverture (HTML court autorisé : liens)
      coverCredit: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
