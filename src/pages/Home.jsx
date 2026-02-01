import HomeHero from "../components/HomeHero";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <>
      <HomeHero />

      {/* ABOUT SECTION */}

      <AboutSection />

      {/* PROJECTS SECTION */}

      <ProjectsSection />

      {/* CONTACT SECTION */}

      <ContactSection />
    </>
  );
}

export default Home;
