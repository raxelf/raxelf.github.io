import SectionLayout from "@/components/layouts/SectionLayout";
import Image from "next/image";

const aboutTags = [
  "Driven by curiosity",
  "Care about details",
  "Learning by building",
];

const AboutSection = () => {
  return (
    <section id="about">
      <SectionLayout label="Who am I" heading="About me" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-gray-600">
        <div className="flex flex-col gap-6">
          {/* about me paragraph */}
          <p className="md:text-xl text-md text-justify">
            I&apos;m Axel, a Full Stack Developer from Indonesia specializing in
            React, Next.js, and TypeScript. I build responsive web apps
            end-to-end, from clean UIs to backend APIs and databases. Currently
            open to remote and on-site opportunities.
          </p>

          {/* tags */}
          <div className="flex gap-4 lg:gap-8 flex-wrap">
            {aboutTags.map((tag, idx) => (
              <span
                key={tag + idx}
                className="p-2 uppercase font-bold text-gray-600 bg-gray-200 text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* photo */}
        <div className="flex justify-center md:justify-end order-first md:order-last">
          <div className="w-full h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden relative">
            <Image
              src="/photos.webp"
              fill
              alt="Rafael Axel Frananda"
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
