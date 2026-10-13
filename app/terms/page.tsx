import { LegalPage, type LegalSection } from "@/components/LegalPage";

const LAST_UPDATED = "October 2026";

const SECTIONS: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    blocks: [
      "These Terms of Use apply to your use of the Nyxo Solutions website and to any account you create on it. By using the website or creating an account, you agree to them. If you do not agree, please do not use the website.",
      "Paid work we do for you, such as building a website or system, is covered separately by our Service Agreement, which applies together with your written quotation.",
    ],
  },
  {
    id: "who-can-use",
    title: "Who can use this website",
    blocks: [
      "The website is intended for businesses and adults. You must be at least 18 years old, or be acting on behalf of a business, to create an account or send us a request.",
    ],
  },
  {
    id: "accounts",
    title: "Your account",
    blocks: [
      "When you create an account you agree to:",
      [
        "give accurate information and keep it up to date;",
        "keep your password and sign-in details private and not share your account;",
        "tell us promptly if you think someone else has accessed your account.",
      ],
      "You are responsible for activity under your account. You can ask us to close your account at any time by contacting us.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    blocks: [
      "You agree not to:",
      [
        "use the website for anything unlawful, fraudulent or harmful;",
        "try to gain unauthorised access to the website, other users' accounts or our systems;",
        "upload viruses or other harmful code, or overload or disrupt the service;",
        "copy or collect content or data from the website by automated means without our written permission;",
        "pretend to be another person or business.",
      ],
      "We may suspend or close an account that breaks these rules.",
    ],
  },
  {
    id: "your-content",
    title: "What you send us",
    blocks: [
      "When you send an enquiry, feedback or other content, you confirm that you are allowed to share it and that it does not break anyone's rights. Please do not send personal data about other people unless you are entitled to.",
      "You let us use what you send to reply to you, provide our services and improve the website. How we handle personal data is explained in our Privacy Policy.",
    ],
  },
  {
    id: "our-content",
    title: "Our content",
    blocks: [
      "The website, including its design, text, graphics and the Nyxo Solutions name and logo, belongs to us or our licensors. You may view it and share links to it, but you may not copy, sell or reuse it without our written permission.",
    ],
  },
  {
    id: "information",
    title: "Information and prices on this website",
    blocks: [
      "The information on this website is general information about our services and is not professional advice.",
      "Prices and package contents shown on the Services page are starting guides, not offers. The final price and scope for any project are set out in a written quotation.",
    ],
  },
  {
    id: "third-parties",
    title: "Third-party services and links",
    blocks: [
      "You can sign in using Google, GitHub, Facebook or LinkedIn, and the website may link to other sites. Those services are run by others, and their own terms and privacy policies apply to them. We are not responsible for them.",
    ],
  },
  {
    id: "availability",
    title: "Availability",
    blocks: [
      "We work to keep the website running, but we do not promise it will always be available or free of errors. We may change, suspend or remove parts of it at any time, for example for maintenance or security.",
    ],
  },
  {
    id: "liability",
    title: "Our responsibility",
    blocks: [
      "To the extent the law allows, we are not liable for losses that arise from your use of, or inability to use, the website, including indirect losses such as lost profit. Nothing in these terms limits any liability that cannot be limited by law.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    blocks: [
      "We may update these terms from time to time. The updated version will be published on this page with a new date. If you keep using the website after a change, you accept the updated terms.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    blocks: [
      "These terms are governed by the laws of Kenya, and the courts of Kenya have jurisdiction over any dispute about them. If any part of these terms conflicts with a law of Kenya, the law prevails and the rest of the terms continue to apply.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    blocks: [
      [
        "Email: nyxosolutions@gmail.com",
        "Phone: +254 799 550 617",
        "Post: Nyxo Solutions, P.O. Box 00300-00100, Nairobi, Kenya",
      ],
    ],
  },
];

export const metadata = { title: "Terms of Use — Nyxo Solutions" };

export default function TermsPage() {
  return <LegalPage title="Terms of Use" lastUpdated={LAST_UPDATED} sections={SECTIONS} />;
}
