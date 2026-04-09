import Link from "next/link";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0f] text-white">
      <nav className="flex items-center justify-between px-8 py-6 md:px-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-lg font-semibold tracking-tight text-white/90">
            Axia<span className="text-white/50">Scheduling</span>
          </div>
        </Link>
        <Link
          href="/auth/login"
          className="rounded-md border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white">
          Sign In
        </Link>
      </nav>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 sm:px-8 lg:px-10">
        <article className="legal-prose">{children}</article>
      </main>

      <footer className="border-t border-white/5 px-8 py-8 md:px-16">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Axia Growth. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/25 transition-colors hover:text-white/50">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/25 transition-colors hover:text-white/50">
              Terms of Service
            </Link>
            <a
              href="https://axiagrowth.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/25 transition-colors hover:text-white/50">
              axiagrowth.com
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        .legal-prose h1 {
          font-size: 1.875rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }
        .legal-prose h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .legal-prose h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .legal-prose p {
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .legal-prose ul {
          color: rgba(255, 255, 255, 0.5);
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          list-style-type: disc;
        }
        .legal-prose li {
          margin-bottom: 0.5rem;
          line-height: 1.75;
        }
        .legal-prose a {
          color: #0d7bff;
          text-decoration: none;
        }
        .legal-prose a:hover {
          text-decoration: underline;
        }
        .legal-prose strong {
          color: rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </div>
  );
}
