export const profile = {
  name: "Akshay Mehta",
  role: "Software Engineer",
  tagline: "Frontend · Backend · AI",
  location: "Bengaluru, India",
  email: "mrakshaymehta007@gmail.com",
  phone: "+91 97607 68031",
  resumeUrl: "/Akshay-Mehta-Resume.pdf",
  socials: {
    github: "https://github.com/Mrakshaymehta",
    linkedin: "https://www.linkedin.com/in/akshay-mehta-6234a2230/",
  },
  summary:
    "Software engineer with internship experience at ISRO and Skypoint, plus freelance full-stack work shipping production websites and AI-agent systems. I build across the stack — from React/Next.js frontends to Spring Boot and Node.js backends — with a focus on LLM/AI integration, system design, and clean, reliable APIs.",
};

export const stats = [
  { value: "Top 4%", label: "Flipkart GRID 6.0", sub: "of 500,000+ participants" },
  { value: "3", label: "Engineering roles", sub: "ISRO · Skypoint · Freelance" },
  { value: "2", label: "Production sites shipped", sub: "Live & serving real users" },
  { value: "9", label: "AI agent tools built", sub: "Claude tool-calling agent" },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  links?: { label: string; href: string }[];
  points: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Skypoint.ai",
    role: "Software Development Engineer Intern",
    location: "Bengaluru, India",
    period: "Mar 2026 – Present",
    current: true,
    points: [
      "Contributing to a scalable healthcare compliance platform for workflow automation, audit tracking, and referral management.",
      "Fine-tuned OCR document-extraction models with Azure Document Intelligence (Form Recognizer) to improve field-extraction accuracy on structured and semi-structured healthcare forms.",
      "Designed and built a multi-stage approval workflow system — modeling state transitions, role-based reviewers, and per-step audit trails.",
      "Improved AI-agent evaluations by building eval harnesses and test sets to catch regressions and measure output quality.",
      "Built backend REST APIs in Node.js and FastAPI for task tracking and workflow orchestration, plus responsive React/TypeScript dashboards.",
      "Integrated Azure and Docker for reliable deployments; optimized API performance and reduced latency through backend improvements.",
    ],
    stack: ["Node.js", "FastAPI", "React", "TypeScript", "Azure", "Docker", "OCR"],
  },
  {
    company: "aK Group & Company",
    role: "Full-Stack Web Developer (Freelance)",
    location: "Remote",
    period: "Nov 2025 – Mar 2026",
    links: [
      { label: "akgroupcompany.com", href: "https://akgroupcompany.com" },
      { label: "akeva-website.vercel.app", href: "https://akeva-website.vercel.app" },
    ],
    points: [
      "Took full ownership of a business's digital identity end-to-end — from concept and design to a live, production website.",
      "Designed and launched two professional websites (corporate parent brand + consumer EV product brand) to showcase products to clients and partners.",
      "The new online presence strengthened credibility in tenders and helped secure government contracts — turning the site into a real business asset.",
      "Built lead-capture forms (dealer, contact, product inquiry) that route enquiries straight to the team, creating a steady pipeline.",
      "Delivered a fast, mobile-friendly, SEO-optimized site with Next.js, TypeScript, and Tailwind CSS, deployed on Vercel.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "SEO"],
  },
  {
    company: "Indian Space Research Organisation (ISRO)",
    role: "Project Intern — BLDC Motor Control Systems",
    location: "Bengaluru, India",
    period: "Apr 2025 – Oct 2025",
    points: [
      "Built an end-to-end ML pipeline (preprocessing, feature engineering, training, evaluation) in Python with scikit-learn for torque prediction in BLDC motor control.",
      "Trained a Random Forest regression model achieving RMSE of 0.31 Nm and R² of 0.93, validated against IEEE benchmarks.",
      "Designed and simulated PI/PID controllers in MATLAB/Simulink under varying load and torque, reducing torque ripple and improving response time.",
      "Proposed a hybrid ML–PID control architecture for real-time deployment and presented findings to domain experts.",
    ],
    stack: ["Python", "scikit-learn", "MATLAB", "Simulink", "ML"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  accent: string;
};

export const projects: Project[] = [
  {
    name: "Saathi",
    tagline: "Voice-First AI Mentor for JEE Students",
    description:
      "A voice-first AI mentor that opens every call already knowing the student — recent mock trends, weak chapters, attendance, pending homework — instead of interrogating them. The core “know-before-you-call” differentiator.",
    highlights: [
      "Mentor brain built as a Claude tool-calling agent with 9 function tools (context retrieval, RAG-lite knowledge base, action-item logging, follow-up scheduling, emergency flagging) plus a multi-provider fallback (Claude / Gemini / OpenRouter).",
      "Non-negotiable, LLM-independent safety layer: a two-tier regex distress detector (English + Hindi/Hinglish) that auto-fires human-in-the-loop escalation with a verified mental-health helpline.",
      "Emotional-tone routing (MOTIVATE / SUPPORT / TEACH / PLAN / ESCALATE) and an APScheduler proactive-call engine that turns platform signals into a deduplicated call queue.",
      "Telephony boundary (Bolna + Vobiz + Sarvam STT/TTS) for Indian-language voice and automated parent–teacher calls, shipped with FastAPI APIs, webhooks, dashboards, and a Dockerized deploy.",
    ],
    stack: ["Python", "FastAPI", "Claude API", "RAG", "Docker", "Telephony"],
    accent: "from-violet-500/20 to-fuchsia-500/10",
  },
  {
    name: "HireFlow",
    tagline: "AI-Powered B2B Hiring Platform",
    description:
      "An end-to-end applicant tracking system with AI baked into the hiring funnel — resume scoring, skill-gap analysis, auto-generated tests, and an automated email pipeline for HR workflows.",
    highlights: [
      "AI resume-scoring engine using the Claude API to match resumes against job descriptions, generating match scores and skill-gap analysis.",
      "ATS pipeline (Applied → Screened → Test → Interview → Hired/Rejected) with candidate ranking for efficient shortlisting.",
      "Test-management system with AI-generated questions and automated evaluation of written responses with feedback.",
      "Automated email system with JavaMail for HR workflows (rejections, invites, offers) using dynamic templates, secured with role-based JWT auth.",
    ],
    stack: ["Java", "Spring Boot", "React", "MySQL", "Docker", "Claude API"],
    accent: "from-cyan-500/20 to-blue-500/10",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "SQL"] },
  { label: "Backend", items: ["Spring Boot", "Node.js", "FastAPI", "Express.js", "REST APIs"] },
  { label: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS"] },
  { label: "Databases", items: ["MySQL", "PostgreSQL", "Azure Cosmos DB"] },
  { label: "Cloud & Tools", items: ["Docker", "Azure", "AWS", "Vercel", "Git", "Postman"] },
  {
    label: "AI / ML",
    items: ["LLM Tool-Calling", "AI Agents", "RAG", "OCR", "Prompt Engineering", "scikit-learn"],
  },
];

export const education = {
  school: "RV College of Engineering",
  degree: "B.E. in Electrical & Electronics Engineering",
  location: "Bengaluru, India",
  period: "Mar 2021 – Oct 2025",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Discrete Mathematics",
  ],
};

export const achievements = [
  {
    title: "Flipkart GRID 6.0 — Top 4%",
    detail: "Ranked in the top 4% among 500,000+ participants nationwide.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Terminal", href: "#terminal" },
  { label: "Contact", href: "#contact" },
];
