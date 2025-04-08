import Footer from "@/components/parts/footer";
import Navbar from "@/components/parts/navbar";

export default function PrivacypolicyPage() {
  return (
    <>
      <section className="bg-darkblue min-h-screen text-white">
        <Navbar />

        <div className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

          <div className="space-y-6 text-base leading-relaxed">
            <div>
              <h2 className="font-semibold text-xl">1. Introduction</h2>
              <p>
                This Privacy Policy outlines how GrowthSquare collects, uses, protects, and manages personal information. By using GrowthSquare’s services, you agree to comply with this policy.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">2. Information We Collect</h2>
              <ul className="list-disc ml-6">
                <li>Name, email address, phone number, and location.</li>
                <li>Data related to service usage, such as browser type and IP address.</li>
                <li>Communication records for inquiries and support.</li>
              </ul>
              <p>For users under 18 years of age, parental supervision is required.</p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">3. Use of Personal Information</h2>
              <ul className="list-disc ml-6">
                <li>Delivering and improving our services.</li>
                <li>Enhancing platform security and user experience.</li>
                <li>Analyzing trends and conducting research.</li>
                <li>Providing mentorship, learning programs, and career support.</li>
              </ul>
              <p>We do not sell, trade, or rent your personal data to third parties.</p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">4. Data Transfers</h2>
              <p>Your data may be transferred and stored on systems outside your jurisdiction. We implement stringent security measures to ensure compliance with this policy.</p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">5. User Rights</h2>
              <ul className="list-disc ml-6">
                <li>Access, correct, or delete their personal data.</li>
                <li>Request a portable copy of their data.</li>
                <li>Object to certain data processing, which may affect service availability.</li>
              </ul>
              <p>To exercise these rights, contact us at info@growthsquare.com.</p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">6. Third-Party Services</h2>
              <p>
                With user consent, we may send promotional materials related to third-party services. However, we are not responsible for unauthorized access or the privacy practices of third-party entities.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">7. Cookies</h2>
              <p>We use cookies to enhance user experience and track preferences. Users can modify their browser settings to disable cookies if desired.</p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">8. Notifications & Alerts</h2>
              <p>We may send service-related updates, mentorship opportunities, and relevant career resources via email or phone.</p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">9. Public Forums</h2>
              <p>Any content shared in public forums becomes publicly accessible. Users should exercise caution before disclosing personal information.</p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">10. Data Security</h2>
              <p>We prioritize the security of user information by enforcing strict access controls, limiting access to authorized personnel only.</p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">11. Data Retention</h2>
              <p>We retain user data while the account is active and for at least three years after account closure. The retention period may be adjusted based on legal or operational requirements.</p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">12. Log Information</h2>
              <ul className="list-disc ml-6">
                <li>Web requests</li>
                <li>IP addresses</li>
                <li>Browser types</li>
                <li>Timestamps</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-xl">13. User Communications</h2>
              <p>Messages or inquiries sent by users are retained to facilitate responses, improve services, and enhance user experience.</p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">14. Policy Updates</h2>
              <p>We may update this Privacy Policy periodically. Users will be notified of changes, and continued platform usage will indicate acceptance of the revised policy.</p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">15. User Consent</h2>
              <p>By using GrowthSquare, users consent to the collection, processing, and management of their personal data as outlined in this policy.</p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">16. Dispute Resolution & Grievances</h2>
              <p>For concerns regarding data handling, users can contact our Grievance Officer at infogrowthsquare@gmail.com.</p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">17. Intellectual Property Rights</h2>
              <p>GrowthSquare owns all proprietary content and information on the platform. Unauthorized copying, modification, or distribution is strictly prohibited.</p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">18. Breach Consequences & Indemnification</h2>
              <ul className="list-disc ml-6">
                <li>Users may face service suspension or termination.</li>
                <li>GrowthSquare reserves the right to seek damages.</li>
                <li>Users agree to indemnify GrowthSquare against claims arising from violations.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-xl">19. General Provisions</h2>
              <ul className="list-disc ml-6">
                <li>Notices: Official communications will be sent via email or platform announcements.</li>
                <li>Entire Agreement: This policy, along with supplementary guidelines, constitutes the complete agreement between users and GrowthSquare.</li>
                <li>Assignment: Users cannot transfer their obligations without prior consent from GrowthSquare.</li>
                <li>Severability: If any provision is deemed unenforceable, the rest of the policy remains valid.</li>
                <li>Waiver: Failure to enforce a provision does not constitute a waiver of rights.</li>
                <li>Governing Law: This policy is governed by Indian law, with exclusive jurisdiction held by the Supreme Court of India.</li>
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}
