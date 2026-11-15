import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Subheading from "@/components/ui/Subheading";
import ProjectCard from "./Project/ProjectCard";
import { projectsData } from "@/data/projects.data";
import { sectionIds } from "@/data/links.data";

const Projects = () => {
  return (
    <Section id={sectionIds.projects} labelledBy="projects-heading" background="cream">
      <div className="mb-12 lg:mb-16">
        <Eyebrow>02 — Selected work</Eyebrow>
        <Heading id="projects-heading" className="mb-3">
          Featured projects
        </Heading>
        <Subheading>Real products I designed, built and shipped.</Subheading>
      </div>

      <div className="flex flex-col gap-16 lg:gap-24">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
