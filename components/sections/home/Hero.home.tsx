import CustomButton from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full items-center">
      <div className="flex flex-col gap-6">
        <div className="flex">
          <p className="uppercase font-bold text-xs px-2 py-1 text-gray-600 bg-gray-300 tracking-wider rounded-sm">
            Fullstack Developer
          </p>
        </div>
        <h1 className="font-bold text-4xl lg:text-6xl">
          I build fast, clean web experiences.
        </h1>
        <p className="text-md lg:text-xl font-semibold text-gray-400">
          React • Next.js • TypeScript — end-to-end, engineering for modern
          digital products
        </p>

        <div className="flex mt-4 gap-4 flex-wrap">
          <CustomButton text="View Projects" bg={true} action="#projects" />
          <CustomButton
            text="Download CV"
            bg={false}
            action="/Rafael Axel Frananda - CV.pdf"
            newTab
          />
        </div>
      </div>

      <div className="relative w-full h-75 md:h-75">
        <Image
          src="/responsive-web-illustration.svg"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Illustration of web apps"
          loading="eager"
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
