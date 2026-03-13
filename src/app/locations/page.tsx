import LocationsClient from "@/components/locations/LocationsClient";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata = {
  title: "Locations | Homefield Marketing",
  description:
    "Get in touch with one of many locations across Western Canada.",
};

export default function LocationsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__inner">
          <AnimatedSection as="h1" className="page-hero__heading">
            Locations
          </AnimatedSection>
          <AnimatedSection as="p" className="page-hero__sub" delay={0.1}>
            Get in touch with one of many locations across Western Canada.
          </AnimatedSection>
        </div>
      </section>

      {/* Filter tabs + card grid (client component) */}
      <LocationsClient />
    </main>
  );
}
