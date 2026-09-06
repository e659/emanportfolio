import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070707] px-6 text-white">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
          404
        </p>

        <h1 className="mt-5 text-6xl font-semibold tracking-tight">
          Page not found.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-zinc-500">
          The page you're looking for doesn't exist or has
          been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
        >
          <ArrowLeft size={16} />
          Back home
        </Link>
      </div>
    </main>
  );
}