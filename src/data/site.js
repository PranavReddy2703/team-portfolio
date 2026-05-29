// ─────────────────────────────────────────────────────────────────────────────
//  Single source of truth for the whole site.
//  • To use REAL photos later: drop an image in /src/assets/team and set the
//    member's `image` field, e.g.  image: new URL('../assets/team/pranav.jpg', import.meta.url).href
//    While `image` is null, a premium monogram placeholder is rendered automatically.
//  • To rename the collective: edit `brand` below.
// ─────────────────────────────────────────────────────────────────────────────
import pranavImg from '../assets/1.png';
import sathwikImg from '../assets/2.png';
import lokiImg from '../assets/3.png';
import dineshImg from '../assets/4.png';

export const brand = {
  name: 'Synapse',
  suffix: 'Collective',
  tagline: 'AI & Software Engineering Collective',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'team', label: 'Team' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'tech', label: 'Tech Stack' },
];

export const hero = {
  heading: ['Building Intelligent Solutions', 'for a Smarter Tomorrow'],
  subheading:
    'We are a collective of software engineers, AI enthusiasts, designers, and innovators building impactful digital experiences powered by modern technologies.',
  stats: [
    { value: '14', label: 'Projects Completed' },
    { value: '04', label: 'Engineers in the Collective' },
    { value: 'B.Tech CSE', label: 'Data Science Specialization' },
    { value: 'Swecha · Viswam.ai', label: 'Flagship Internship' },
  ],
};

// ── Team ─────────────────────────────────────────────────────────────────────
export const team = [
  {
    id: 'pranav',
    name: 'Pranav Reddy Atakula',
    short: 'Pranav',
    initials: 'PA',
    role: 'AI & Full Stack Developer',
    image: pranavImg,
    accent: '#10b981',
    bio: 'AI developer and Data Science student focused on intelligent software systems, machine learning applications, and scalable full-stack solutions.',
    internship: 'Swecha — Viswam.ai',
    skills: [
      'Python',
      'React',
      'TensorFlow',
      'Machine Learning',
      'FastAPI',
      'Scikit-Learn',
      'Java',
      'Data Science',
    ],
    featured: ['FinSight', 'AgriSmart', 'Voice Chess', 'Dishventory AI'],
    links: {
      portfolio: 'https://pranavreddy2703.github.io/my-portfolio/',
      github: 'https://github.com/pranavreddy2703',
      linkedin: 'https://www.linkedin.com/in/pranav-reddy-atakula-278430268/',
      email: 'atakulapranav.official@gmail.com',
    },
  },
  {
    id: 'sathwik',
    name: 'Sathwik Naag Sankuru',
    short: 'Sathwik',
    initials: 'SS',
    role: ' Full Stack Dev & AI/ML Enthusiast',
    image: sathwikImg,
    accent: '#34d399',
    bio: 'Java Full Stack Developer and AI/ML enthusiast passionate about software engineering, machine learning, problem solving, and impactful digital experiences.',
    internship: 'Swecha — Viswam.ai',
    skills: [
      'Java',
      'Machine Learning',
      'Deep Learning',
      'MySQL',
      'JavaScript',
      'TensorFlow',
      'Git',
      'DSA',
    ],
    featured: [
      'Traffic Sign Recognition',
      'Learning Recommendation System',
      'File Analyzer Tool',
      'Java Game Development',
    ],
    links: {
      portfolio: 'https://sathops.github.io/SathwikNaagPortfolio/',
      github: 'https://github.com/SathOps',
      linkedin: 'https://www.linkedin.com/in/sathwik-naag-sankuru-820756386',
      email: 'sathwiknaag12@gmail.com',
    },
  },
  {
    id: 'lokeshwar',
    name: 'Lokeshwar Sura',
    short: 'Lokeshwar',
    initials: 'LS',
    role: 'Sotware Developer',
    image: lokiImg,
    accent: '#2dd4bf',
    bio: 'AI engineer and full stack developer focused on intelligent analytics platforms, machine learning systems, and modern software engineering.',
    internship: 'Swecha — Viswam.ai',
    skills: [
      'Python',
      'React',
      'FastAPI',
      'Machine Learning',
      'Scikit-Learn',
      'SQLite',
      'Java',
      'Data Science',
    ],
    featured: [
      'Formula 1 Analytics Dashboard',
      'AI Mock Interview Platform',
      'Business Analytics Platform',
    ],
    links: {
      portfolio: 'https://lokeshwarsura.github.io/Lokeshwar-s-portfolio/',
      github: 'https://github.com/lokeshwarsura',
      email: 'lokeshwarsura@gmail.com',
    },
  },
  {
    id: 'dinesh',
    name: 'Dinesh Eswar Borra',
    short: 'Dinesh',
    initials: 'DB',
    role: 'Software Developer',
    image: dineshImg,
    accent: '#6ee7b7',
    bio: 'Software developer focused on AI-powered applications, NLP solutions, and practical software engineering.',
    internship: 'Swecha — Viswam.ai',
    skills: [
      'Python',
      'JavaScript',
      'Data Science',
      'NLP',
      'Git',
      'Pandas',
      'NumPy',
    ],
    featured: [
      'Auto Correct System',
      'AI Calendar',
      'Election Sentiment Monitoring',
    ],
    links: {
      portfolio: 'https://dinesh-eswar-borra.github.io/Portfolio/',
      github: 'https://github.com/dinesh-eswar-borra',
      email: 'dinesheswar36@gmail.com',
    },
  },
];

