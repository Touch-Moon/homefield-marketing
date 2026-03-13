import "./SolutionCard.scss";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
import type { Solution } from "@/types";

interface SolutionCardProps {
  solution: Solution;
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <Link href={`/solutions/${solution.slug}`} className="solution-card">
      <h3 className="solution-card__title">{solution.name}</h3>
      <div className="solution-card__overlay">
        <p className="solution-card__tagline">{solution.tagline}</p>
        <div className="solution-card__arrow">
          <ArrowRightCircle size={16} />
        </div>
      </div>
    </Link>
  );
}
