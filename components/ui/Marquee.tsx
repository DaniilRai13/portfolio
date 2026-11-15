import type { CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

interface MarqueeProps {
  items: string[];
  /** Сколько раз список повторяется в одной копии ленты. Копия должна быть шире экрана. */
  repeat?: number;
  /** Время полного прохода одной копии. Больше — медленнее. */
  durationSeconds?: number;
  label: string;
  className?: string;
}

/**
 * Бесконечная бегущая строка справа налево, только CSS.
 * Лента состоит из двух одинаковых копий и сдвигается на 50% своей ширины,
 * поэтому шов не виден. При наведении останавливается.
 */
export default function Marquee({
  items,
  repeat = 3,
  durationSeconds = 40,
  label,
  className = "",
}: MarqueeProps) {
  const copy = (
    <ul className="flex shrink-0 items-center">
      {Array.from({ length: repeat }, () => items)
        .flat()
        .map((item, index) => (
          <li key={index} className="flex items-center gap-6 pl-6 whitespace-nowrap">
            <span>{item}</span>
            <span className="text-ink/40">✦</span>
          </li>
        ))}
    </ul>
  );

  return (
    <div
      className={twMerge(
        "group overflow-hidden border-y-[1.5px] border-ink bg-sun py-3 text-sm font-bold text-ink sm:text-base",
        className,
      )}
    >
      {/* Скринридер прочитает список один раз, визуальная лента для него скрыта */}
      <p className="sr-only">
        {label}: {items.join(", ")}
      </p>

      <div
        aria-hidden="true"
        style={{ "--marquee-duration": `${durationSeconds}s` } as CSSProperties}
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
      >
        {copy}
        {copy}
      </div>
    </div>
  );
}
