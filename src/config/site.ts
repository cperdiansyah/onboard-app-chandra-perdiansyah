export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Take Home Test Onboard Crew App - Chandra',
  description:
    "Chandra Perdiansyah's take home test for recruitment test purposes on the company onboard crew app",
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
  externalLinks: {
    title: 'About me',
    links: [
      {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/cperdiansyah/',
        external: true,
      },
      {
        title: 'Github',
        href: 'https://github.com/cperdiansyah',
        external: true,
      },
    ],
  },
};
