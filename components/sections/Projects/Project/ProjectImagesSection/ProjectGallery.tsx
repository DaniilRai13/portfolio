"use client";

import { useState } from "react";
import type { IProjectImage } from "@/types/projects.types";
import ProjectMainImage, { type ShadowColor } from "./ProjectMainImage";
import ProjectThumbnails from "./ProjectThumbnails";

type ProjectGalleryProps = {
  main?: IProjectImage;
  others?: IProjectImage[];
  projectName: string;
  shadowColor?: ShadowColor;
  className?: string;
};

export default function ProjectGallery({
  main,
  others = [],
  projectName,
  shadowColor,
  className,
}: ProjectGalleryProps) {
  const images = [main, ...others].filter((image): image is IProjectImage =>
    Boolean(image?.src),
  );

  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return <EmptyGallery />;
  }

  return (
    <div className={`w-full min-w-0 ${className ?? ""}`}>
      <ProjectMainImage
        image={images[activeIndex]}
        projectName={projectName}
        shadowColor={shadowColor}
      />

      {images.length > 1 && (
        <ProjectThumbnails
          images={images}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          projectName={projectName}
        />
      )}
    </div>
  );
}

function EmptyGallery() {
  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-ink bg-cream text-sm text-muted">
      Project screenshots coming soon
    </div>
  );
}
