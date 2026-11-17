import React from "react";
import { NxReveal } from "./NxReveal";

// Every answer comes from what your Services page and Service Agreement
// already say. If you change a price or term there, change it here too.
const FAQ = [
  { q: "How much does a website cost?", a: "Packages start from KES 20,000 for a Starter website and KES 50,000 for a Business website. Prices are starting guides; your written quotation sets the final price." },
  { q: "How does payment work?", a: "You pay a 50% deposit before work starts. The remaining 50% is due when we tell you the work is complete, before final handover. You can pay by M-Pesa or bank transfer." },
  { q: "What support do I get after launch?", a: "The Starter package includes 30 days of support and the Business package 60 days. After that, you can keep support going with a monthly care plan or at a price we agree beforehand." },
  { q: "Who owns the website?", a: "Once you have paid in full, you own the custom design, text and code we create for you. We keep ownership of our reusable tools and give you a licence to use them in your project." },
  { q: "Can customers order through WhatsApp?", a: "Yes. Our online store builds include a cart and WhatsApp checkout, and we can add M-Pesa or Paystack payments." },
  { q: "Do you work only in Nairobi?", a: "No. We operate virtually, so we can work with businesses anywhere in Kenya." },
];

export function NxFaq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="nx-section">
      <div className="nx-wrap">
        <NxReveal>
          <div className="nx-eyebrow">Questions</div>
          <h2 className="nx-h2">Frequently Asked Questions (FAQs).</h2>
        </NxReveal>
        <div className="nx-faq-list">
          {FAQ.map((f, i) => (
            <NxReveal key={f.q} delay={i * 60}>
              <details className="nx-faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            </NxReveal>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </div>
    </section>
  );
}
