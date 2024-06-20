import { tNavItem, tSocialLink, tEmail, tExperience, tProject } from "./types";

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
    icon: "bootstrap-icons.svg#linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/veronicani",
    icon: "bootstrap-icons.svg#github",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/_veronicani",
    icon: "bootstrap-icons.svg#twitter-x",
  },
];

const PROJECTS: tProject[] = [
  {
    title: "veronicani.com",
    urls: {
      demo: "https://veronicani.com/",
    },
    tags: ["Webflow", "Adobe CC", "After Effects"],
    imageUrl: "public/projects/demos/veronicani-com-demo.gif",
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
    imageUrl: "public/projects/demos/flaskcafe-demo.gif",
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
    imageUrl: "public/projects/demos/jobly-demo.gif",
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
    imageUrl: "public/projects/demos/sharebnb-demo.gif",
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
    position: "Software Engineer Volunteer",
    company: "Rithm School Student Information System",
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

export { NAV_ITEMS, SOCIAL_LINKS, PROJECTS, EXPERIENCES, EMAIL };
