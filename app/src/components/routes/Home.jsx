import AboutMeSection from "../sections/AboutMeSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";

function Home({sections}) {
  return (
		<>
			<HeroSection props={sections.filter(section => section.slug === "hero-section")[0]}/>
			<ProjectsSection props={sections.filter(section => section.slug === "projects-section")[0]}/>
			<AboutMeSection props={sections.filter(section => section.slug === "about-me-section")[0]}/>
		</>
  );
}

export default Home;
