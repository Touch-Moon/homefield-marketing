import Button from "@/components/shared/Button";

export default function NotFound() {
  return (
    <main>
      <section className="not-found">
        <div>
          <span className="not-found__eyebrow">404</span>
          <h1 className="not-found__heading">Page not found</h1>
          <p className="not-found__body">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
            It may have been moved or no longer exists.
          </p>
          <div className="not-found__actions">
            <Button href="/"        label="Back to Home" variant="pill-outline-white" size="lg" />
            <Button href="/contact" label="Contact Us"   variant="pill-outline-white" size="lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
