import Image from "next/image";
import type { IProjectImage } from "@/types/projects.types";

type Props = {
  images: IProjectImage[];
  activeIndex: number;
  onSelect: (index: number) => void;
  projectName: string;
};

export default function ProjectThumbnails({
  images,
  activeIndex,
  onSelect,
  projectName,
}: Props) {
  return (
    <div className="relative mt-3">
      <div
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 scrollbar-thin"
        aria-label={`${projectName} screenshot carousel`}
      >
        {images.map((image, index) => (
          <ThumbnailButton
            key={`${image.src}-${index}`}
            image={image}
            index={index}
            total={images.length}
            isActive={index === activeIndex}
            onSelect={() => onSelect(index)}
            projectName={projectName}
          />
        ))}
      </div>

      {images.length > 2 && (
        <p className="mt-1 text-right text-xs text-muted">
          {activeIndex + 1} / {images.length}
        </p>
      )}
    </div>
  );
}

type ThumbnailProps = {
  image: IProjectImage;
  index: number;
  total: number;
  isActive: boolean;
  onSelect: () => void;
  projectName: string;
};

function ThumbnailButton({
  image,
  index,
  total,
  isActive,
  onSelect,
  projectName,
}: ThumbnailProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`Show screenshot ${index + 1} of ${total}`}
      aria-pressed={isActive}
      className={`relative aspect-[16/9] w-[48%] shrink-0 snap-start overflow-hidden rounded-xl border bg-paper transition-opacity sm:w-[calc(50%-6px)] ${
        isActive
          ? "border-ink opacity-100"
          : "border-line opacity-75 hover:opacity-100"
      }`}
    >
      <Image
        src={image.src!}
        alt={image.alt || `${projectName} screenshot ${index + 1}`}
        fill
        sizes="(max-width: 639px) 48vw, 27vw"
        className="object-cover object-top"
      />
    </button>
  );
}