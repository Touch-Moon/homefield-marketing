import SolutionCard from "@/components/shared/SolutionCard";
import AnimatedSection from "@/components/shared/AnimatedSection";
import AnimatedGrid from "@/components/shared/AnimatedGrid";
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
          <AnimatedSection as="h1" className="page-hero__heading">
            Marketing Solutions
          </AnimatedSection>
          <AnimatedSection as="p" className="page-hero__sub" delay={0.1}>
            We offer a full suite of marketing services to help prairie
            businesses grow, connect, and stand out.
          </AnimatedSection>
        </div>
      </section>

      <section className="page-section--white">
        <div className="page-section__inner">
          <AnimatedGrid className="solutions-grid" stagger={0.07}>
            {solutions.map((solution) => (
              <SolutionCard key={solution.slug} solution={solution} />
            ))}
          </AnimatedGrid>
        </div>
      </section>
    </main>
  );
}
