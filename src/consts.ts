export const SITE_TITLE = 'askya';
export const SITE_TAGLINE = 'De l’attaque à la détection, vue du terrain.';
export const SITE_DESCRIPTION =
  'Le blog d’askya : pentest, bug bounty, Active Directory, honeypots et détection. Notes de terrain, sans bruit.';
export const AUTHOR = 'askya';
export const LINKS = {
  github: 'https://github.com/M371H3U',
  linkedin: 'https://www.linkedin.com/in/mathieu7927383/',
  dekortix: 'https://dekortix.fr',
};


/** Code couleur des articles : rouge = offensif, bleu = défensif, violet = le pont entre les deux. */
export const TEAMS = {
  offensif: { label: 'Offensif', hint: 'Red team : exploitation, pentest, bug bounty' },
  defensif: { label: 'Défense', hint: 'Blue team : détection, forensic, durcissement' },
  pont: { label: 'Pont', hint: 'Purple team : l’attaque au service de la détection' },
} as const;
export type Team = keyof typeof TEAMS;
