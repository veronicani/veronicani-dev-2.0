/** Types for data formats. */

type tNavItem = {
  name: string;
  href: string;
};

type tSocialLink = {
  name: string;
  url: string;
  cls: string;
  path: string;
};

type tBrandLogo = {
  name: string;
  path: string;
  id: string;
  alt: string;
  height: number;
  width: number;
}

type tProject = {
  title: string;
  urls: {
    demo?: string;
    github?: string;
  };
  loginCreds?: {
    guest?: {
      username: string;
      password: string;
    };
    admin?: {
      username: string;
      password: string;
    };
  };
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  description: string;
  notes?: string;
};

type tExperience = {
  position: string;
  company: string;
  location: string;
  years: [number, number];
  description: string[];
};

type tEmail = {
  displayText: string;
  url: string;
};

export type { tNavItem, tSocialLink, tProject, tExperience, tEmail, tBrandLogo };
