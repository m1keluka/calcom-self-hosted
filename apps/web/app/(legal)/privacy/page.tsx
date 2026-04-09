export const metadata = {
  title: "Privacy Policy | Axia Scheduling",
  description: "Axia Scheduling privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
        Last updated: April 7, 2026
      </p>

      <p>
        This Privacy Policy describes how Axia Growth LLC (&ldquo;Axia,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares information when you use the
        Axia Scheduling platform (&ldquo;Service&rdquo;) available at axiascheduling.com and
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
        calendar availability and event data to facilitate scheduling. This includes reading existing
        events to determine your availability and creating new events when appointments are booked.
      </p>

      <h3>Appointment Data</h3>
      <p>
        We store appointment history, scheduling preferences, and booking details to provide and improve
        the Service.
      </p>

      <h3>Usage Data</h3>
      <p>
        We automatically collect certain information when you use the Service, including your IP address,
        browser type, and pages visited.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, operate, and maintain the scheduling Service</li>
        <li>Read your calendar availability and create appointments on your behalf</li>
        <li>Send transactional emails such as appointment confirmations, reminders, and updates</li>
        <li>Authenticate your identity and manage your account</li>
        <li>Improve the Service and develop new features</li>
        <li>Respond to your requests and provide customer support</li>
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
      <p>Specifically, we limit our use of Google user data as follows:</p>
      <ul>
        <li>
          We only access Google Calendar data that is necessary to provide and improve the scheduling
          Service.
        </li>
        <li>
          We do not use Google user data for serving advertisements, including retargeting, personalized,
          or interest-based advertising.
        </li>
        <li>
          We do not allow humans to read your Google user data unless we have your affirmative agreement,
          it is necessary for security purposes, to comply with applicable law, or our use is limited to
          internal operations and the data has been aggregated and anonymized.
        </li>
        <li>
          We do not transfer Google user data to third parties except as necessary to provide or improve
          the Service, to comply with applicable law, or as part of a merger, acquisition, or sale of
          assets with prior user notice.
        </li>
      </ul>

      <h2>4. Third-Party Services</h2>
      <p>We use the following third-party services to operate the platform:</p>
      <ul>
        <li>
          <strong>Google Calendar API</strong> — to read calendar availability and create appointment
          events on connected Google accounts.
        </li>
        <li>
          <strong>Microsoft Graph API</strong> — to read calendar availability and create appointment
          events on connected Microsoft Outlook accounts.
        </li>
        <li>
          <strong>Supabase</strong> — for user authentication and secure data storage.
        </li>
        <li>
          <strong>Cal.com (self-hosted)</strong> — for scheduling infrastructure and booking page
          management.
        </li>
        <li>
          <strong>Resend</strong> — for sending transactional emails such as appointment confirmations and
          reminders.
        </li>
      </ul>
      <p>
        These services process data only as necessary to provide the Service and are bound by their own
        privacy policies.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain your personal information for as long as your account is active or as needed to provide
        the Service. If you request account deletion, we will delete your personal data within 30 days,
        except where we are required to retain it for legal or compliance purposes.
      </p>
      <p>
        Calendar data accessed via OAuth is used in real time for scheduling and is not stored beyond what
        is necessary for appointment records.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your data, including encryption in
        transit (TLS) and at rest. OAuth tokens are stored securely and are never exposed to unauthorized
        parties.
      </p>

      <h2>7. Cookies</h2>
      <p>
        We use minimal cookies strictly necessary for the operation of the Service. These are
        authentication session cookies used to keep you signed in. We do not use advertising or tracking
        cookies.
      </p>

      <h2>8. Your Rights</h2>
      <p>
        Depending on your jurisdiction, you may have the following rights regarding your personal data:
      </p>

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
          <strong>Revoke OAuth Access</strong> — you can disconnect your calendar at any time through your
          account settings or directly through your Google/Microsoft account permissions.
        </li>
      </ul>

      <h3>For California Residents (CCPA)</h3>
      <p>
        Under the California Consumer Privacy Act (CCPA), California residents have the right to know
        what personal information is collected, to request deletion, and to opt out of the sale of
        personal information. We do not sell personal information.
      </p>

      <h3>For EU/EEA Residents (GDPR)</h3>
      <p>
        Under the General Data Protection Regulation (GDPR), you have additional rights including the
        right to restrict processing, the right to object to processing, and the right to lodge a
        complaint with a supervisory authority. Our lawful basis for processing is contractual necessity
        (to provide the Service you signed up for) and legitimate interest (to improve the Service).
      </p>

      <h2>9. Children&rsquo;s Privacy</h2>
      <p>
        The Service is not directed to individuals under the age of 16. We do not knowingly collect
        personal information from children. If we learn that we have collected data from a child, we will
        promptly delete it.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of material changes by
        posting the updated policy on this page and updating the &ldquo;Last updated&rdquo; date. Your
        continued use of the Service after any changes constitutes acceptance of the updated policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or wish to exercise your data rights, please
        contact us at:
      </p>
      <p>
        <strong>Email:</strong> <a href="mailto:privacy@axiagrowth.com">privacy@axiagrowth.com</a>
      </p>
      <p>
        <strong>Company:</strong> Axia Growth LLC
      </p>
    </>
  );
}
