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
  meta,
  blkdotcoffee,
  packpack,
  sevenleaves,
  solugenix,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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

// Alternate bg colours
// black bg: 383E56
// white bg: E6DEDD
const experiences = [
    {
        title: "Full Stack Software Engineer (Freelance)",
        company_name: "PackPack Coffee",
        icon: packpack,
        iconBg: "#383E56",
        date: "December 2024 - Present",
        points: [
            "Designed and deployed a responsive full-stack web application (React, Node.js, Express) that increased bookings by 25% by modernizing the business’s online presence and streamlining customer inquiries.",
            "Implemented comprehensive scheduling system with Google Calendar API integration that automated booking processes, enabled real-time availability visualization, and reduced manual administrative work by 50%.",
            "Developed custom inventory management system for business owner using Python, Tkinter, Pandas and SQLite, reducing inventory management time by 75% and streamlining ordering processes for mobile coffee operations.",
        ],
    },
    {
        title: "Barista, Shift Lead",
        company_name: "Blkdot Coffee",
        icon: blkdotcoffee,
        iconBg: "#E6DEDD",
        date: "December 2023 - Present",
        points: [
            "Trained 15 new employees on recipes, company policies and efficient workflow to maintain a 4+ star rating on Yelp.",
            "Boosted average ticket sales by 18% through effective upselling techniques and creating seasonal drink specials that highlighted premium ingredients",
            "Managed shift scheduling for team of 8-12 baristas, consistently maintaining optimal staffing levels that reduced labor costs by 15% while ensuring excellent service during peak hours.",
        ],
    },
    {
        title: "IT Support Specialist",
        company_name: "Solugenix",
        icon: solugenix,
        iconBg: "#383E56",
        date: "April 2021 - April 2022",
        points: [
            "Provided tier 1 technical support for critical medical sterilization equipment, troubleshooting hardware, software, and network connectivity issues across 1000+ support healthcare facilities across the country.",
            "Managed and maintained IT service desk tickets with an average resolution time of 45 minutes, exceeding organizational SLA targets by 15%.",
            "Collaborated with cross-functional IT teams and field technicians to escalate complex technical issues, maintaining 99.7% uptime for mission-critical medical systems.Managed shift scheduling for team of 8-12 baristas, consistently maintaining optimal staffing levels that reduced labor costs by 15% while ensuring excellent service during peak hours.",
        ],
    },
];

// Removed testimonials
// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };