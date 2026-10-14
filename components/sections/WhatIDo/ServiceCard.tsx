import { IService } from "@/data/services.data";
import uiDev from "../../../assets/uiDev.png";

import Image from "next/image";
interface ServiceCard {
  service: IService;
  classname?: string;
}
export default function ServiceCard({
  service: { description, icon: Icon, color, title, featured },
  classname
}: ServiceCard) {
  return (
    <article
      className={`flex flex-col rounded-2xl border border-[#e7dfd2] bg-[#fffaf2] p-6 gap-3`}
    >
      <div className="flex gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center shrink-0 rounded-xl ${color} ${classname}`}
        >
          <Icon size={22} strokeWidth={1.7} />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-neutral-600">
            {description}
          </p>
        </div>
      </div>
      {featured && <Image src={uiDev} alt="api"/>}
    </article>
  );
}
