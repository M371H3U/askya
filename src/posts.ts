import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Articles publiés, du plus récent au plus ancien (les brouillons restent visibles en `npm run dev`). */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Slug public d'un article : `mon-article/index.md` -> `mon-article`. */
export function postSlug(post: Post): string {
  return post.id.replace(/\/index$/, '');
}
