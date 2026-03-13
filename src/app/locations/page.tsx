import LocationsClient from "@/components/locations/LocationsClient";

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
          <h1 className="page-hero__heading">Locations</h1>
          <p className="page-hero__sub">
            Get in touch with one of many locations across Western Canada.
          </p>
        </div>
      </section>

      {/* Filter tabs + card grid (client component) */}
      <LocationsClient />
    </main>
  );
}
