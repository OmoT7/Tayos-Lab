// All the words on the site live here. Edit these to update content.

const PH = "[PLACEHOLDER — add details]";
const STACK = ["[React]", "[SpringBoot]", "[Kubernetes]", "[PostgreSQL]", "[EKS]", "[Java]"];

// A blank project card. To fill one in, replace `placeholderProject("#04")`
// in PROJECTS below with a full object like the ones above it.
const placeholderProject = (num) => ({
  num,
  name: "[PROJECT NAME]",
  tag: "[ONE-LINE TAGLINE]",
  overview: PH,
  role: "[YOUR ROLE]",
  results: PH,
  stack: STACK,
  image: null,
  link: "https://github.com/",
});

export const PROJECTS = [
  {
    num: "#01",
    name: "JPMorgan Chase Modernization",
    tag: "Software engineering internship · Chicago · Summer 2026",
    overview: "Full-stack modernization work from my software engineering internship at JPMorgan Chase.",
    role: "As a full-stack software engineer intern, I owned the modernization of a legacy application end to end: migrating the frontend to React, re-architecting the backend with Spring Boot, consolidating the databases, and building real-time APIs to replace the old data flow.",
    results: "Delivered the full modernization on schedule despite surprise roadblocks and a tight timeline, with a smooth handoff to the team. Won 1st place in the final intern presentation, and placed 2nd in JPMorgan's global company-wide hackathon with an AI-powered internal job movement tool.",
    stack: STACK,
    image: null, // e.g. import jpmImg from "./assets/jpm.png" and put it here
    link: "https://github.com/",
  },
  {
    num: "#02",
    name: "FairPay",
    tag: "Real-time bill splitting · 4-person team",
    overview: "A real-time bill-splitting app, co-built with a team of four.",
    role: "Full-Stack Engineer *— built the backend and frontend, and implemented real-time updates using WebSockets, and designed the database schema for efficient data retrieval.*",
    results: PH,
    stack: STACK,
    image: null,
    link: "https://github.com/CS-396-Full-Stack-Software-Eng/final-project-tjjay",
  },
  {
    num: "#03",
    name: "Culina",
    tag: "AI-powered voice cooking assistant",
    overview: "An AI-powered voice cooking assistant app.",
    role: "[YOUR ROLE]",
    results: PH,
    stack: STACK,
    image: null,
    link: "https://github.com/",
  },
  {
    num: "#04",
    name: "Data Structures & Algorithms Teaching Assistant",
    tag: "Peer Mentor Award · Northwestern University",
    overview: "Teaching assistant for the Data Structures & Algorithms course at Northwestern University.",
    role: "Assisted students with understanding complex data structures and algorithms, provided guidance on assignments, and conducted review sessions.",
    results: "Received the Peer Mentor Award for outstanding support and mentorship to students.",
    stack: ["[DSSL2]", "[Racket]"],
    image: null,
    link: "https://www.mccormick.northwestern.edu/computer-science/news-events/news/articles/2025/northwestern-cs-announces-fall-2025-outstanding-teaching-assistant-and-peer-mentors.html",
  },
  {
    num: "#05",
    name: "CDK Global Fixed Ops Modernization",
    tag: "Working on a frontend team · CDK Global · Summer 2025",
    overview: "Worked on a frontend team at CDK Global to modernize the Fixed Ops application.",
    role: "Worked on developing and enhancing user interfaces, implementing responsive designs, and collaborating with backend developers to integrate APIs.",
    results: "Achieved significant improvements in user experience and performance of the application, contributing to the overall success of the project.",
    stack: ["[React]", "[Node]", "[Styled Components]","[Redux]", "[Jest]", "[Redux-Saga]", "[React Testing Library]", "[SonarQube]"],
    image: null,
    link: "https://www.mccormick.northwestern.edu/computer-science/news-events/news/articles/2025/northwestern-cs-announces-fall-2025-outstanding-teaching-assistant-and-peer-mentors.html",
  },
  {
    num: "#06",
    name: "NU Monopoly",
    tag: "A Monopoly game for Northwestern University students",
    overview: "A Java-Application Monopoly game designed for Northwestern University students to play locally.",
    role: "Designed and implemented the game logic, user interface, and multiplayer functionality for a seamless gaming experience, Testing and debugging to ensure smooth gameplay and user satisfaction.",
    results: "Successfully created a fun and engaging Monopoly game that can be enjoyed by Northwestern University students, receiving positive feedback from players.",
    stack: ["[Java]", "[JavaFX]", "[JUnit]", "[Maven]", "[Git]", "[Cucumber]", "[IntelliJ IDEA]"],
  },
  {
    num: "#07",
    name: "Portfolio Website",
    tag: "This very site you're on right now!",
    overview: "A portfolio website to showcase my projects, work experience, and hobbies.",
    role: "Designed and developed the website using React, implementing responsive layouts, interactive components, and smooth navigation.",
    results: "Created a visually appealing and user-friendly portfolio website that effectively presents my skills and experiences to potential employers and collaborators.",
    stack: ["[React]", "[CSS]", "[HTML]", "[JavaScript]", "[Vite]"],
    image: null,
    link: "www.github.com/Omot7/tayos-lab",
  },
 
];

