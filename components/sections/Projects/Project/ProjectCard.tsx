import type { IProject } from "@/types/projects.types";
import Badge from "@/components/ui/Badge";
import Button, { ButtonArrow } from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import ProjectGallery from "./ProjectImagesSection/ProjectGallery";

type ProjectCardProps = {
  project: IProject;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 === 1;

  const textOrder = isReversed ? "order-1 lg:order-2" : "order-1";
  const galleryOrder = isReversed ? "order-2 lg:order-1" : "order-2";

  const shadowColor = isReversed ? "peach" : "sun";

  return (
    <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Project information */}
      <div className={`min-w-0 ${textOrder}`}>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.mainTags.map((tag) => (
            <Badge key={tag.name} className={tag.bgColor ?? "bg-paper text-strong ring-1 ring-line"}>
              {tag.name}
            </Badge>
          ))}
        </div>

        <Heading as="h3" className="mb-3">
          {project.name}
        </Heading>

        <p className="mb-5 text-base leading-relaxed text-body sm:text-lg">
          {project.description}
        </p>

        {project.highlights.length > 0 && (
          <ul className="mb-6 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-body marker:text-brand">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}

        {project.stackTags.length > 0 && (
          <p className="mb-6 text-sm text-muted">
            <span className="font-bold text-ink">Stack: </span>
            {project.stackTags.map((tag) => tag.name).join(" · ")}
          </p>
        )}

        {project.url && (
          <Button href={project.url.href} external className="px-4 py-2.5 text-sm">
            {project.url.label} <ButtonArrow>↗</ButtonArrow>
          </Button>
        )}
      </div>

      {/* Main image + thumbnail carousel */}
      <div className={`min-w-0 ${galleryOrder}`}>
        <ProjectGallery
          projectName={project.name}
          main={project.images?.main}
          others={project.images?.others}
          shadowColor={shadowColor}
        />
      </div>
    </article>
  );
}
