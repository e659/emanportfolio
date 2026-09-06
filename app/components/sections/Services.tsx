"use client";

import { motion } from "framer-motion";
import {
  Code2,
  LayoutTemplate,
  Rocket,
  Smartphone,
} from "lucide-react";
import { Container } from "../ui/Container";

const services = [
  {
    number: "01",
    icon: LayoutTemplate,
    title: "Web Development",
    description:
      "Responsive and modern websites built with React, Next.js and TypeScript.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Scalable frontend architecture, reusable components and maintainable code.",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Responsive UI",
    description:
      "Interfaces that feel polished and consistent across desktop, tablet and mobile.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Performance & SEO",
    description:
      "Fast-loading experiences with technical SEO, accessibility and performance in mind.",
  },
];

export function Services() {
  return (
    <section className="py-32"  id="services">
      <Container>
        <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-violet-400" />

              <span className="text-xs uppercase tracking-[0.3em] text-violet-400">
                05 — What I do
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              From idea
              <br />
              <span className="text-zinc-600">to production.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-zinc-500 lg:col-span-5 lg:justify-self-end">
            I help turn product ideas and designs into reliable,
            responsive and production-ready digital experiences.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-7 sm:p-9"
              >
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-violet-400">
                    <Icon size={21} />
                  </div>

                  <span className="text-xs text-zinc-700">
                    {service.number}
                  </span>
                </div>

                <div className="relative mt-8">
                  <h3 className="text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-zinc-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}