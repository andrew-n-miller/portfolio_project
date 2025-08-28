import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown, ExternalLink, MapPin, Moon, Sun, Code2, Server, Cloud, Shield } from "lucide-react";

const PROFILE = {
  name: "Andrew Miller",
  title: "Full-Stack Web Developer",
  location: "Sacramento, CA (Remote)",
  email: "andrew.nickolas.miller@gmail.com",
  phone: "(916) 500-7374",
  linkedin: "https://www.linkedin.com/in/miller-dev",
  github: "https://github.com/andrew-n-miller",
  resumeUrl: "https://pub-389d99b423884e7eb35f407965fa8f32.r2.dev/Andrew%20Miller%20Resume%202025.pdf",
};

const SKILLS = [
  { label: "Java", icon: <Code2 className="h-5 w-5" /> },
  { label: "Python", icon: <Code2 className="h-5 w-5" /> },
  { label: "JavaScript", icon: <Code2 className="h-5 w-5" /> },
  { label: "React", icon: <Code2 className="h-5 w-5" /> },
  { label: "HTML/CSS", icon: <Code2 className="h-5 w-5" /> },
  { label: "PostgreSQL", icon: <Server className="h-5 w-5" /> },
  { label: "REST APIs", icon: <Server className="h-5 w-5" /> },
  { label: "AWS", icon: <Cloud className="h-5 w-5" /> },
  { label: "Docker", icon: <Cloud className="h-5 w-5" /> },
  { label: "Kubernetes", icon: <Cloud className="h-5 w-5" /> },
  { label: "SonarQube", icon: <Shield className="h-5 w-5" /> },
  { label: "Linux/Bash", icon: <Shield className="h-5 w-5" /> },
];

const PROJECTS = [
  {
    name: "DOEHRS Web Application Enhancements",
    desc:
      "Maintained and enhanced a Struts 2.0 Java web app used by hundreds of users; implemented new features, improved performance, and reduced bug backlog by ~30% through tighter QA collaboration.",
    stack: ["Java", "Struts 2.0", "JavaScript", "PostgreSQL", "SVN"],
    links: [{ href: "#", label: "Case Study" }],
  },
  {
    name: "Data Integration Pipelines",
    desc:
      "Built 6+ data integrations enabling real-time ingest/egress across enterprise systems, exposing secure RESTful endpoints and cutting manual handling by ~40%.",
    stack: ["Apache NiFi", "Java", "Bash", "REST"],
    links: [{ href: "#", label: "Architecture" }],
  },
  {
    name: "Portfolio Website (This Site)",
    desc:
      "Responsive, accessible portfolio built with React + Tailwind, animated with Framer Motion, and designed for 1-click deployment to AWS Amplify.",
    stack: ["React", "TailwindCSS", "Framer Motion", "Amplify"],
    links: [
      { href: "#", label: "Source" },
      { href: "#", label: "Live" },
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "B.E.A.T LLC",
    time: "Oct 2023 – Present",
    bullets: [
      "Enhanced DOEHRS web app (Java, Struts 2.0, JS, PostgreSQL) improving reliability and user experience.",
      "Delivered features from user stories and fixed production bugs, accelerating release cadence.",
      "Partnered with QA/DB teams and used SVN for versioning + demos to stakeholders.",
    ],
  },
  {
    role: "Software Integration Lead",
    company: "NIWC Atlantic",
    time: "Dec 2022 – Oct 2023",
    bullets: [
      "Led a 3-person team to deliver patches across embedded and enterprise systems, increasing uptime ~20%.",
      "Drove accreditation timelines and stakeholder communication for secure web services.",
      "Applied vulnerability management to strengthen system resilience.",
    ],
  },
  {
    role: "Software Developer",
    company: "NIWC Atlantic",
    time: "Mar 2020 – Dec 2022",
    bullets: [
      "Developed 6+ data integrations (NiFi, Java, Bash, REST) reducing manual ops ~40%.",
      "Improved code quality via SonarQube and enhanced automated tests for safer releases.",
      "Mentored ~5 junior devs on pipelines, API design, and Linux.",
    ],
  },
  {
    role: "Cyber Security Analyst",
    company: "NIWC Atlantic",
    time: "Dec 2018 – Mar 2020",
    bullets: [
      "Reduced attack surface ~86% using Tenable Security Center + STIGs.",
      "Produced RMF artifacts (POA&Ms, SSP) to support accreditation for Marine Corps projects.",
      "Monitored threats and implemented mitigations for stack security.",
    ],
  },
];

const EDUCATION = [
  { label: "M.S., Computer Engineering – Clemson University (Dec 2022)" },
  { label: "B.S., Computer Science – College of Charleston (May 2018)" },
  { label: "AWS Certified Cloud Practitioner" },
  { label: "CompTIA Security+" },
];

// ---- UI helpers ----
function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 text-blue-900 dark:text-black">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-200/60 dark:bg-zinc-800/80">
      {children}
    </span>
  );
}

function useDarkMode() {
  const [dark, setDark] = useState(true);
  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return { dark, setDark };
}

export default function Portfolio() {
  const { dark, setDark } = useDarkMode();
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-500">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-zinc-950/70 border-b border-zinc-200/50 dark:border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold">{PROFILE.name}</a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#experience" className="hover:opacity-80">Experience</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={PROFILE.github} className="p-2 rounded-xl hover:bg-zinc-200/60 dark:hover:bg-zinc-800" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href={PROFILE.linkedin} className="p-2 rounded-xl hover:bg-zinc-200/60 dark:hover:bg-zinc-800" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <button
              onClick={() => setDark((d) => !d)}
              className="p-2 rounded-xl hover:bg-zinc-200/60 dark:hover:bg-zinc-800"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {PROFILE.location}
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-900 dark:text-black">
              Building secure, scalable web apps.
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              I’m a full-stack developer with 6+ years of experience across Java, Python, and JavaScript—focused on
              clean architecture, robust APIs, and cloud-native delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90"
              >
                View Projects <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.resumeUrl}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                <FileDown className="h-4 w-4" /> Download Résumé
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                <Mail className="h-4 w-4" /> Contact
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center gap-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 px-3 py-2"
            >
              {s.icon}
              <span className="text-sm font-medium">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, idx) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 hover:shadow-lg/40 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-blue-900 dark:text-black">{p.name}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    {l.label} <ExternalLink className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="space-y-6">
          {EXPERIENCE.map((e) => (
            <div key={e.role} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-black">
                  {e.role} · {e.company}
                </h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{e.time}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Get in touch">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-zinc-600 dark:text-zinc-400">
              I’m open to remote opportunities—especially roles building secure, scalable web applications.
              Reach out and let’s build something great.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90">
                <Mail className="h-4 w-4" /> Email
              </a>
              <a href={PROFILE.linkedin} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 p-6 text-sm">
            <p className="font-medium">Quick facts</p>
            <ul className="mt-2 space-y-2 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2"><Code2 className="h-4 w-4" /> 6+ years software development</li>
              <li className="flex items-center gap-2"><Server className="h-4 w-4" /> REST APIs, PostgreSQL, CI/CD</li>
              <li className="flex items-center gap-2"><Cloud className="h-4 w-4" /> AWS, Docker, Kubernetes</li>
              <li className="flex items-center gap-2"><Shield className="h-4 w-4" /> Security-minded engineering</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between text-sm">
          <p>© {year} {PROFILE.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={PROFILE.github} className="inline-flex items-center gap-2 hover:underline"><Github className="h-4 w-4" /> GitHub</a>
            <a href={PROFILE.linkedin} className="inline-flex items-center gap-2 hover:underline"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 hover:underline</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

