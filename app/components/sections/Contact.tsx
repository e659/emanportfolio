"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  
  Mail,
} from "lucide-react";
import { Container } from "../ui/Container";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] px-6 py-16 text-center sm:px-12 sm:py-24"
        >
          {/* Decorative gradient */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-400">
              <Mail size={24} />
            </div>

            <p className="mt-7 text-xs uppercase tracking-[0.3em] text-violet-400">
              06 — Get in touch
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Let's build something
              <br />
              <span className="text-zinc-600">
                great together.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-zinc-500">
              Have a project, opportunity or just want to say hello?
              My inbox is always open.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:Emanshalapy255@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-black transition hover:bg-zinc-200"
              >
                Send me an email

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="/Eman_Shalapy_CV.pdf"
                download
                className="rounded-full border border-white/10 px-7 py-3.5 font-medium text-white transition hover:bg-white/5"
              >
                Download CV
              </a>
            </div>

            <div className="mt-10 flex justify-center gap-3">
              <a
                href="https://github.com/e659"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-20 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-white/20 hover:text-white"
                aria-label="GitHub"
              >
               Github
              </a>

              <a
                href="https://www.linkedin.com/in/eman-shalapy-34a013196"
              target="_blank"
              rel="noopener noreferrer"
                className="flex h-11 w-20 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-white/20 hover:text-white"
                aria-label="LinkedIn"
              >
               Linkedin
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}