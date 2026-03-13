import { locations, PROVINCE_ORDER, PROVINCE_LABELS } from "@/data/locations";
import type { Province as FilterProvince } from "@/components/locations/LocationFilter";
import LocationCard from "./LocationCard";
import AnimatedSection from "@/components/shared/AnimatedSection";
import "./LocationGrid.scss";

interface LocationGridProps {
  activeProvince: FilterProvince;
}

export default function LocationGrid({ activeProvince }: LocationGridProps) {
  // Determine which provinces to show
  const provincesToShow =
    activeProvince === "all"
      ? PROVINCE_ORDER
      : PROVINCE_ORDER.filter((p) => p === activeProvince);

  return (
    <div className="loc-grid">
      <div className="loc-grid__inner">
        {provincesToShow.map((province) => {
          const provinceLocations = locations.filter(
            (loc) => loc.province === province
          );
          return (
            <AnimatedSection key={province} as="section" className="loc-grid__province">
              <h2 className="loc-grid__heading">
                {PROVINCE_LABELS[province]}
              </h2>
              <ul className="loc-grid__list">
                {provinceLocations.map((loc) => (
                  <li key={`${loc.city}-${loc.province}`}>
                    <LocationCard location={loc} />
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}
