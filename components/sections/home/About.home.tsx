import SectionLayout from "@/components/layouts/SectionLayout";
import Image from "next/image";

const aboutTags = [
  "Learning by building",
  "Driven by curiosity",
  "Care about details",
];

const AboutSection = () => {
  return (
    <section id="about">
      <SectionLayout label="Who am I" heading="About me" />

      <div className="grid grid-cols-2 gap-8 w-full text-gray-600">
        <div className="flex flex-col gap-6">
          {/* about me paragraph */}
          <p className="text-xl">
            I&apos;m Axel, a Full Stack Developer from Indonesia specializing in
            React, Next.js, and TypeScript. I build responsive web apps
            end-to-end, from clean UIs to backend APIs and databases. Currently
            open to remote and on-site opportunities.
          </p>

          {/* tags */}
          <div className="flex gap-8">
            {aboutTags.map((tag, idx) => (
              <span
                key={tag + idx}
                className="px-4 py-2 uppercase font-bold text-gray-600 bg-gray-200 text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* photo */}
        <div className="flex justify-center md:justify-end text-bas">
          <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden relative">
            <Image
              src="/photo.webp"
              fill
              alt="Rafael Axel Frananda"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
