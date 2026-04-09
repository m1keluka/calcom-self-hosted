import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Axia Scheduling",
  description: "Axia Scheduling privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
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
        <h1 className="mb-2 text-3xl font-bold text-white">Privacy Policy</h1>
        <p className="mb-8 text-sm text-white/30">Last updated: April 7, 2026</p>

        <div className="space-y-6 text-[15px] leading-7 text-white/50 [&_a]:text-[#0d7bff] [&_a]:no-underline hover:[&_a]:underline [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white/90 [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white/80 [&_li]:mb-2 [&_strong]:text-white/70 [&_ul]:list-disc [&_ul]:pl-6">
          <p>
            This Privacy Policy describes how Axia Growth LLC (&ldquo;Axia,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares information when you use
            the Axia Scheduling platform (&ldquo;Service&rdquo;) available at axiascheduling.com and
            app.axiagrowth.com.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>Account Information</h3>
          <p>
            When you create an account, we collect your name, email address, and any other information you
            provide during registration.
          </p>

          <h3>Calendar Data</h3>
          <p>
            When you connect your Google Calendar or Microsoft Outlook Calendar via OAuth, we access your
            calendar availability and event data to facilitate scheduling.
          </p>

          <h3>Appointment Data</h3>
          <p>
            We store appointment history, scheduling preferences, and booking details to provide and
            improve the Service.
          </p>

          <h3>Usage Data</h3>
          <p>
            We automatically collect certain information when you use the Service, including your IP
            address, browser type, and pages visited.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and maintain the scheduling Service</li>
            <li>Read your calendar availability and create appointments on your behalf</li>
            <li>Send transactional emails such as appointment confirmations, reminders, and updates</li>
            <li>Authenticate your identity and manage your account</li>
            <li>Improve the Service and develop new features</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Google API Services User Data Policy</h2>
          <p>
            Axia Scheduling&rsquo;s use and transfer to any other app of information received from Google
            APIs will adhere to the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer">
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
          <ul>
            <li>
              We only access Google Calendar data necessary to provide and improve the scheduling Service.
            </li>
            <li>We do not use Google user data for serving advertisements.</li>
            <li>
              We do not allow humans to read your Google user data unless we have your affirmative
              agreement, it is necessary for security purposes, or to comply with applicable law.
            </li>
            <li>
              We do not transfer Google user data to third parties except as necessary to provide the
              Service or comply with applicable law.
            </li>
          </ul>

          <h2>4. Third-Party Services</h2>
          <ul>
            <li>
              <strong>Google Calendar API</strong> — to read availability and create appointment events.
            </li>
            <li>
              <strong>Microsoft Graph API</strong> — to read availability and create appointment events.
            </li>
            <li>
              <strong>Supabase</strong> — for user authentication and secure data storage.
            </li>
            <li>
              <strong>Cal.com (self-hosted)</strong> — for scheduling infrastructure and booking page
              management.
            </li>
            <li>
              <strong>Resend</strong> — for sending transactional emails such as confirmations and
              reminders.
            </li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information for as long as your account is active. If you request
            account deletion, we will delete your personal data within 30 days, except where required by
            law.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement industry-standard security measures including encryption in transit (TLS) and at
            rest. OAuth tokens are stored securely and never exposed to unauthorized parties.
          </p>

          <h2>7. Cookies</h2>
          <p>
            We use minimal cookies strictly necessary for authentication sessions. We do not use
            advertising or tracking cookies.
          </p>

          <h2>8. Your Rights</h2>

          <h3>For All Users</h3>
          <ul>
            <li>
              <strong>Access</strong> — request a copy of the personal data we hold about you.
            </li>
            <li>
              <strong>Correction</strong> — request that we correct inaccurate or incomplete data.
            </li>
            <li>
              <strong>Deletion</strong> — request that we delete your personal data.
            </li>
            <li>
              <strong>Portability</strong> — request a machine-readable copy of your data.
            </li>
            <li>
              <strong>Revoke OAuth Access</strong> — disconnect your calendar at any time through your
              account settings or Google/Microsoft account permissions.
            </li>
          </ul>

          <h3>For California Residents (CCPA)</h3>
          <p>
            You have the right to know what personal information is collected, to request deletion, and to
            opt out of the sale of personal information. We do not sell personal information.
          </p>

          <h3>For EU/EEA Residents (GDPR)</h3>
          <p>
            You have additional rights including the right to restrict processing, object to processing,
            and lodge a complaint with a supervisory authority.
          </p>

          <h2>9. Children&rsquo;s Privacy</h2>
          <p>
            The Service is not directed to individuals under the age of 16. We do not knowingly collect
            personal information from children.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Your continued use of the Service after
            any changes constitutes acceptance of the updated policy.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:privacy@axiagrowth.com">privacy@axiagrowth.com</a>
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