// ── About pillars ──────────────────────────────────────────────────────────
export const pillars = [
  {
    icon: 'target',
    title: 'Our Mission',
    text: 'Engineer intelligent, data-driven products that turn complex problems into intuitive experiences people actually want to use.',
  },
  {
    icon: 'eye',
    title: 'Our Vision',
    text: 'To grow into a world-class AI studio whose work defines how the next generation of software thinks, learns, and adapts.',
  },
  {
    icon: 'bolt',
    title: 'Innovation',
    text: 'We prototype fast and chase hard problems — from real-time telemetry to multimodal AI — refusing to ship the ordinary.',
  },
  {
    icon: 'git',
    title: 'Open Source',
    text: 'We build in the open, contribute back, and treat clean, shareable code as a first-class deliverable.',
  },
  {
    icon: 'brain',
    title: 'AI Development',
    text: 'Machine learning, deep learning, and NLP are at our core — production-grade models, not notebooks left to rot.',
  },
  {
    icon: 'flask',
    title: 'Research Mindset',
    text: 'We read the papers, run the experiments, and measure everything. Curiosity is the engine behind every build.',
  },
  {
    icon: 'users',
    title: 'Collaboration Culture',
    text: 'Cross-functional by default — design, data, and engineering moving as one team toward a single outcome.',
  },
];

