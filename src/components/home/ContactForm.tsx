"use client";
import "./ContactForm.scss";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import Button from "@/components/shared/Button";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const leftRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>("idle");

  useGSAP(() => {
    gsap.fromTo(leftRef.current, { opacity: 0, x: -40 }, {
      opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: leftRef.current, start: "top 75%" },
    });
    gsap.fromTo(formRef.current, { opacity: 0, x: 40 }, {
      opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: formRef.current, start: "top 75%" },
    });
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setFormState("success"); form.reset(); }
      else          { setFormState("error"); }
    } catch {
      setFormState("error");
    }
  }

  return (
    <section className="contact-form-section">
      <div className="contact-form-section__inner">
        <div className="contact-form-section__grid">

          {/* Left */}
          <div ref={leftRef} className="contact-form-section__left opacity-0">
            <h2 className="contact-form-section__heading">Get started now</h2>
            <p className="contact-form-section__desc">
              By filling out this form you will be in touch with someone from our
              head office. If you know which location you would like to be directed
              to, click the button below to view a list of all our locations.
            </p>
            <Button href="/locations" label="View All Locations" variant="pill-dark" size="md" />
          </div>

          {/* Right — Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form-section__form opacity-0">
            <div className="contact-form-section__fields">

              <div className="contact-form-section__field">
                <label htmlFor="name" className="contact-form-section__label">Name</label>
                <input id="name" name="name" type="text" required className="contact-form-section__input" />
              </div>

              <div className="contact-form-section__field">
                <label htmlFor="business" className="contact-form-section__label">Business Name</label>
                <input id="business" name="business" type="text" className="contact-form-section__input" />
              </div>

              <div className="contact-form-section__field">
                <label htmlFor="email" className="contact-form-section__label">Email Address</label>
                <input id="email" name="email" type="email" required className="contact-form-section__input" />
              </div>

              <div className="contact-form-section__field">
                <label htmlFor="phone" className="contact-form-section__label">Phone Number</label>
                <input id="phone" name="phone" type="tel" className="contact-form-section__input" />
              </div>

              <div className="contact-form-section__field contact-form-section__field--full">
                <label htmlFor="location" className="contact-form-section__label">City/Province</label>
                <input id="location" name="location" type="text" className="contact-form-section__input" />
              </div>

              <div className="contact-form-section__field contact-form-section__field--full">
                <label htmlFor="message" className="contact-form-section__label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="contact-form-section__textarea"
                />
              </div>

              <div className="contact-form-section__submit-wrap">
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="contact-form-section__submit"
                  aria-busy={formState === "submitting"}
                >
                  {formState === "submitting" ? "Sending…" : "Get in Touch"}
                </button>

                {/* aria-live: screen readers announce status changes without focus movement */}
                <div aria-live="polite" aria-atomic="true">
                  {formState === "success" && (
                    <p className="contact-form-section__message contact-form-section__message--success">
                      Message sent! We&apos;ll be in touch soon.
                    </p>
                  )}
                  {formState === "error" && (
                    <p className="contact-form-section__message contact-form-section__message--error">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>

                <p className="contact-form-section__recaptcha">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
