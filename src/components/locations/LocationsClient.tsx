"use client";

import { useState } from "react";
import LocationFilter, { type Province } from "./LocationFilter";
import LocationGrid from "./LocationGrid";

export default function LocationsClient() {
  const [activeProvince, setActiveProvince] = useState<Province>("all");

  return (
    <>
      <LocationFilter active={activeProvince} onChange={setActiveProvince} />
      <LocationGrid activeProvince={activeProvince} />
    </>
  );
}
