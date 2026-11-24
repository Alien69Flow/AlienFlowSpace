/**
 * Single source of truth for the three ecosystem spaces. Used by the desktop
 * dropdown, the mobile menu sheet and the homepage "Explore Spaces" section so
 * every surface describes each space the same way.
 */

export interface SpaceInfo {
  id: 'academy' | 'clubs' | 'conetworking';
  title: string;
  verb: string;
  /** One-line description for nav menus (keep under ~80 chars). */
  short: string;
  /** Longer description for the homepage cards. */
  long: string;
  icon: string;
  link: string;
  partners: number;
}

export const spaces: SpaceInfo[] = [
  {
    id: 'academy',
    title: 'Academy',
    verb: 'LEARN',
    short: 'Master blockchain, DeFi and sustainability with 30+ learning platforms',
    long: 'Unlock cosmic knowledge through comprehensive educational resources, courses, and tutorials in blockchain, finance, and sustainability.',
    icon: '/lovable-uploads/AcademyLogo.png',
    link: '/academy',
    partners: 30,
  },
  {
    id: 'clubs',
    title: 'Clubs',
    verb: 'BELONG',
    short: 'Join specialized communities for crypto, gaming, music and more',
    long: 'Join specialized communities focused on specific interests, technologies, and missions within the AlienFlowSpace ecosystem.',
    icon: '/lovable-uploads/ClubLogo.png',
    link: '/clubs',
    partners: 18,
  },
  {
    id: 'conetworking',
    title: 'CoNetWorKing',
    verb: 'COLLABORATE',
    short: 'Connect with aligned people and projects to build together',
    long: 'Connect with like-minded individuals, projects, and initiatives across the multiverse to expand your network and opportunities.',
    icon: '/lovable-uploads/CoNetWorKingLogo.png',
    link: '/conetworking',
    partners: 80,
  },
];

export const spacesByAlpha = [...spaces].sort((a, b) => a.title.localeCompare(b.title));
