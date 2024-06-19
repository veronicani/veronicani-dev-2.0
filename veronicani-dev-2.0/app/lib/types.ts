/** Types for data formats. */

type tNavItem = {
  name: string;
  anchor: string;
}

type tSocialLink = {
  name: string;
  url: string;
  icon: string;
}

type tProject = {
  title: string;
  urls: {
    demo?: string;
    github?: string;
  }
  loginCreds?: {
    guest?: {
      username: string;
      password: string;
    }
    admin?: {
      username: string;
      password: string;
    }
  }
  tags: string[];
  imageUrl: string;
  description: string;
  notes?: string;
}

type tExperience = {
  position: string;
  company: string;
  location: string;
  years: [number, number];
  description: string[];
}

type tEmail = {
  displayText: string;
  url: string;
}


export type {
  tNavItem,
  tSocialLink,
  tProject,
  tExperience,
  tEmail,
}