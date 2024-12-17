export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>1. Introduction</h2>
        <p>Welcome to Roca Sound. These terms and conditions outline the rules and regulations for the use of our website and services.</p>
        
        <h2>2. Acceptance of Terms</h2>
        <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Roca Sound if you do not agree to take all of the terms and conditions stated on this page.</p>
        
        <h2>3. Intellectual Property Rights</h2>
        <p>Other than the content you own, under these Terms, Roca Sound and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>
        
        <h2>4. Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
          <li>publishing any Website material in any other media;</li>
          <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
          <li>publicly performing and/or showing any Website material;</li>
          <li>using this Website in any way that is or may be damaging to this Website;</li>
          <li>using this Website in any way that impacts user access to this Website;</li>
          <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
        </ul>

        <h2>5. Purchase Terms</h2>
        <p>By placing an order with Roca Sound, you are offering to purchase a product. All orders are subject to availability and confirmation of the order price. When you place an order, you will receive an acknowledgement e-mail confirming receipt of your order. This email will only be an acknowledgement and will not constitute acceptance of your order.</p>

        <h2>6. Warranty</h2>
        <p>Our products come with a limited warranty. For full details, please refer to our warranty policy.</p>

        <h2>7. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of Monaco, without regard to its conflict of law provisions.</p>

        <h2>8. Changes to Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at terms@rocasound.com.</p>
      </div>
    </div>
  )
}

