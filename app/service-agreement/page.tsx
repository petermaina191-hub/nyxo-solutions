import { LegalPage, type LegalSection } from "@/components/LegalPage";

// ---------------------------------------------------------------------
// EDIT THESE VALUES to match your business. They flow into the text below.
// Only keep promises you can honour.
// ---------------------------------------------------------------------
const LAST_UPDATED = "October 2026";
const DEPOSIT_PERCENT = 50; // paid before work starts
const BALANCE_PERCENT = 50; // paid when the work is complete
const FREE_SUPPORT = "one month"; // free support after handover, where included
const QUOTE_VALID_DAYS = 30;
const REVIEW_DAYS = 7; // time the client has to report problems after completion
const BREACH_NOTICE_DAYS = 7; // time to fix a breach before we can end the agreement
const CARE_PLAN_NOTICE_DAYS = 30; // notice to cancel a monthly care plan

const SECTIONS: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    blocks: [
      'These Standard Service Terms apply to all work that Nyxo Solutions ("we", "us") does for a client ("you"), including websites, e-commerce, business systems, IT support, networking, cloud and email setup, digital marketing, automation, reviews and maintenance.',
      'Each project also has a written quotation or proposal (the "Quotation") that states the scope, price and timeline. The Quotation and these terms together make up the agreement. If they conflict on scope, price or timeline, the Quotation applies.',
      "You accept this agreement by confirming the Quotation in writing, including by email or message, or by paying the deposit.",
    ],
  },
  {
    id: "scope",
    title: "Scope of work and changes",
    blocks: [
      "The work we will do is described in the Quotation. Anything not listed in it is not included.",
      "If you want something added or changed, ask us in writing. We will tell you how it affects the price and the timeline, and we will start on the change only after you agree.",
    ],
  },
  {
    id: "quotations",
    title: "Quotations and prices",
    blocks: [
      `A Quotation is valid for ${QUOTE_VALID_DAYS} days from its date. Prices are in Kenyan shillings, and the Quotation states whether VAT or other taxes are included.`,
    ],
  },
  {
    id: "payment",
    title: "Fees and payment",
    blocks: [
      [
        `A deposit of ${DEPOSIT_PERCENT}% of the total price is payable before we start work.`,
        `The remaining ${BALANCE_PERCENT}% is payable when we tell you the work is complete, and before final handover. Final handover means publishing on your live domain and giving you the final files and access.`,
        "You can pay by M-Pesa or bank transfer using the details on our invoice.",
        "If a payment is late, we may pause work and move the delivery date until it is paid.",
        "Monthly fees, such as care plans, are billed monthly in advance.",
      ],
      "The deposit covers the time we reserve for you and the work we do first, so it is not refundable once work has started. If we are unable to deliver the service, we will refund the part of the deposit that relates to work we have not done.",
    ],
  },
  {
    id: "your-responsibilities",
    title: "Your responsibilities",
    blocks: [
      "To let us do the work well, you agree to:",
      [
        "give us the content, logos, product details, access and decisions we need, promptly;",
        "make sure you have the right to use everything you give us;",
        "keep any passwords or access we give you secure;",
        "pay third-party costs such as domains and hosting, as set out in the Quotation.",
      ],
    ],
  },
  {
    id: "timelines",
    title: "Timelines",
    blocks: [
      "Dates in the Quotation are estimates. They depend on you giving content, feedback and approvals on time. If you or a third party cause a delay, the dates move to match.",
    ],
  },
  {
    id: "revisions",
    title: "Revisions",
    blocks: [
      "The Quotation states how many rounds of revisions are included. A revision means changes to work within the agreed scope. Extra rounds, and changes of direction after you have approved a stage, are charged separately.",
    ],
  },
  {
    id: "completion",
    title: "Completion and acceptance",
    blocks: [
      `When the work is finished we will tell you in writing and give you the chance to review it. You have ${REVIEW_DAYS} days to tell us about anything that does not match the agreed scope, and we will fix it at no extra cost. After ${REVIEW_DAYS} days, or once you start using the work for your business, whichever is first, it is treated as accepted.`,
    ],
  },
  {
    id: "support",
    title: "Free support period",
    blocks: [
      `Where your Quotation includes it, we provide ${FREE_SUPPORT} of free support, starting on the day the work is handed over or goes live, whichever is first.`,
      [
        "Included: fixing errors in what we built, and answering questions about how to use it.",
        "Not included: new features, redesigns, content or price updates, extra training, and problems caused by changes made by you or other people or by third-party services.",
      ],
      "After the free support period, ongoing support is available as a monthly care plan or at a price we agree with you beforehand.",
    ],
  },
  {
    id: "third-party",
    title: "Third-party services",
    blocks: [
      "Domains, hosting, email, payment providers such as M-Pesa and Paystack, plugins and other platforms are provided by third parties with their own terms and fees. We help you set them up, and where possible we open accounts in your name so that you stay in control.",
      "We are not responsible for outages, price changes or policy changes by third parties.",
    ],
  },
  {
    id: "ownership",
    title: "Ownership and licences",
    blocks: [
      [
        "Once you have paid in full, you own the custom designs, text and code we create specifically for you in the project.",
        "Until you have paid in full, ownership stays with us and you may not use the final work for your business.",
        "We keep ownership of our own tools, templates, components, code libraries and know-how, including anything we reuse across projects. You receive a non-exclusive, long-term licence to use them as part of your delivered project.",
        "Open-source and third-party components stay under their own licences.",
        "You keep ownership of the materials you give us, such as logos, photos, text and product data, and you let us use them to do the work.",
        "Unless you tell us in writing that you do not want this, we may show the finished project and your business name in our portfolio and marketing.",
      ],
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    blocks: [
      "Each of us will keep the other's non-public business information confidential and use it only for the project. This does not apply to information that is already public, that the other party already knew, or that the law requires us to disclose.",
    ],
  },
  {
    id: "personal-data",
    title: "Personal data",
    blocks: [
      "We handle personal data in line with our Privacy Policy and the Kenya Data Protection Act, 2019.",
      "If we handle personal data of your customers or staff while building or supporting your system, we do so only on your instructions, only for that purpose, and with appropriate security. We will tell you without undue delay if we become aware of a breach affecting that data. When the work ends, we will return or delete that data at your request, unless the law requires us to keep it.",
      "You are responsible for having a lawful basis for the data you collect, for giving your own customers the required notices, and for registering with the Office of the Data Protection Commissioner if you are required to.",
    ],
  },
  {
    id: "promises",
    title: "What we promise and what we cannot",
    blocks: [
      "We will do the work with reasonable skill and care.",
      "We cannot guarantee results that depend on things outside our control, such as sales, enquiries, search rankings, website traffic, or the uninterrupted availability of third-party services.",
    ],
  },
  {
    id: "liability",
    title: "Limit of liability",
    blocks: [
      "To the extent the law allows, our total liability for any claim connected to a project is limited to the fees you have paid us for that project. We are not liable for indirect or consequential losses, such as lost profit or lost business. Nothing in this agreement limits any liability that cannot be limited by law.",
    ],
  },
  {
    id: "ending",
    title: "Cancellation and ending the agreement",
    blocks: [
      [
        "You may cancel a project at any time by telling us in writing. You will pay for the work completed up to that date and for costs we have already committed to. The deposit counts toward this amount.",
        `We may pause or end the agreement if you do not pay or you break these terms and do not fix it within ${BREACH_NOTICE_DAYS} days of our written notice.`,
        `Monthly care plans continue month to month, and either of us can end one with ${CARE_PLAN_NOTICE_DAYS} days' written notice.`,
        "When the agreement ends, we hand over the work you have paid for.",
      ],
    ],
  },
  {
    id: "outside-control",
    title: "Events outside our control",
    blocks: [
      "Neither of us is liable for delay or failure caused by events beyond reasonable control, such as power or internet outages, natural disasters, government action or failures by third-party services.",
    ],
  },
  {
    id: "communication",
    title: "Communication and electronic acceptance",
    blocks: [
      "We may give notices by email or WhatsApp to the contact details in your Quotation. You agree that accepting by email, message, payment or electronic signature is valid acceptance of this agreement.",
    ],
  },
  {
    id: "law",
    title: "Governing law and disputes",
    blocks: [
      "This agreement is governed by the laws of Kenya.",
      "If there is a disagreement, we will first try to resolve it in good faith. Either of us can start this by writing to the other, and we will each try to settle it within 14 days. If we cannot, the courts of Kenya have jurisdiction.",
      "If any part of this agreement conflicts with a law of Kenya, the law prevails and the rest of the agreement continues to apply.",
    ],
  },
  {
    id: "general",
    title: "General",
    blocks: [
      [
        "This agreement and the Quotation are the whole agreement between us for the project.",
        "Changes must be agreed in writing by both of us.",
        "If a part of this agreement cannot be enforced, the rest stays in force.",
        "Neither of us may transfer our rights under this agreement without the other's consent.",
      ],
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

export const metadata = { title: "Service Agreement — Nyxo Solutions" };

export default function ServiceAgreementPage() {
  return (
    <LegalPage
      title="Service Agreement"
      lastUpdated={LAST_UPDATED}
      intro="These standard terms apply to every project we do. Your written quotation sets out the specific scope, price and timeline for your project, and the two documents together form your agreement with us."
      sections={SECTIONS}
    />
  );
}
