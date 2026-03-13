import "./Button.scss";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type Variant = "pill-dark" | "pill-white" | "pill-gold" | "pill-outline-dark" | "pill-outline-white";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
  variant?: Variant;
  size?: Size;
}

const variantMap: Record<Variant, string> = {
  "pill-dark":          "btn--dark",
  "pill-white":         "btn--white",
  "pill-gold":          "btn--gold",
  "pill-outline-dark":  "btn--outline-dark",
  "pill-outline-white": "btn--outline-white",
};

export default function Button({
  href,
  label,
  variant = "pill-dark",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={["btn", variantMap[variant], className].filter(Boolean).join(" ")}
      {...rest}
    >
      {label}
    </Link>
  );
}
