import '../styles/Terms.css';

function Terms() {
    return (
      <div className="terms-page">
        <h1>Terms of Use</h1>
        <p>
          Last updated 4/19/23
        </p>
        <p>
          We are MediFare (“Company,” “we,” “us,” “our”). We operate an app, as well as other related products and services that refer or link to these legal terms (the “Legal Terms” (collectively, the “Services” or the “app”).
        </p>
        <p>
          You can contact us by email at <a href="mailto:sazad@medifareclear.com">sazad@medifareclear.com</a>.
        </p>
        <p>
          These Legal Terms constitute a legally binding agreement made between you personally or on behalf of an entity (“you”), and MediFare. If you do not agree with all of these Legal Terms, do not use the app.
        </p>
        <p>
          We may update these Legal Terms, and it's your responsibility to review them periodically. We recommend printing a copy for your records.
        </p>
  
        <section className="toggle-sections">
          {termsSections.map((section, index) => (
            <details key={index} className="toggle-item">
              <summary>{section.title}</summary>
              <p dangerouslySetInnerHTML={{ __html: section.content }} />
            </details>
          ))}
        </section>
      </div>
    );
  }
  
  const termsSections = [
    {
      title: "1. Our Services",
      content: "The information provided when using the app is not intended for distribution in jurisdictions where it would be illegal. Accessing the app from other regions is your responsibility."
    },
    {
      title: "2. Intellectual Property Rights",
      content: "We own all intellectual property in our app. You are allowed to use content for personal or internal business use only. Any other use requires written permission."
    },
    {
      title: "3. User Representations",
      content: "You agree you are of legal age, will provide accurate information, and not misuse the app or violate laws."
    },
    {
      title: "4. Prohibited Activities",
      content: "You must not misuse the app, harass others, access it with bots, or disrupt services."
    },
    {
      title: "5. User Generated Contributions",
      content: "We currently do not allow user-submitted content on the app."
    },
    {
      title: "6. Contribution License",
      content: "We may use feedback you provide to us for any purpose without compensation."
    },
    {
      title: "7. Services Management",
      content: "We may monitor the app and remove content or restrict access if needed to protect our services."
    },
    {
      title: "8. Term and Termination",
      content: "We may terminate your access at any time without notice for violating the Legal Terms."
    },
    {
      title: "9. Modifications and Interruptions",
      content: "We may change or interrupt the app at any time without notice and aren't liable for any downtime."
    },
    {
      title: "10. Governing Law",
      content: "These Terms are governed by U.S. law, and U.S. courts have jurisdiction over disputes."
    },
    {
      title: "11. Dispute Resolution",
      content: "Disputes should first be handled through 60-day informal negotiations, then arbitration."
    },
    {
      title: "12. Corrections",
      content: "We reserve the right to correct inaccuracies or errors in the app at any time."
    },
    {
      title: "13. Disclaimer",
      content: "The app is provided 'as is'. We do not guarantee it will be error-free or uninterrupted."
    },
    {
      title: "14. Limitations of Liability",
      content: "We are not liable for indirect damages, and our liability is limited to the amount you paid us, if any."
    },
    {
      title: "15. Indemnification",
      content: "You agree to defend and hold us harmless for any claims arising from your use of the app."
    },
    {
      title: "16. User Data",
      content: "We are not responsible for any data loss. You are responsible for your own data backup."
    },
    {
      title: "17. Electronic Communications and Signatures",
      content: "By using the app, you agree to receive communications electronically and accept e-signatures."
    },
    {
      title: "18. Miscellaneous",
      content: "These Terms are the full agreement. If any part is unenforceable, the rest still applies."
    },
    {
      title: "19. Contact Us",
      content: "For any questions, email us at <a href='mailto:sazad@medifareclear.com'>sazad@medifareclear.com</a>."
    }
  ];
  
  export default Terms;
  