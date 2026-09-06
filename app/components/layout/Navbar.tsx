"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[calc(100%-2rem)] max-w-5xl">
        <nav className="glass rounded-full px-4 py-3">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-lg font-bold tracking-tight"
            >
              E<span className="text-violet-400">.</span>
            </a>

            <div className="hidden items-center gap-7 md:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-zinc-200 md:block"
            >
              Let's talk
            </a>

            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setOpen(!open)}
              className="rounded-full p-2 text-zinc-300 md:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 pt-4 md:hidden">
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}