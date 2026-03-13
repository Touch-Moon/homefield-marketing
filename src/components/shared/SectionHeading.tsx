import "./SectionHeading.scss";
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  size?: "h2" | "h3";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  size = "h2",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const Tag = size;

  return (
    <div className={className}>
      <Tag
        className={[
          "section-heading__title",
          `section-heading__title--${size}`,
          light ? "section-heading__title--light" : "section-heading__title--dark",
        ].join(" ")}
      >
        {title}
      </Tag>
      {subtitle && (
        <p
          className={[
            "section-heading__subtitle",
            light ? "section-heading__subtitle--light" : "section-heading__subtitle--dark",
          ].join(" ")}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
