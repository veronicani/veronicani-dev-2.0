import { tNavItem, tSocialLink, tEmail, tExperience, tProject, tBrandLogo } from "./types";

/** Constants for information to be used throughout the site. */

const NAV_ITEMS: tNavItem[] = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const SOCIAL_LINKS: tSocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/veronicani/",
    cls: "bi-linkedin",
    path: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z",
  },
  {
    name: "GitHub",
    url: "https://github.com/veronicani",
    cls: "bi-github",
    path: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8",
  },
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com/_veronicani",
  //   icon: "bootstrap-icons.svg#twitter-x",
  // },
];

const BRAND_LOGOS_COLOR = '#2462FF'

const BRAND_LOGOS: tBrandLogo[] = [
  {
    name: "Meta",
    path: "/static/logos_edit/meta_logo.svg",
    id: "#meta-logo",
    alt: "Meta Logo",
    height: 100,
    width: 100,
  }, 
  {
    name: "Reebok",
    path: "/static/logos_edit/reebok_logo.svg",
    id: "#reebok-logo",
    alt: "Reebok Logo",
    height: 70,
    width: 70,
  }, 
  {
    name: "National Geographic",
    path: "/static/logos_edit/nat-geo_logo.svg",
    id: "#nat-geo-logo",
    alt: "National Geographic Logo",
    height: 100,
    width: 100,
  }, 
  {
    name: "America's Test Kitchen",
    path: "/static/logos_edit/america-test-kitchen_logo.svg",
    id: "#america-test-kitchen-logo",
    alt: "America's Test Kitchen Logo",
    height: 100,
    width: 100,
  }, 
  {
    name: "Bai Brands",
    path: "/static/logos_edit/bai_logo.svg",
    id: "#bai-logo",
    alt: "Bai Brands Logo",
    height: 50,
    width: 50,
  }, 
  {
    name: "Museum of Fine Arts Boston",
    path: "/static/logos_edit/mfa-boston_logo.svg",
    id: "#mfa-logo",
    alt: "Museum of Fine Arts Boston Logo",
    height: 120,
    width: 120,
  }, 
  {
    name: "Kronos Inc.",
    path: "/static/logos_edit/kronos_logo.svg",
    id: "#kronos-logo",
    alt: "Kronos Inc. Logo",
    height: 120,
    width: 120,
  }, 
  {
    name: "Century Link",
    path: "/static/logos_edit/century-link_logo.svg",
    id: "#century-link-logo",
    alt: "Century Link Logo",
    height: 130,
    width: 130,
  }, 
  {
    name: "Kellogg's ",
    path: "/static/logos_edit/kelloggs_logo.svg",
    id: "#kelloggs-logo",
    alt: "Kellogg's Logo",
    height: 100,
    width: 100,
  }, 

]

const PROJECTS: tProject[] = [
  {
    title: "veronicani.com",
    urls: {
      demo: "https://veronicani.com/",
    },
    tags: ["Webflow", "Adobe CC", "After Effects"],
    imageUrl: "veronicani-com-demo.gif",
    imageAlt: "Demo of veronicani.com",
    description:
      `A bespoke website designed with Webflow to showcase my design and
      illustration practice.`,
  },
  {
    title: "Flask Cafe",
    urls: {
      demo: "https://flaskcafe.veronicani.dev/",
      github: "https://github.com/veronicani/flask-cafe",
    },
    loginCreds: {
      guest: {
        username: "guest",
        password: "password",
      },
      admin: {
        username: "admin",
        password: "secret",
      },
    },
    tags: [
      "Flask",
      "Jinja",
      "Google Maps API",
      "Bootstrap",
      "SASS",
      "PostgreSQL",
    ],
    imageUrl: "flaskcafe-demo.gif",
    imageAlt: "Demo of Flask Cafe app",
    description:
      `A full stack MVP Flask application with Google Maps API integration to
      allow users to browse cafes, add new cafes, favorite cafes, and
      add menu specialties.`,
  },
  {
    title: "Jobly",
    urls: {
      demo: "https://jobly.veronicani.dev/",
      github: "https://github.com/veronicani/react-jobly",
    },
    loginCreds: {
      guest: {
        username: "guest",
        password: "password",
      },
      admin: {
        username: "admin",
        password: "secret",
      },
    },
    tags: ["React", "Express", "Node.js", "PostgreSQL", "Jest"],
    imageUrl: "jobly-demo.gif",
    imageAlt: "Demo of Jobly app",
    description:
      `A job board application built with a React frontend. It includes a
      RESTful API to interface with an Express backend and uses a relational
      database to store user and company records. Full authentication and
      authorization routes built for users and admin, tested with Jest at
      99% coverage.`,
    notes: "The server may be sleeping 💤, and needs a minute to wake up!",
  },
  {
    title: "Sharebnb",
    urls: {
      demo: "https://sharebnb.veronicani.dev/",
      github: "https://github.com/veronicani/sharebnb-react",
    },
    tags: ["Flask", "Jinja", "Google Maps API", "Bootstrap"],
    imageUrl: "sharebnb-demo.gif",
    imageAlt: "Demo of Sharebnb app",
    description:
      `Full stack space-sharing application with a React frontend. It
      interfaces with a RESTful Flask API, and integrates AWS S3 for
      photo storage. Users can browse, search, and add listings on the site.`,
    notes: "The server may be sleeping 💤, and needs a minute to wake up!",
  },
];