export const ABOUT = {
  photo: null, // e.g. import me from "./assets/me.jpg"
  intro:
    "Omotayo “Tayo” Oludemi — Computer Science senior at Northwestern University, finishing a combined BS/MS in CS (June 2027). Full-stack software engineer.",
  why: `Hi, I'm Omotayo Oludemi, but you can call me Tayo: "Tie" like the one you wear with a suit, "Yo" like what's up. I'm a CS student at Northwestern pursuing my combined BS/MS, and I love building systems that make a real impact (and ideally don't page anyone at 3 a.m.). At JPMorgan Chase, I took over a legacy project that had clearly seen some things and delivered it on schedule despite surprise roadblocks, because I like to understand the real problem and ask plenty of questions before I start typing. Outside of engineering, I'm rewatching crime shows and anime, drawing, taking photos, or building Culina, my AI voice cooking assistant that's more confident in the kitchen than I am.`,  status: "open to new-grad software engineering roles",
  outside: "Watching crime shows and anime, drawing, taking photos, and building Culina, my AI voice cooking assistant, going on nature walks and taking picture of natures",
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  log: [
    ["2026", "Software Engineer Intern · JPMorgan Chase, Chicago"],
    ["2025", "Software Development Intern · CDK Global"],
    ["2025–now", "Teaching Assistant, Data Structures & Algorithms · Northwestern CS (Peer Mentor Award)"],
    ["2025–now", "Career Prep Fellow · Management Leadership for Tomorrow"],
    ["2023–now", "QuestBridge Match Scholar · Northwestern University"],
  ],
};

export const CONTACT = {
  email: "omotayooludemi@gmail.com",
  linkedin: { url: "https://www.linkedin.com/in/omotayo-oludemi", label: "linkedin.com/in/omotayo-oludemi" },
  github: { url: "https://github.com/Omot7", label: "github.com/Omot7" },
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
};

export const HOBBIES = [
  { file: "anime.log", line: "Steins;Gate is canon. El Psy Kongroo.", ph: "Code Geass, Love is War, Re:Zero, Monster, Mushishi, Chitose is in The Ramune Bottle" },
  { file: "portraits/", line: "I draw portraits, pencil on paper, like this whole site.", ph: "[ADD A SKETCH]" },
  { file: "gym.exe", line: "Lifting and staying active.", ph: "[Bench - 135, Squat-165]...I want to get strong" },
  { file: "now_playing.mp3", line: "MF DOOM on repeat.", ph: "Kendrick Lamar, Kanye West (Old Kanye), Daniel Caesar, Don Toliver, Tyler the Creator" },
  { file: "game_night.sav", line: "Games with old friends.", ph: "Valorant, Hollow Knight, Sliksong, Palworld, Minecraft" },
  { file: "nature_photo.log", line: "I like taking photos of nature", ph: "Trees, Flowers, Animals, Anything!!!!" },
  ];

// Numbers on the worldline poster; each click shows the next one.
export const WORLDLINES = ["1.048596", "0.571024", "0.337187", "1.130205", "0.523307"];

// Loading-screen log lines. Each appears once the progress bar passes `at` (percent).
export const BOOT_LINES = [
  { t: "> initializing lab_systems ........ ok", at: 8 },
  { t: "> sharpening pencils .............. ok", at: 34 },
  { t: "> calibrating door hinges ......... ok", at: 60 },
  { t: "> hiding the mess ................. ok", at: 86 },
];

export const OS_LINES = [
  { t: "> mounting /projects .............. ok", at: 15 },
  { t: "> loading caffeine drivers ........ ok", at: 50 },
  { t: "> welcome back, Tayo", at: 90 },
];

export const HOBBY_OS_LINES = [
  { t: "> unknown USB device: TOP_SECRET ... mounted", at: 10 },
  { t: "> bypassing recruiter mode ......... ok", at: 40 },
  { t: "> decrypting /.hidden/hobbies ...... ok", at: 70 },
  { t: "> wait. how did you find this.....", at: 95 },
];
