import Image from "next/image";
import type { IProjectImage } from "@/types/projects.types";

export type ShadowColor = "sun" | "peach";

type Props = {
  image: IProjectImage;
  projectName: string;
  shadowColor?: ShadowColor;
};

const SHADOW_CLASSES: Record<ShadowColor, string> = {
  sun: "shadow-[8px_8px_0_var(--color-sun)]",
  peach: "shadow-[8px_8px_0_var(--color-peach)]",
};

export default function ProjectMainImage({ image, projectName, shadowColor = "sun" }: Props) {
  return (
    <div
      className={`relative aspect-[16/9] overflow-hidden rounded-xl border-[1.5px] border-ink bg-paper ${SHADOW_CLASSES[shadowColor]}`}
    >
      <Image
        key={image.src}
        src={image.src!}
        alt={image.alt || `${projectName} screenshot`}
        fill
        sizes="(max-width: 1023px) 100vw, 50vw"
        className="object-cover object-top"
      />
    </div>
  );
}
