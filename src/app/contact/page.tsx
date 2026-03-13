import ContactForm from "@/components/home/ContactForm";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata = {
  title: "Contact Us | Homefield Marketing",
  description:
    "Get in touch with Homefield Marketing. We're ready to help grow your prairie business.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__inner">
          <AnimatedSection as="h1" className="page-hero__heading">
            Contact Us
          </AnimatedSection>
          <AnimatedSection as="p" className="page-hero__sub" delay={0.1}>
            Ready to grow your business? We&apos;d love to hear from you.
            Fill out the form below and we&apos;ll be in touch shortly.
          </AnimatedSection>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
