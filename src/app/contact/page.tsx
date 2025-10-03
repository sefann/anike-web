import { Layout } from "@/components/layout"
import { ContactHero } from "@/components/sections/contact-hero"
import { ContactForm } from "@/components/sections/contact-form"
import { ContactInfo } from "@/components/sections/contact-info"
import { CTASection } from "@/components/sections/cta-section"

export const metadata = {
  title: "Contact - AnikeBrands",
  description: "Get in touch with AnikeBrands for your next design project. Contact me for brand identity, web design, print design, and other creative services.",
}

export default function ContactPage() {
  return (
    <Layout>
      <ContactHero />
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <CTASection />
    </Layout>
  )
}
