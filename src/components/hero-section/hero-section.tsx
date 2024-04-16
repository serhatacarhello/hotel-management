import HeroHeading from "../hero-heading";
import HeroImages from "../hero-images";
import CountUpNumber from "../count-up-number/count-up-number";

export default function HeroSection() {
  return (
    <section className="flex px-4 items-center gap-12 container mx-auto">
      <div className="h-full py-10">
        {/* Heading */}
        <HeroHeading />
        {/* Room Description */}
        <div className="flex justify-between mt-12">
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-lg text-center">Basic Room</p>
            <CountUpNumber duration={3000} endValue={200} />
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-lg text-center">Luxury Room</p>
            <CountUpNumber duration={3000} endValue={20} />
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-lg text-center">Suite Room</p>
            <CountUpNumber duration={1000} endValue={2} />
          </div>
        </div>
      </div>
      {/* Images */}
      <HeroImages />
    </section>
  );
}
