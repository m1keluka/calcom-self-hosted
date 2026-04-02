import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

import { checkOnboardingRedirect } from "@calcom/features/auth/lib/onboardingUtils";
import { getServerSession } from "@calcom/features/auth/lib/getServerSession";

import { buildLegacyRequest } from "@lib/buildLegacyCtx";

export const metadata = {
  title: "Axia Scheduling — Private Scheduling Infrastructure",
  description:
    "Secure appointment scheduling for financial services firms. Powered by Axia Growth.",
};

const LandingPage = async () => {
  const session = await getServerSession({
    req: buildLegacyRequest(await headers(), await cookies()),
  });

  if (session?.user?.id) {
    const organizationId = session.user.profile?.organizationId ?? null;
    const onboardingPath = await checkOnboardingRedirect(session.user.id, {
      checkEmailVerification: true,
      organizationId,
    });
    if (onboardingPath) {
      redirect(onboardingPath);
    }
    redirect("/event-types");
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0f] text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 md:px-16">
        <div className="flex items-center gap-2">
          <div className="text-lg font-semibold tracking-tight text-white/90">
            Axia<span className="text-white/50">Scheduling</span>
          </div>
        </div>
        <Link
          href="/auth/login"
          className="rounded-md border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white">
          Sign In
        </Link>
      </nav>

      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/40">
            Private Infrastructure
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Private Scheduling
            <br />
            <span className="text-white/40">Infrastructure</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/50 md:text-lg">
            Secure appointment scheduling for financial services firms.
            <br className="hidden sm:block" />
            Powered by Axia Growth.
          </p>

          <div className="mt-10">
            <Link
              href="/auth/login"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-sm font-semibold text-[#0a0a0f] transition-all hover:bg-white/90">
              Sign In
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 px-8 py-8 md:px-16">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Axia Growth. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
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
    </div>
  );
};

export default LandingPage;
