"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Container } from "../ui/Container";

const stats = [
  {
    value: "3+",
    label: "Years Experience",
  },
  {
    value: "15+",
    label: "Projects Built",
  },
  {
    value: "100%",
    label: "Passion for UI",
  },
];

const cards = [
  {
    icon: Code2,
    title: "Clean Engineering",
    description:
      "I care about reusable components, scalable architecture and code that's easy to understand and maintain.",
  },
  {
    icon: Layers3,
    title: "Modern Stack",
    description:
      "React, Next.js, TypeScript, Tailwind CSS, Redux Toolkit and modern frontend tooling.",
  },
  {
    icon: Rocket,
    title: "Performance First",
    description:
      "Fast loading experiences, responsive interfaces, SEO-friendly pages and production-ready applications.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <Container>
        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-violet-400" />

                <span className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
                  01 — About me
                </span>
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                More than
                <br />

                <span className="text-zinc-600">just code.</span>
              </h2>

              <p className="mt-6 max-w-sm text-base leading-7 text-zinc-500">
                I combine engineering, design and attention to detail to
                create digital products that feel simple, fast and intuitive.
              </p>

              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white"
              >
                Let's work together
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-8">
            {/* Intro card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-10"
            >
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]" />

              <div className="relative">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Sparkles size={19} />
                  </div>

                  <span className="text-sm text-zinc-500">
                    Frontend Developer
                  </span>
                </div>

                <p className="max-w-3xl text-2xl font-medium leading-relaxed tracking-tight text-zinc-200 sm:text-3xl">
                  I build{" "}
                  <span className="text-white">
                    scalable web experiences
                  </span>{" "}
                  that balance beautiful interfaces with solid engineering.
                </p>

                <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500">
                  With 3+ years of frontend experience, I specialize in
                  transforming designs and product ideas into responsive,
                  accessible and maintainable applications using React,
                  Next.js and TypeScript.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:bg-white/[0.04]"
                >
                  <div className="text-3xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </div>

                  <div className="mt-2 text-sm text-zinc-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature cards */}
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -5 }}
                    className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-violet-400/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-colors duration-300 group-hover:border-violet-400/20 group-hover:text-violet-400">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-6 font-semibold text-white">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}