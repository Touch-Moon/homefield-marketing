import ContactForm from "@/components/home/ContactForm";

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
          <h1 className="page-hero__heading">Contact Us</h1>
          <p className="page-hero__sub">
            Ready to grow your business? We&apos;d love to hear from you.
            Fill out the form below and we&apos;ll be in touch shortly.
          </p>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
