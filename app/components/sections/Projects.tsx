"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Container } from "../ui/Container";
import { projects } from "@/app/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-y border-white/5 py-32"
    >
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />

              <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                04 — Selected work
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Things I've
              <br />
              <span className="text-zinc-600">built.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-zinc-500">
            Real products, real problems and real frontend engineering.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]"
            >
              <div className="grid lg:grid-cols-12">
                {/* Screenshot */}
                <div className="relative min-h-[300px] overflow-hidden border-b border-white/10 bg-zinc-950 lg:col-span-7 lg:min-h-[500px] lg:border-b-0 lg:border-r">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <span className="rounded-full border border-white/10 bg-black/40 px-3 py-2 text-xs text-white backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-5">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                        {project.year}
                      </span>

                      <span className="text-xs text-zinc-700">
                        {project.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-zinc-500">
                      {project.shortDescription}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/link inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
                    >
                      Case study

                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                      />
                    </Link>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                    >
                      Live site
                      <ArrowUpRight size={15} />
                    </a>

                    {/* <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-white/20 hover:text-white"
                      aria-label={`GitHub - ${project.title}`}
                    >
                      Github 
                    </a> */}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}