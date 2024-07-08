import { tNavItem, tSocialLink, tEmail, tExperience, tProject, tBrandLogo } from "./types";

/** Constants for information to be used throughout the site. */

const NAV_ITEMS: tNavItem[] = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
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
      "A bespoke website designed with Webflow to showcase my design and" +
      " illustration practice.",
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
      "A full stack MVP Flask application with Google Maps API integration to" +
      " allow users to browse cafes, add new cafes, favorite cafes, and" +
      " add menu specialties.",
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
      "A job board application built with a React frontend. It includes a" +
      " RESTful API to interface with an Express backend and uses a relational" +
      " database to store user and company records. Full authentication and" +
      " authorization routes built for users and admin, tested with Jest at" +
      " 99% coverage.",
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
      "Full stack space-sharing application with a React frontend. It" +
      " interfaces with a RESTful Flask API, and integrates AWS S3 for" +
      " photo storage. Users can browse, search, and add listings on the site.",
    notes: "The server may be sleeping 💤, and needs a minute to wake up!",
  },
];

const EXPERIENCES: tExperience[] = [
  {
    position: "Software Engineer",
    company: "Live Music Project",
    location: "Remote",
    years: [2023, 2024],
    description: [
      "Contributing as a volunteer for Live Music Project, a 501(c)3 nonprofit" +
        " organization dedicated to increasing arts access and arts community," +
        " focused on classical and contemporary music events.",
      "Updating documentation, performing bug fixes, performing QA, and" +
        " maintaining legacy and modern frameworks, with Django," +
        " Django Rest Framework, and React.",
      "Implementing new features such as reCAPTCHA integration for" +
        " Spontaneous Free Tickets, a ticket donation and drawing platform set" +
        " to launch Fall 2024.",
    ],
  },
  {
    position: "Software Engineer Intern",
    company: "Rithm School Student Information System",
    location: "Remote",
    years: [2023, 2024],
    description: [
      "Implemented site-wide tagging system to optimize search results for" +
        " curriculum resources.",
      " Wrote model factories with Django’s factory_boy to streamline testing" +
        " process for tagging system, in accordance to best practices and" +
        " codebase requirements, with 99% test coverage.",
      "Presented research findings of database architecture for user, staff," +
        " and student data to enhance team understanding within two days of" +
        " introduction to a 80,000~ line codebase.",
      "Communicated regularly with project leads according to Agile" +
        " methodologies, and shared resources and problem-solving approaches" +
        " with team members through pair programming.",
    ],
  },
  {
    position: "Assistant English Language Teacher",
    company: "Kanazawa Board of Education x Jet Program",
    location: "Japan",
    years: [2021, 2023],
    description: [
      "Revamped documentation of onboarding packet for incoming teachers to" +
        " streamline cultural immersion and understanding of educational" +
        " policies, workplace procedures.",
      "Implemented online tools, games, and visual lessons in classrooms with" +
        " focus on accessibility and internationalization, resulting in" +
        " increased student engagement with curriculum material.",
      "Led community activities and offered guidance on cultural adaptation and" +
        " daily life as an area leader.",
    ],
  },
  {
    position: "Art Director, Senior Designer",
    company: "Black Math, Inc.",
    location: "Boston",
    years: [2016, 2020],
    description: [
      "Spearheaded conceptual design to final delivery of design systems and" +
        " branding campaigns for digital platforms, web and televison animation," +
        " live events, and visual effects. Clients included: America's" +
        " Test Kitchen, Arnold, Bai Brands, Earth Shoes, Facebook, Harvard" +
        " Business School, Instagram, Kellogg’s, Boston Museum of Fine Arts," +
        " National Geographic, Reebok, Starbucks, and more.",
      "Established effective design processes and flexible workflow pipelines," +
        " ensuring consistent timely delivery of design deliverables under" +
        " tight deadlines and evolving project requirements.",
      "Collaborated with clients, resourced freelance talent, pitched creative" +
        " concepts to senior management, and supported design and animation" +
        " teams in maintaining style consistency and quality.",
    ],
  },
  {
    position: "Art Director",
    company: "MassDigi Innovation Program",
    location: "Worcester, Providence",
    years: [2015, 2016],
    description: [
      "Developed a mobile game from start to launch on iOS and Android in a" +
        " team of programmers and designers.",
      "Ensured optimization of assets according to game-standard" +
        " specifications, for Unity deployment.",
      "Collaborated with programmers, project managers, and designers to solve" +
        " UI/UX, design, and technical challenges.",
      "Drove artistic direction and maintained team communication to ensure" +
        " branding consistency for commercial release in the App and Google" +
        " Play Stores. Created branding documentation to streamline onboarding" +
        " new designers.",
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
