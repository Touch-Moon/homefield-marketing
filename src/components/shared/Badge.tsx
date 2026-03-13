import "./Badge.scss";
interface BadgeProps {
  label: string;
  className?: string;
}

export default function Badge({ label, className = "" }: BadgeProps) {
  return (
    <span className={["badge", className].filter(Boolean).join(" ")}>
      {label}
    </span>
  );
}
