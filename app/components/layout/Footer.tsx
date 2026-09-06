import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1200px] py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a
              href="#"
              className="text-xl font-bold tracking-tight"
            >
              E<span className="text-violet-400">.</span>
            </a>

            <p className="mt-2 text-sm text-zinc-600">
              Frontend Developer building modern digital experiences.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/e659"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-20 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:text-white"
            >
              Github 
            </a>

            <a
              href="https://www.linkedin.com/in/eman-shalapy-34a013196"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-20 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:text-white"
            >
              Linkedin
            </a>

            <a
              href="#"
              aria-label="Back to top"
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:text-white"
            >
              <ArrowUp size={17} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-zinc-700 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} Eman Shalapy. All rights reserved.
          </span>

          <span>
            Built with Next.js + TypeScript + Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}