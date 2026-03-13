import type { CSSProperties } from "react";
import Link from "next/link";
import "./CjCards.scss";

// ── Card data type ────────────────────────────────────────────────────────
export interface CjCardItem {
  /** Category/step label (gold uppercase text). null = not shown */
  tag: string | null;
  /** Card heading. null = not shown */
  heading: string | null;
  /** Body text. Paragraphs separated by "\n\n" */
  body: string;
  /** true → dark card (body shown, no overlay) */
  dark: boolean;
  /** Link URL. null = <div>, string = <Link> */
  href: string | null;
}

interface CjCardsProps {
  cards: CjCardItem[];
  /** Additional class (applied to wrapper section) */
  className?: string;
  /**
   * Override padding-top via CSS custom properties.
   * Use when hero bleed compensation is needed (like photo-hero pages):
   *   style={{ "--cj-cards-pt-lg": "14rem", "--cj-cards-pt-xl": "12rem" }}
   */
  style?: CSSProperties;
}

export default function CjCards({ cards, className, style }: CjCardsProps) {
  return (
    <section
      className={`cj-cards${className ? ` ${className}` : ""}`}
      style={style}
    >
      <div className="cj-cards__inner">
        <div className="cj-cards__grid">
          {cards.map((card, i) => {
            const inner = (
              <>
                {/* ── Front: dark card shows body, light card shows tag + heading ── */}
                <div className="cj-cards__card-front">
                  {card.tag && (
                    <span className="cj-cards__card-tag">{card.tag}</span>
                  )}
                  {card.heading && (
                    <h2 className="cj-cards__card-heading">{card.heading}</h2>
                  )}
                  {card.dark &&
                    card.body.split("\n\n").map((para, j) => (
                      <p key={j} className="cj-cards__card-body">
                        {para}
                      </p>
                    ))}
                </div>

                {/* ── Hover overlay: light cards only ── */}
                {!card.dark && (
                  <div className="cj-cards__card-overlay">
                    <div className="cj-cards__card-overlay-content">
                      {card.body.split("\n\n").map((para, j) => (
                        <p key={j} className="cj-cards__card-overlay-body">
                          {para}
                        </p>
                      ))}
                      {card.tag && (
                        <span className="cj-cards__card-pill">{card.tag}</span>
                      )}
                    </div>
                  </div>
                )}
              </>
            );

            return card.href ? (
              <Link
                key={i}
                href={card.href}
                className="cj-cards__card cj-cards__card--link"
              >
                {inner}
              </Link>
            ) : (
              <div
                key={i}
                className={`cj-cards__card${card.dark ? " cj-cards__card--dark" : ""}`}
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
