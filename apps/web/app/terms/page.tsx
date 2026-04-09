import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Axia Scheduling",
  description: "Axia Scheduling terms of service — the rules and guidelines for using our platform.",
};

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0f] text-white">
      <nav className="flex items-center justify-between px-8 py-6 md:px-16">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white/90">
          Axia<span className="text-white/50">Scheduling</span>
        </Link>
        <Link
          href="/auth/login"
          className="rounded-md border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white">
          Sign In
        </Link>
      </nav>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 sm:px-8 lg:px-10">
        <h1 className="mb-2 text-3xl font-bold text-white">Terms of Service</h1>
        <p className="mb-8 text-sm text-white/30">Last updated: April 7, 2026</p>

        <div className="space-y-6 text-[15px] leading-7 text-white/50 [&_a]:text-[#0d7bff] [&_a]:no-underline hover:[&_a]:underline [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white/90 [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white/80 [&_li]:mb-2 [&_strong]:text-white/70 [&_ul]:list-disc [&_ul]:pl-6">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Axia
            Scheduling platform (&ldquo;Service&rdquo;) operated by Axia Growth LLC (&ldquo;Axia,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using the
            Service, you agree to be bound by these Terms.
          </p>

          <h2>1. Service Description</h2>
          <p>
            Axia Scheduling is a business-to-business (B2B) appointment scheduling platform that connects
            to your calendar services (Google Calendar, Microsoft Outlook) to manage availability and book
            appointments on behalf of your sales team. The Service includes scheduling pages hosted at
            axiascheduling.com and the management dashboard at app.axiagrowth.com.
          </p>

          <h2>2. Eligibility</h2>
          <p>
            You must be at least 16 years of age to use the Service. By using the Service, you represent
            and warrant that you have the authority to enter into these Terms on behalf of yourself or the
            organization you represent.
          </p>

          <h2>3. User Accounts</h2>
          <ul>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>You are responsible for all activity that occurs under your account.</li>
            <li>
              You must provide accurate and complete information when creating your account and keep it up
              to date.
            </li>
            <li>
              You must notify us immediately at{" "}
              <a href="mailto:legal@axiagrowth.com">legal@axiagrowth.com</a> if you suspect unauthorized
              access to your account.
            </li>
          </ul>

          <h2>4. Calendar Integrations</h2>
          <p>
            The Service requires access to your calendar via OAuth to function. By connecting your Google
            Calendar or Microsoft Outlook account, you authorize us to:
          </p>
          <ul>
            <li>Read your calendar events and availability.</li>
            <li>
              Create, modify, and cancel calendar events related to appointments booked through the
              Service.
            </li>
          </ul>
          <p>
            You may revoke calendar access at any time through your account settings or through your
            Google/Microsoft account permissions. Revoking access may limit the functionality of the
            Service.
          </p>

          <h2>5. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use the Service for any unlawful purpose or in violation of any applicable laws or
              regulations.
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the Service, other accounts, or any
              systems or networks connected to the Service.
            </li>
            <li>Interfere with or disrupt the integrity or performance of the Service.</li>
            <li>Use the Service to send spam, unsolicited communications, or deceptive messages.</li>
            <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
            <li>
              Use automated means (bots, scrapers) to access the Service without our prior written
              consent.
            </li>
            <li>Resell, sublicense, or redistribute the Service without our prior written consent.</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            The Service and all related content, features, and functionality (including but not limited to
            software, text, graphics, logos, and trademarks) are owned by Axia Growth LLC and are
            protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            You retain ownership of any data you submit to the Service. By using the Service, you grant
            us a limited, non-exclusive license to use your data solely to provide and improve the
            Service.
          </p>

          <h2>7. Payment and Billing</h2>
          <p>
            Certain features of the Service may require a paid subscription. If you subscribe to a paid
            plan:
          </p>
          <ul>
            <li>You agree to pay all fees associated with your selected plan.</li>
            <li>Fees are billed in advance on a recurring basis (monthly or annually).</li>
            <li>
              All fees are non-refundable except as required by law or as expressly stated otherwise.
            </li>
            <li>We reserve the right to change pricing with 30 days&rsquo; prior notice.</li>
          </ul>

          <h2>8. Service Availability</h2>
          <p>
            We strive to maintain high availability of the Service but do not guarantee uninterrupted
            access. The Service may be temporarily unavailable due to maintenance, updates, or
            circumstances beyond our control. We are not liable for any downtime or service interruptions.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law:</p>
          <ul>
            <li>
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
              warranties of any kind, whether express or implied.
            </li>
            <li>
              In no event shall Axia Growth LLC be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or related to your use of the Service.
            </li>
            <li>
              Our total aggregate liability shall not exceed the amount you paid us in the twelve (12)
              months preceding the claim.
            </li>
          </ul>

          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Axia Growth LLC and its officers,
            directors, employees, and agents from and against any claims, liabilities, damages, losses,
            and expenses arising out of or related to your use of the Service or your violation of these
            Terms.
          </p>

          <h2>11. Termination</h2>
          <ul>
            <li>
              You may terminate your account at any time by contacting us at{" "}
              <a href="mailto:legal@axiagrowth.com">legal@axiagrowth.com</a>.
            </li>
            <li>
              We may suspend or terminate your access to the Service at any time, with or without cause.
            </li>
            <li>
              Upon termination, we will delete your data within 30 days, except where retention is
              required by law.
            </li>
          </ul>

          <h2>12. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the State of
            Delaware, United States. Any disputes shall be resolved exclusively in the state or federal
            courts located in Delaware.
          </p>

          <h2>13. General Provisions</h2>
          <ul>
            <li>
              <strong>Entire Agreement.</strong> These Terms, together with our Privacy Policy, constitute
              the entire agreement between you and Axia Growth LLC regarding the Service.
            </li>
            <li>
              <strong>Severability.</strong> If any provision is held unenforceable, the remaining
              provisions remain in full force.
            </li>
            <li>
              <strong>Assignment.</strong> You may not assign your rights without our prior written
              consent.
            </li>
          </ul>

          <h2>14. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Your continued use of the Service after any
            changes constitutes acceptance of the updated Terms.
          </p>

          <h2>15. Contact Us</h2>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:legal@axiagrowth.com">legal@axiagrowth.com</a>
          </p>
          <p>
            <strong>Company:</strong> Axia Growth LLC
          </p>
        </div>
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
    </div>
  );
}
