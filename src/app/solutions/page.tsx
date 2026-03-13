import SolutionCard from "@/components/shared/SolutionCard";
import { solutions } from "@/data/solutions";

export const metadata = {
  title: "Marketing Solutions | Homefield Marketing",
  description:
    "From brand strategy to social media, explore Homefield Marketing's full range of services for prairie businesses.",
};

export default function SolutionsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__inner">
          <h1 className="page-hero__heading">Marketing Solutions</h1>
          <p className="page-hero__sub">
            We offer a full suite of marketing services to help prairie
            businesses grow, connect, and stand out.
          </p>
        </div>
      </section>

      <section className="page-section--white">
        <div className="page-section__inner">
          <div className="solutions-grid">
            {solutions.map((solution) => (
              <SolutionCard key={solution.slug} solution={solution} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
