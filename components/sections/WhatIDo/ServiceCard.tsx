import Image from "next/image";
import type { IService } from "@/data/services.data";
import uiDev from "../../../assets/uiDev.png";

interface ServiceCardProps {
  service: IService;
}

export default function ServiceCard({
  service: { description, icon: Icon, color, title, featured },
}: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col gap-5 rounded-card border-[1.5px] border-line bg-cream p-6 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-ink hover:shadow-[6px_6px_0_var(--color-sun)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="flex gap-4">
        <div
          className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${color}`}
        >
          <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-ink">{title}</h3>
          <p className="mt-1 text-[15px] leading-relaxed text-body">{description}</p>
        </div>
      </div>

      {featured && (
        <Image
          src={uiDev}
          alt=""
          sizes="(min-width: 768px) 50vw, 100vw"
          className="mt-auto h-auto w-full"
        />
      )}
    </article>
  );
}
