import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";

import { projects } from "@/app/data/projects";
import { Container } from "@/app/components/ui/Container";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      {/* Header */}
      <header className="border-b border-white/5">
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              className="text-lg font-bold"
            >
              E<span className="text-violet-400">.</span>
            </Link>

            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to projects
            </Link>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-violet-400">
              {project.category}
            </span>

            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
              {project.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-500">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black"
              >
                Visit live site
                <ArrowUpRight size={17} />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-6 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                View source
              </a>
            </div>
          </div>

          {/* Hero screenshot */}
          <div className="relative mt-16 aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        </Container>
      </section>

      {/* Project information */}
      <section className="border-y border-white/5 py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                Project details
              </span>
            </div>

            <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
              <div>
                <p className="text-xs text-zinc-600">
                  Year
                </p>

                <p className="mt-2 text-sm text-zinc-300">
                  {project.year}
                </p>
              </div>

              <div>
                <p className="text-xs text-zinc-600">
                  Role
                </p>

                <p className="mt-2 text-sm text-zinc-300">
                  {project.role}
                </p>
              </div>

              <div>
                <p className="text-xs text-zinc-600">
                  Category
                </p>

                <p className="mt-2 text-sm text-zinc-300">
                  {project.category}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.25em] text-violet-400">
                01 — Overview
              </span>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                The project
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="text-xl leading-9 text-zinc-400 sm:text-2xl">
                {project.overview}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="border-y border-white/5 py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                02 — Features
              </span>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                What I built
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
                    <Check size={15} />
                  </div>

                  <span className="text-sm text-zinc-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Challenges */}
      <section className="py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                03 — Challenges
              </span>

              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                Problems to solve
              </h2>

              <div className="mt-8 space-y-4">
                {project.challenges.map((challenge) => (
                  <div
                    key={challenge}
                    className="border-l border-white/10 pl-5"
                  >
                    <p className="text-sm leading-7 text-zinc-500">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-violet-400">
                04 — Solutions
              </span>

              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                How I approached it
              </h2>

              <div className="mt-8 space-y-4">
                {project.solutions.map((solution) => (
                  <div
                    key={solution}
                    className="flex gap-4 border-b border-white/5 pb-4"
                  >
                    <Check
                      size={17}
                      className="mt-1 shrink-0 text-violet-400"
                    />

                    <p className="text-sm leading-7 text-zinc-500">
                      {solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Tech */}
      <section className="border-t border-white/5 py-24">
        <Container>
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-cyan-400">
              05 — Technology
            </span>

            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Built with modern tools
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-zinc-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-10 text-center sm:p-16">
            <p className="text-sm text-zinc-600">
              Interested in working together?
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
              Let's build something great.
            </h2>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-black"
            >
              Get in touch
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}