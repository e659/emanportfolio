"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />

      <Container className="relative">
        <div className="max-w-4xl">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-sm text-emerald-300">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[100px]"
          >
            Frontend
            <br />
            <span className="text-gradient">Developer.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl"
          >
            I build modern, scalable and high-performance web applications with
            React, Next.js and TypeScript — turning ideas into polished digital
            experiences.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-black transition hover:bg-zinc-200"
            >
              View my work
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/10 px-6 py-3.5 font-medium text-white transition hover:bg-white/5"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex items-center gap-3"
          >
            <a
              href="https://github.com/e659"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-white/20 hover:text-white"
            >
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/eman-shalapy-34a013196"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-white/20 hover:text-white"
            >
              Linkedin
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 sm:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>

          <ArrowDown size={16} className="animate-bounce" />
        </motion.a>
      </Container>
    </section>
  );
}
