import PageHero from "@/components/PageHero";
import heroImg1 from "@/assets/solution-banner.jpg";
import table from "@/assets/table.png";
import OrbitalDiagramAnimation from "@/components/OrbitalDiagram";
const Solutions = () => (
  <div>
    <PageHero
      img={heroImg1}
      label="OUR SOLUTIONS"
      title="Turning Insight into Action"
    />

    <div className="mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 md:py-12">
      <div className="max-w-4xl mx-auto text-center">
        <p className="leading-relaxed mb-10 md:mb-12 text-black text-[18px] md:text-[22px] lg:text-[30px]">
          PRISM Institute delivers innovative, data-driven solutions to help
          governments, communities, and organizations manage interconnected
          risks to sustainable well-being.
        </p>

        <div className="w-full overflow-x-auto mb-10 md:mb-12">
          <img
            src={table}
            alt="Solutions overview table"
            className="w-full h-auto object-contain min-w-[320px]"
          />
        </div>
        <OrbitalDiagramAnimation />
      </div>
    </div>
  </div>
);

export default Solutions;
