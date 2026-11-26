export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#101010] px-6 py-7 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        {/* Logo */}
        <p className="text-sm font-bold tracking-tight">
          UPTRANDRA<span className="text-orange-500">.</span>
        </p>

        {/* Copyright */}
        <p className="text-xs text-zinc-500">
          © 2026 Ungga Putra. All rights reserved.
        </p>

        {/* Back to Top */}
        <a
          href="#home"
          className="text-xs text-zinc-400 transition-colors hover:text-orange-500"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}
