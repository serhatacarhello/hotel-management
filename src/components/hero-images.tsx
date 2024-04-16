import Image from "next/image";
export default function HeroImages() {
  return (
    <div className="hidden md:grid  gap-8 grid-cols-1">
      <div className="rounded-2xl overflow-hidden h-48">
        <Image
          src={"/images/hero-1.jpeg"}
          alt="hero-1"
          width={300}
          height={300}
          className="img scale-animation"
        />
      </div>
      <div className="grid grid-cols-2  gap-8 h-48">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={"/images/hero-2.jpeg"}
            alt="hero-2"
            width={300}
            height={300}
            className="img scale-animation"
          />
        </div>
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={"/images/hero-3.jpeg"}
            alt="hero-3"
            width={300}
            height={300}
            className="img scale-animation"
          />
        </div>
      </div>
    </div>
  );
}