// ── Projects (member-tagged) ─────────────────────────────────────────────────
export const projects = [
  {
    title: 'FinSight',
    member: 'pranav',
    tags: ['Python', 'React', 'Scikit-Learn', 'ML'],
    description:
      'End-to-end platform that automates tracking of fragmented bank statements, converting unstructured CSV/PDF data into real-time financial insights with a multiclass transaction classifier.',
    featured: true,
  },
  {
    title: 'AgriSmart',
    member: 'pranav',
    tags: ['Python', 'Expo', 'React', 'ML'],
    description:
      'IoT-enabled precision-agriculture system processing real-time soil and environmental data, with ML-driven irrigation and crop-suitability recommendations on a cross-platform dashboard.',
  },
  {
    title: 'Voice Chess',
    member: 'pranav',
    tags: ['Python', 'Whisper', 'Llama', 'NLP'],
    description:
      'Voice-activated chess platform that translates conversational commands into real-time engine moves using a Llama-based NLP parser and OpenAI Whisper transcription.',
  },
  {
    title: 'Dishventory AI',
    member: 'pranav',
    tags: ['Python', 'FastAPI', 'React', 'Prophet'],
    description:
      'AI-driven kitchen inventory system predicting dish demand with Prophet forecasting to cut ingredient waste, served through a FastAPI prediction endpoint.',
  },
  {
    title: 'Traffic Sign Recognition',
    member: 'sathwik',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'CNN'],
    description:
      'Deep CNN classifying 43 traffic-sign classes with 99.65% test accuracy on the GTSRB dataset via augmentation and dropout regularization.',
    featured: true,
  },
  {
    title: 'Learning Recommendation System',
    member: 'sathwik',
    tags: ['Python', 'Scikit-Learn', 'MySQL'],
    description:
      'Hybrid recommender combining KNN, SVD, and TF-IDF over user interaction data to generate ranked course suggestions, evaluated with MAE, RMSE, and F1.',
  },
  {
    title: 'File Analyzer Tool',
    member: 'sathwik',
    tags: ['Java', 'File I/O'],
    description:
      'Java utility that computes word, character, and file-size metrics through file handling and string-processing operations.',
  },
  {
    title: 'Java Game Development',
    member: 'sathwik',
    tags: ['Java', 'OOP'],
    description:
      'A suite of console-based Java games — Quiz, Banking System, Hangman, Slot Machine — plus an in-progress 2D game built from scratch.',
  },
  {
    title: 'Formula 1 Analytics Dashboard',
    member: 'lokeshwar',
    tags: ['React', 'FastAPI', 'FastF1', 'Scikit-Learn'],
    description:
      'Full-stack real-time F1 analytics and prediction dashboard streaming live telemetry — lap timings, positions, track status — with ML race-outcome prediction.',
    featured: true,
  },
  {
    title: 'AI Mock Interview Platform',
    member: 'lokeshwar',
    tags: ['React', 'FastAPI', 'SQLite', 'Scikit-Learn'],
    description:
      'Production-grade multimodal interview simulator with live speech-to-text, TF-IDF answer relevance scoring (90%+), and FER/SER models for emotion and confidence analysis.',
  },
  {
    title: 'Business Analytics Platform',
    member: 'lokeshwar',
    tags: ['React', 'FastAPI', 'SQLite', 'NLP'],
    description:
      'AI-driven business-intelligence platform with K-Means segmentation, ARIMA sales forecasting, churn prediction, and a natural-language AI chat copilot.',
  },
  {
    title: 'Auto Correct System',
    member: 'dinesh',
    tags: ['Python', 'NLP'],
    description:
      'Grammar- and spelling-correction tool built on NLP techniques and string-similarity algorithms for clean, automatic sentence fixes.',
  },
  {
    title: 'AI Calendar',
    member: 'dinesh',
    tags: ['Python', 'NLP'],
    description:
      'Intelligent scheduling assistant that understands natural-English commands to create, cancel, and display meetings automatically.',
  },
  {
    title: 'Election Sentiment Monitoring',
    member: 'dinesh',
    tags: ['Python', 'NLP', 'Dashboard'],
    description:
      'Web dashboard applying NLP to real-time news headlines to gauge public sentiment on election-related topics as it unfolds.',
    featured: true,
  },
];

// ── Tech stack ───────────────────────────────────────────────────────────────
export const techStack = [
  { name: 'Java', icon: 'java' },
  { name: 'Python', icon: 'python' },
  { name: 'React', icon: 'react' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'Machine Learning', icon: 'ml' },
  { name: 'Deep Learning', icon: 'dl' },
  { name: 'TensorFlow', icon: 'tensorflow' },
  { name: 'Scikit-Learn', icon: 'sklearn' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'SQL', icon: 'sql' },
  { name: 'SQLite', icon: 'sqlite' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Linux', icon: 'linux' },
];

// ── Achievements timeline ─────────────────────────────────────────────────────
export const achievements = [
  {
    title: 'Swecha — Viswam.ai Internship',
    kind: 'Internship',
    text: 'Hands-on work with Viswam.ai on open, India-scale AI initiatives and applied machine learning.',
  },
  {
    title: 'Bharatversity Internship',
    kind: 'Internship',
    text: 'Summer Data Science internship — data preprocessing, visualization, and real-world insight extraction.',
  },
  {
    title: 'BITS Pilani — AI/ML Internship',
    kind: 'Internship',
    text: '7-week AI/ML internship at the Hyderabad campus building and evaluating ML classification models.',
  },
  {
    title: 'Meta Certifications',
    kind: 'Certification',
    text: 'Advanced React, JavaScript, Version Control, and HTML & CSS — the full Meta front-end track.',
  },
  {
    title: 'NVIDIA Deep Learning',
    kind: 'Certification',
    text: 'Deep Learning fundamentals certification through the NVIDIA Deep Learning Institute.',
  },
  {
    title: 'Google Cloud Study Jams',
    kind: 'Program',
    text: 'Completed Google Cloud Study Jams, building cloud and ML skills on Google Cloud Platform.',
  },
  {
    title: 'Deloitte Job Simulation',
    kind: 'Simulation',
    text: 'Deloitte Data Analytics virtual job simulation — applied analytics on realistic business problems.',
  },
  {
    title: 'Technical Leadership Roles',
    kind: 'Leadership',
    text: 'Tech Lead at ENIGMA, Secretary at DISHA, AIU Esports Team Captain, and GDG Lead Designer.',
  },
];
