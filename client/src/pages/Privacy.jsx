import '../styles/Privacy.css';

function Privacy() {
    return (
    <div className="privacy-policy" id="privacy">
    <h1>Privacy Policy</h1>
    <p>
    Last updated 4/18/2023<br /><br />
    This privacy notice for Medifare (“Company,” “we,” “us,” or “our”), 
    describes how and why we ­might collect, store, use, and/or share (“process”) your information when you use our services (“Services,” “app”), such as when you:
    </p>
    <p>
    Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. 
    If you do not agree with our policies and practices, please do not use our services. 
    If you still have any questions or concerns, please contact us at 
    <a href="mailto:sazad@medifareclear.org"> sazad@medifareclear.org</a>.
    </p>

    <section className="toggle-sections">
    {sections.map((section, index) => (
        <details key={index} className="toggle-item">
        <summary>{section.title}</summary>
        <p>{section.content}</p>
        </details>
    ))}
    </section>
    <p>This privacy policy was created using Termly’s Privacy Policy Generator.</p>
    </div>
    );
  }
  
const sections = [
    {
    title: "1. What information do we collect?",
    content: `Personal information you disclose to us: we collect personal information that you voluntarily provide to us when you register on the app, express an interest in obtaining information about us or our app, when you participate in activities on the app, or otherwise when you contact us.
    
    We do not process sensitive information. All personal information you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
    
    Information automatically collected: we automatically collect certain information when you visit, use, or navigate the app. This information does not reveal your specific identity, but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our app, and other technical information. This information is primarily intended to maintain the security and operation of our app, and for our internal analytics and reporting purposes.
    
    Like many businesses, we also collect information through cookies and similar technologies.`
    },
  {
    title: "2. How do we process your information?",
    content: "We process your personal information for a variety of reasons, depending on how you interact with our app."
  },
  {
    title: "3. When and with whom do we share your personal information?",
    content: `We may need to share your personal information in the following situations:
    
    Business transfers: we may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
    
    Affiliates: we may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
    
    Business partners: we may share your information with our business partners to offer you certain products, services, or promotions.`
  },
  {
    title: "4. Do we use cookies and other tracking technologies? ",
    content: "We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice."
  },
  {
    title: "5. How do we handle your social logins?",
    content: `Our app offers you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). We will receive certain profile information about you from your social media provider. The profile information we receive may vary based on the social media provider, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
    
    We will use the information we receive only for the purposes that are described in this privacy notice. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider.`
  },
  {
    title: "6. Is your information transferred internationally?",
    content: "If you are accessing our app from outside, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information."
  },
  {
    title: "7. How long do we keep your information?",
    content: "We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). When we have no need to process your personal information, we will either delete or anonymize such information."
  },
  {
    title: "8. Do we collect information from minors?",
    content: "We do not knowingly solicit data from or market to children under 18 years of age. By using the app, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the app. If we learn that personal information from users less than 18 years age has been collected, we will deactivate the account and take reasonable measures to delete such data from our records. "
  },
  {
    title: "9. What are your privacy rights? ",
    content: `If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by using the contact details provided below.

    Account information: if you would like to review or change the information in your account or terminate your account you may. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain information to comply with applicable legal requirements.`
  },
  {
    title: "10. Controls for Do-Not-Track features",
    content: "Some mobile operating systems and applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such we do not currently respond to DNT browser signals."
  },
  {
    title: "11. Do California residents have specific privacy rights? ",
    content: "California Civil Code Section 1798.83 permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes. If you are a Califronia resident and would like to make such a request, please submit your request in writing to us using the contact information provided below."
  },
  {
    title: "12. Do we make updates to this notice?",
    content: "We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible."
  },
  {
    title: "13. Location of Data Processing",
    content: "If you have questions and comments about this notice, you may email us at sazad@medifareclear.com"
  },
  {
    title: "14. Governing Law",
    content: "Based on the applicable laws of your country, you may have the rights to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please contact us."
  }
];

export default Privacy;
