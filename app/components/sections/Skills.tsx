"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Database,
  Layers,
  Palette,
  Smartphone,
  Wrench,
} from "lucide-react";
import { Container } from "../ui/Container";

const skillGroups = [
  {
    icon: Braces,
    number: "01",
    title: "Frontend",
    description: "Building scalable and interactive interfaces.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    icon: Layers,
    number: "02",
    title: "State & Data",
    description: "Managing complex application state and APIs.",
    skills: [
      "Redux Toolkit",
      "RTK Query",
      "React Query",
      "context API",
      "REST APIs",
      "Firebase",
      "Firestore",
    ],
  },
  {
    icon: Palette,
    number: "03",
    title: "UI & UX",
    description: "Creating polished and responsive experiences.",
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
      "Responsive Design",
      "Accessibility",
    ],
  },
  {
    icon: Database,
    number: "04",
    title: "Backend & Services",
    description: "Connecting frontend applications to services.",
    skills: ["Firebase", "Authentication", "Cloud Storage", "API Integration"],
  },
  {
    icon: Smartphone,
    number: "05",
    title: "Mobile",
    description: "Extending web skills into mobile experiences.",
    skills: ["React Native", "Expo"],
  },
  {
    icon: Wrench,
    number: "06",
    title: "Tools",
    description: "Tools I use to ship products efficiently.",
    skills: ["Git", "GitHub", "Vercel", "Figma", "VS Code"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-white/5 py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute right-[-150px] top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <Container>
        {/* Heading */}
        <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
                02 — Skills
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Tools I use to
              <br />
              <span className="text-zinc-600">build things.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-zinc-500 lg:col-span-5 lg:justify-self-end">
            My stack is focused on modern frontend development, strong
            architecture and creating experiences that feel great to use.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Header */}
                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-400 transition duration-300 group-hover:border-violet-400/20 group-hover:text-violet-400">
                    <Icon size={21} />
                  </div>

                  <span className="text-xs text-zinc-700">{group.number}</span>
                </div>

                {/* Content */}
                <div className="relative mt-7">
                  <h3 className="text-xl font-semibold">{group.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {group.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="relative mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-400 transition hover:border-white/20 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-zinc-600">
            Always learning. Always improving.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-sm text-zinc-500">
              Open to interesting projects
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
