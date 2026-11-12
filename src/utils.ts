/** Préfixe un chemin interne avec la base du site (/askya/ sur GitHub Pages). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
}

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Temps de lecture estimé (≈ 220 mots/min), code compris. */
export function readingTime(body = ''): number {
  const words = body.replace(/```[\s\S]*?```/g, (m) => ' '.repeat(Math.ceil(m.length / 12))).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
