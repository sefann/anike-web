import { Layout } from "@/components/layout"

export const metadata = {
  title: "Terms of Service - AnikeBrands",
  description: "Terms of Service for AnikeBrands - Learn about our service terms, conditions, and client agreements.",
}

export default function TermsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="text-gradient">Terms of Service</span>
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using AnikeBrands services, you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
                <p className="text-muted-foreground mb-4">
                  AnikeBrands provides brand identity design and strategy services including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Brand Identity Design & Strategy</li>
                  <li>Visual Communication & Collateral Design</li>
                  <li>Brand Strategy & Positioning</li>
                  <li>Motion & Digital Design</li>
                  <li>Social Media Design & Strategy</li>
                  <li>Event & Experiential Branding</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Provide accurate and complete project information</li>
                  <li>Respond to requests for feedback and approvals in a timely manner</li>
                  <li>Provide necessary materials and assets for project completion</li>
                  <li>Respect intellectual property rights</li>
                  <li>Make payments according to agreed terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms will be agreed upon before project commencement. Generally:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>50% deposit required to begin work</li>
                  <li>Remaining balance due upon project completion</li>
                  <li>Payment methods: Bank transfer, PayPal, or other agreed methods</li>
                  <li>Late payments may incur additional charges</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  Upon full payment, you will receive:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Full rights to the final design deliverables</li>
                  <li>Source files (as agreed in project scope)</li>
                  <li>Usage rights for the completed work</li>
                </ul>
                <p className="text-muted-foreground">
                  AnikeBrands retains the right to showcase completed work in our portfolio 
                  unless otherwise agreed in writing.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Revisions and Changes</h2>
                <p className="text-muted-foreground mb-4">
                  We include a reasonable number of revisions in our standard packages. 
                  Additional revisions beyond the agreed scope may incur additional charges. 
                  Major changes to project scope may require a new agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Project Timeline</h2>
                <p className="text-muted-foreground mb-4">
                  Project timelines are estimates based on project complexity and client responsiveness. 
                  Delays in client feedback or approval may extend project completion dates. 
                  We will communicate any timeline changes promptly.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Cancellation Policy</h2>
                <p className="text-muted-foreground mb-4">
                  Projects may be cancelled with written notice. Work completed up to the cancellation 
                  date will be billed accordingly. Deposits are non-refundable unless cancellation 
                  occurs within 24 hours of project initiation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Confidentiality</h2>
                <p className="text-muted-foreground mb-4">
                  We maintain strict confidentiality regarding your business information, 
                  project details, and any sensitive materials shared during our collaboration. 
                  We will not disclose confidential information to third parties without your consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  Our liability is limited to the total amount paid for the specific project. 
                  We are not liable for any indirect, incidental, or consequential damages. 
                  We provide professional services but cannot guarantee specific business outcomes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">11. Force Majeure</h2>
                <p className="text-muted-foreground mb-4">
                  We are not liable for delays or failures due to circumstances beyond our control, 
                  including but not limited to natural disasters, government actions, or technical failures.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
                <p className="text-muted-foreground mb-4">
                  These terms are governed by the laws of Nigeria. Any disputes will be resolved 
                  through good faith negotiation, and if necessary, through appropriate legal channels.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify these terms at any time. Changes will be posted 
                  on this page with an updated revision date. Continued use of our services 
                  constitutes acceptance of the modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-muted-foreground mb-2">
                    <strong>Email:</strong> Theanikedesign@gmail.com
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <strong>Phone:</strong> +234 906 016 0288
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Location:</strong> Nigeria
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

