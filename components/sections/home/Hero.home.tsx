import CustomButton from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-2 w-full items-center">
      <div className="flex flex-col gap-6">
        <div className="flex">
          <p className="uppercase font-bold text-xs px-2 py-1 text-gray-600 bg-gray-300 tracking-wider rounded-sm">
            Fullstack Developer
          </p>
        </div>
        <h1 className="font-bold text-6xl">
          I build fast, clean web experiences.
        </h1>
        <p className="text-xl font-semibold text-gray-400">
          React • Next.js • TypeScript — end-to-end, engineering for modern
          digital products
        </p>

        <div className="flex mt-4 gap-4">
          <CustomButton text="View Projects" bg={true} action="#projects" />
          <CustomButton
            text="Download CV"
            bg={false}
            action="/Rafael Axel Frananda - CV.pdf"
            newTab
          />
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default HeroSection;
