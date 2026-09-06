"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
} from "lucide-react";
import { Container } from "../ui/Container";

const highlights = [
  "Built responsive production-ready web applications",
  "Developed reusable React and Next.js component systems",
  "Integrated REST APIs and authentication flows",
  "Implemented state management with Redux Toolkit and RTK Query",
  "Focused on performance, accessibility and responsive design",
  "Worked with modern deployment and cloud services",
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32"
    >
      <div className="pointer-events-none absolute left-[-200px] top-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

      <Container>
        {/* Heading */}
        <div className="mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
              03 — Experience
            </span>
          </div>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Experience that
            <br />

            <span className="text-zinc-600">
              turns ideas into products.
            </span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Timeline */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-violet-400">
                  <BriefcaseBusiness size={21} />
                </div>

                <div>
                  <p className="text-sm text-zinc-600">
                    2023 — Present
                  </p>

                  <h3 className="mt-1 text-xl font-semibold">
                    Frontend Developer
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    3+ years of professional experience
                  </p>
                </div>
              </div>

              <div className="mt-8 h-px bg-white/10" />

              <p className="mt-8 max-w-sm text-sm leading-7 text-zinc-600">
                Focused on building modern frontend applications
                with a strong balance between user experience,
                maintainability and performance.
              </p>

              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white"
              >
                Let's build something
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Experience card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] lg:col-span-8"
          >
            {/* top gradient */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />

            <div className="p-7 sm:p-10">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    Frontend Engineering
                  </span>

                  <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                    Building scalable interfaces
                  </h3>
                </div>

                <span className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-400">
                  Current
                </span>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500">
                Working across the frontend stack to transform
                product requirements and designs into reliable,
                responsive and production-ready experiences.
              </p>

              {/* Highlights */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="flex gap-3"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
                      <Check size={12} />
                    </div>

                    <p className="text-sm leading-6 text-zinc-500">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mt-10 border-t border-white/5 pt-8">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-700">
                  Core technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "Redux Toolkit",
                    "RTK Query",
                    "Tailwind CSS",
                    "Firebase",
                    "React native",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}