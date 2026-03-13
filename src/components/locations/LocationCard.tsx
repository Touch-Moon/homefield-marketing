import type { Location } from "@/data/locations";
import "./LocationCard.scss";

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  const { city, address, postalCode, phone, email, website } = location;

  return (
    <article className="loc-card">
      <h3 className="loc-card__city">{city}</h3>

      <address className="loc-card__address">
        <p>{address}</p>
        <p>{postalCode}</p>
      </address>

      <ul className="loc-card__contacts">
        {phone && (
          <li className="loc-card__contact">
            <a href={`tel:${phone.replace(/\./g, "")}`} className="loc-card__link">
              {phone}
            </a>
          </li>
        )}
        {website ? (
          <li className="loc-card__contact">
            <a
              href={website}
              className="loc-card__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </a>
          </li>
        ) : (
          <li className="loc-card__contact">
            <a href={`mailto:${email}`} className="loc-card__link loc-card__link--email">
              {email}
            </a>
          </li>
        )}
      </ul>
    </article>
  );
}
