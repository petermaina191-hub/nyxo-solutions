const SECTIONS = [
  {
    title: "Who we are",
    body: "Nyxo Solutions builds websites and digital systems for small and medium businesses in Kenya. We operate virtually. You can reach us at nyxosolutions@gmail.com, on +254 799 550 617, or by post at P.O. Box 00300-00100, Nairobi, Kenya.",
  },
  {
    title: "What we collect",
    body: "When you create an account we collect your name, email address and, if you add it, your phone number. If you sign in with Google, GitHub, Facebook or LinkedIn, we receive your name and email address from that provider; we do not receive your password. When you send us a request or feedback, we store the message you write and the service you were asking about.",
  },
  {
    title: "How we use it",
    body: "We use your information to run your account, respond to your requests, deliver and update your projects, and improve our service. We do not sell your personal information.",
  },
  {
    title: "Where it is stored",
    body: "Your account and request data is stored with our database and sign-in provider, Supabase, and the website is hosted on Vercel. These providers process data on our behalf to run the site.",
  },
  {
    title: "Cookies and local storage",
    body: "We use cookies to keep you signed in, and your browser stores your light or dark theme choice. We do not use advertising cookies.",
  },
  {
    title: "Your rights",
    body: "Under the Kenya Data Protection Act, 2019 you can ask to see, correct or delete the personal data we hold about you. You can edit your name and phone number from your dashboard, or email us and we will help.",
  },
  {
    title: "Changes to this policy",
    body: "If we change how we handle your data, we will update this page and the date below.",
  },
];

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 40px" }}>
      <h1 style={{ fontWeight: 800, fontSize: 34, margin: "0 0 8px" }}>Privacy Policy</h1>
      <p
        style={{
          fontFamily: "Manrope, sans-serif",
          fontSize: 12.5,
          color: "var(--text-faint)",
          marginBottom: 36,
        }}
      >
        Last updated: October 2026
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {SECTIONS.map((s) => (
          <section key={s.title}>
            <h2 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{s.title}</h2>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: 14,
                color: "var(--text-muted)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {s.body}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
