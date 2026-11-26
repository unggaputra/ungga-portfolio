
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#101010] px-6 py-8 text-center text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3">
        {/* Logo */}
        <p className="text-sm font-bold tracking-tight">
          UPTRANDRA<span className="text-orange-500">.</span>
        </p>

        {/* Copyright */}
        <p className="text-xs text-zinc-500">
          © 2026 Ungga Putra Mahendra.
        </p>

        {/* Tech Stack */}
        <p className="text-xs text-zinc-600">
          Dirancang dan dikembangkan dengan{" "}
          <span className="text-zinc-400">Next.js</span>,{" "}
          <span className="text-zinc-400">React</span>, dan{" "}
          <span className="text-zinc-400">TypeScript</span>.
        </p>
      </div>
    </footer>
  );
}
