import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  creator,
  teamlogo,
  safebangla,
  suffix,
  ses,
  portfolio,
  fitness,
  furniture,
  marriage,
  wallet,
  justice,
  normal,
  savings,
  area,
  temperature,
  normal_portfolio,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Working under a Software Developer Team",
    icon: teamlogo,
    iconBg: "#E6DEDD",
    date: "August 2020 - Running",
    points: [
      "Developing and maintaining web applications using React.js, Next,js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Front-end Developer (Intern)",
    company_name: "Suffix It Limited",
    icon: suffix,
    iconBg: "#E6DEDD",
    date: " May 2023 - July 2023",
    points: [
      " Developed responsive web pages from wireframes and visual designs using HTML, CSS, and JavaScript.",
      "Implemented UI/UX best practices to enhance user engagement and improve website usability.",
      "Utilized Bootstrap and Tailwind CSS frameworks for efficient and consistent development across projects.",
      "Collaborated with back-end development team to integrate front-end functionalities using React.js.",
      "Conducted thorough cross-browser and cross-platform testing to ensure optimal performance and compatibility.",
      "Assisted in optimizing website performance through minification, caching, and asset optimization techniques.",
    ],
  },

  {
    title: "WordPress Developer",
    company_name: "Search Engine School",
    icon: ses,
    iconBg: "#E6DEDD",
    date: "July 2021 – November 2021",
    points: [
      "Built websites using WordPress.",
      "Prepared website proposals for the clients.",
      "Provided technical support to clients.",
      "Designed new features for existing websites.",
      "Customized themes to fulfill clients’ requirements.",
    ],
  },

  {
    title: "IT operator & Facebook page manager (part time)",
    company_name: "Safe Bangla Trade International",
    icon: safebangla,
    iconBg: "#E6DEDD",
    date: "June 2020 – January 2021",
    points: [
      "Created better content for our products.",
      "Customized photo of products.",
      "Uploaded these content into fb page.",
      "Also uploaded into Shop Up ecommerce platform.",
      "Managed how to increased sell from fb page.",
      "Managed customers.",
      "Also worked as an IT operator.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  // {
  //   name: "Portfolio",
  //   description:
  //     "I've created a captivating portfolio using React, TailwindCSS, and Framer Motion that beautifully showcases my skills and projects. This is a fully responsive website.To streamline communication, I've implemented a user-friendly contact form powered by EmailJS, ensuring that potential collaborators or employers can easily reach out. Thanks to the power of TailwindCSS, the site loads quickly and efficiently, and it adapts seamlessly to various screen sizes, making it accessible to everyone",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: portfolio,
  //   source_code_link: "https://earnest-khapse-9a3cee.netlify.app",
  // },
  {
    name: "Fitness Site",
    description:
      "I've created a fitness website using React and custom CSS that's fully responsive. It offers workout routines, nutrition tips, and progress tracking, with a unique and visually appealing design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_view_link: "https://singular-toffee-920cb0.netlify.app",
    source_code_link:
      "https://github.com/mutakabbbir-yeasin/gym-website-with-react",
  },
  {
    name: "Furniture Website",
    description:
      "A full responsive Furniture website. For the complete view of the website we need to run Client Side  and Server Side Code. Client Side code link: https://mutakabbbir-yeasin.github.io/furniture_site_with_react/ and Server Side code link: https://github.com/mutakabbbir-yeasin/furniture_server_side",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: furniture,
    source_code_link: "https://enchanting-longma-0ffd29.netlify.app",
  },
  {
    name: "Marriage Website",
    description: "A full responsive  website.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: marriage,
    source_code_link:
      "https://mutakabbbir-yeasin.github.io/html-css-bootstrap/",
  },
  {
    name: "WattetBox Website",
    description: "A full responsive  website.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: wallet,
    source_code_link:
      "https://mutakabbbir-yeasin.github.io/html-css-bootstrap_project/",
  },
  {
    name: "Justice Website",
    description: "A full responsive  website.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: justice,
    source_code_link: "https://lucent-clafoutis-00dbf1.netlify.app/",
  },
  {
    name: "Normal Web Page",
    description: "A full responsive  web page.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: normal,
    source_code_link: "https://mutakabbbir-yeasin.github.io/webpage_html_css/",
  },
  {
    name: "Normal Portfolio",
    description: "A full responsive  web page.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: normal_portfolio,
    source_code_link: "https://mutakabbbir-yeasin.github.io/html-css-project/",
  },
  {
    name: "Savings Calculator",
    description: "A full responsive  web page.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: savings,
    source_code_link:
      "https://mutakabbbir-yeasin.github.io/basic-bank-calculation-js-using-function/",
  },
  {
    name: "Area Calculator",
    description: "A full responsive  web page.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: area,
    source_code_link: "https://keen-brioche-116a3e.netlify.app/",
  },
  {
    name: "Temperature Calculator",
    description: "A full responsive  web page.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: temperature,
    source_code_link:
      "https://mutakabbbir-yeasin.github.io/temperature-info-of-city/",
  },
];

export { services, technologies, experiences, testimonials, projects };
