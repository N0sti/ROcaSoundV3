export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>1. Introduction</h2>
        <p>Welcome to Roca Sound. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data and tell you about your privacy rights and how the law protects you.</p>
        
        <h2>2. The data we collect about you</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
        <ul>
          <li>Identity Data: first name, last name, username or similar identifier</li>
          <li>Contact Data: billing address, delivery address, email address and telephone numbers</li>
          <li>Financial Data: payment card details</li>
          <li>Transaction Data: details about payments to and from you and other details of products you have purchased from us</li>
          <li>Technical Data: internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website</li>
        </ul>

        <h2>3. How we use your personal data</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal or regulatory obligation.</li>
        </ul>

        <h2>4. Data security</h2>
        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>

        <h2>5. Your legal rights</h2>
        <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>

        <h2>6. Contact us</h2>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@rocasound.com.</p>
      </div>
    </div>
  )
}

