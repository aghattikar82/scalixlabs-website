import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#020817] text-gray-200">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xlmd:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <p className="mb-4"><strong>Scalix Labs</strong></p>
            <p className="mb-4"><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            <p>Scalix Labs (“we”, “our”, “us”) respects your privacy and is committed to protecting the personal information you provide when using our website.</p>
            <p>This Privacy Policy explains how we collect, use, and protect your information when you visit scalixlabs.in.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            
            <h3 className="text-xl font-medium text-white mt-4 mb-2">Personal Information</h3>
            <p className="mb-2">When you fill out forms or contact us, we may collect:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Website URL</li>
              <li>Any other information you voluntarily submit</li>
            </ul>

            <h3 className="text-xl font-medium text-white mt-4 mb-2">Usage Information</h3>
            <p className="mb-2">When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited</li>
              <li>Time spent on the website</li>
            </ul>
            <p>This information helps us improve our website experience.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-2">We may use the information collected to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Respond to inquiries and contact requests</li>
              <li>Provide information about our services</li>
              <li>Improve our website and user experience</li>
              <li>Analyze website performance</li>
              <li>Communicate regarding business inquiries or partnerships</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Cookies and Tracking Technologies</h2>
            <p className="mb-2">Our website may use cookies or similar technologies to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Analyze website traffic</li>
              <li>Improve site performance</li>
              <li>Understand user behavior</li>
            </ul>
            <p>You may disable cookies in your browser settings if you prefer.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Services</h2>
            <p className="mb-2">We may use third-party tools such as:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Google Analytics</li>
              <li>Email communication tools</li>
              <li>Marketing platforms</li>
            </ul>
            <p>These services may collect information according to their own privacy policies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <p className="mb-2">We implement reasonable technical and organizational measures to protect your information from unauthorized access, misuse, or disclosure.</p>
            <p>However, no internet transmission is completely secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. External Links</h2>
            <p>Our website may contain links to other websites. We are not responsible for the privacy practices or content of those external sites.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Your Rights</h2>
            <p className="mb-2">You may request to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
            </ul>
            <p>To make such a request, please contact us.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Updates to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
            <p className="mb-2">If you have questions regarding this Privacy Policy, please contact:</p>
            <p><strong>Scalix Labs</strong></p>
            <p>Website: <a href="https://scalixlabs.in" className="text-blue-400 hover:text-blue-300">https://scalixlabs.in</a></p>
            <p>Email: <a href="mailto:contact.scalixlabs@gmail.com" className="text-blue-400 hover:text-blue-300">contact.scalixlabs@gmail.com</a></p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