const EXPERIENCES: tExperience[] = [
  {
    position: "Developer I",
    company: "Schrödinger Inc.",
    location: "New York",
    years: ["May 2025", "present"], 
    description: [
      `Accelerating drug discovery workflows by developing graphical molecular
       dynamics analysis tools using Python, PyQt, and an MVC framework.
       Applying test-driven development and object-oriented principles to build
       scalable features with rigorous unit testing.`,
      `Scaling org-wide AI adoption as member of the Agentic DevX working group.
       Authoring educational newsletters on responsible use of AI and
       facilitating cross-department workshops on integrating agents into the
       software development lifecycle.`,
      `Operating in an Agile environment, drafting Jira tickets, architecting
       code, and organizing work into deliverable tasks to ensure on-time
       feature releases.`,
      `Collaborating with UX designers, product managers, scientific
       stakeholders, and QA teams; applying UX principles to bridge
       communication between teams and align on complex requirements.`,
    ],
  },
  {
    position: "UX Designer (Intern, Contractor)",
    company: "ClinicMind Inc.",
    location: "Remote",
    years: ["Oct 2024", "May 2025"], 
    description: [
      `Designed a unified patient intake system across mobile, web, and kiosk
       platforms using Figma and Adobe Illustrator. Simplified navigation and
       expanded selection options to increase user adoption and accessibility.`,
      `Rearchitected the design system to achieve 1:1 parity with the Material
       Icon API, enabling developers to map assets directly to code via
       standardized naming.`,
      `Maintained and extended the design system, establishing new standards for
       modals and features. Created detailed UX specs and interactive prototypes
       to streamline design-to-development handoff.`,
      `Accelerated product discovery by facilitating stakeholder workshops to
       define requirements and partnering with engineering leads to validate
       technical feasibility prior to high-fidelity handoff.`,
    ],
  },
  {
    position: "Software Engineer, UI",
    company: "NaviGuide Inc.",
    location: "New York",
    years: ["Jul 2024", "Nov 2024"], 
    description: [
      `Led the UX/UI design and implementation of a consumer website using React
       and Tailwind CSS to secure VC interest and strategic partnerships
       (Pursuit, Boys & Girls Club). Created detailed Figma prototypes and UX
       specifications for multiple user-facing dashboards.`,
      `Engineered a multi-step user onboarding flow using PHP Laravel,
       including user authentication, backend data connection, and an
       authorization process enforcing parental consent for student users.`,
      `Managed project tasks via Jira, maintained continuous team alignment,
       and collaborated with engineering lead to validate and optimize
       technical decisions throughout development.`,
    ],
  },
  {
    position: "Fullstack Software Engineer (Volunteer)",
    company: "Live Music Project",
    location: "New York",
    years: ["Mar 2024", "Jul 2024"], 
    description: [
      `Refactored and maintained a legacy codebase (Django, Django REST
       Framework, React), improving stability, performance, and
       maintainability, while integrating third-party features like reCAPTCHA
       validation.`,
    ],
  },
  {
    position: "Software Engineer Intern",
    company: "Rithm School - Student Information System",
    location: "Remote",
    years: ["Jan 2024", "Feb 2024"], 
    description: [
      `Implemented a RDBMS-based tagging system to improve search functionality
       in a Django and PostgreSQL based platform. Streamlined testing using
       third party libraries for model generation, and achieved 99% unit test
       coverage of new features.`,
    ],
  },
  {
    position: "Assistant Language Teacher",
    company: "Japan Exchange and Teaching Program",
    location: "Japan",
    years: ["2021", "2023"],
    description: [
      `Rapidly designed and taught K-12 lesson plans across six Japanese public
       schools.`,
      `Self-taught N3 Japanese to operate in a 100% Japanese workplace. Served
       as Area Leader and US Cultural Ambassador, mentoring peers on cultural
       adjustment while organizing community activities.`,
    ],
  },
  {
    position: "Art Director",
    company: "Black Math Inc.",
    location: "Boston",
    years: ["Sep 2016", "Aug 2020"],
    description: [
      `Spearheaded concept-to-delivery of branding campaigns in multiple domains
       (online, web/TV animation, live action/events, VFX, installation). Clients
       include America’s Test Kitchen, Meta, Instagram, Kellogg’s,
       National Geographic, Reebok, Boston Museum of Fine Arts, and Starbucks.`,
      `Ensured consistent delivery of design assets under tight deadlines and
       evolving requirements. Pitched creative concepts, managed staff/freelance
       talent, and collaborated with animation/production teams.`,
    ],
  },
];

const EMAIL: tEmail = {
  displayText: "hello.veronicani@gmail.com",
  url: "hello.veronicani@gmail.com",
};

export { 
  NAV_ITEMS,
  SOCIAL_LINKS,
  PROJECTS,
  EXPERIENCES,
  EMAIL,
  BRAND_LOGOS,
  BRAND_LOGOS_COLOR
};
