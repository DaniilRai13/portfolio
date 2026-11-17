import Link from "next/link";

import { sectionIds } from "@/data/links.data";
import { siteConfig } from "@/data/site.data";
import Logo from "@/components/ui/Logo";
import Navigation from "./Navigation";
import SideRail from "./SideRail";

export default function Header() {
  return (
    <>
      {/* Телефоны и планшеты: шапка-капсула сверху */}
      <header className="sticky top-0 z-50 pt-4 pb-2 lg:hidden">
        <div className="container-page">
          <Navigation
            logo={
              <Link
                href={`#${sectionIds.home}`}
                aria-label={`${siteConfig.name} — back to top`}
                className="no-underline"
              >
                <Logo />
              </Link>
            }
          />
        </div>
      </header>

      {/* Desktop: вертикальная рейка слева */}
      <SideRail />
    </>
  );
}
