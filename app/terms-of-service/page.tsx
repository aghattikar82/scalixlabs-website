import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#020817] text-gray-200">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <p className="mb-4"><strong>Scalix Labs</strong></p>
            <p className="mb-4"><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            <p>These Terms of Service govern your use of the website scalixlabs.in operated by Scalix Labs.</p>
            <p>By accessing this website, you agree to comply with these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Use of Website</h2>
            <p className="mb-2">The content on this website is provided for informational purposes only.</p>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Use the website for unlawful purposes</li>
              <li>Attempt to gain unauthorized access to systems</li>
              <li>Copy or misuse content without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Intellectual Property</h2>
            <p className="mb-2">All content on this website including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Text</li>
              <li>Graphics</li>
              <li>Branding</li>
              <li>Logos</li>
              <li>Design elements</li>
            </ul>
            <p>are the property of Scalix Labs unless otherwise stated.</p>
            <p className="mt-2">Unauthorized use, reproduction, or distribution is prohibited.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Service Information</h2>
            <p className="mb-2">Descriptions of services on this website are provided for general informational purposes.</p>
            <p>Actual service scope, pricing, and deliverables will be defined in a separate agreement or proposal between Scalix Labs and the client.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Limitation of Liability</h2>
            <p className="mb-2">Scalix Labs shall not be held responsible for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Any direct or indirect damages arising from use of the website</li>
              <li>Business decisions made based on website information</li>
            </ul>
            <p>All services are subject to agreed contractual terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Third-Party Links</h2>
            <p className="mb-2">Our website may contain links to external websites.</p>
            <p>We do not control or endorse the content of these third-party websites.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Changes to the Website</h2>
            <p>We reserve the right to modify, suspend, or discontinue any part of the website without notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Governing Law</h2>
            <p>These Terms of Service are governed by the applicable laws of the jurisdiction where Scalix Labs operates.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Contact</h2>
            <p className="mb-2">For any questions regarding these Terms, please contact:</p>
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
