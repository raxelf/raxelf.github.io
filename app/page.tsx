import AboutSection from "@/components/sections/About.home";
import CertificationSection from "@/components/sections/Certification.home";
import ContactSection from "@/components/sections/Contact.home";
import ExperienceSection from "@/components/sections/Experience.home";
import HeroSection from "@/components/sections/Hero.home";
import ProjectSection from "@/components/sections/Project.home";
import TechStackSection from "@/components/sections/TechStack.home";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ProjectSection />
      <TechStackSection />
      <AboutSection />
      <ExperienceSection />
      <CertificationSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
