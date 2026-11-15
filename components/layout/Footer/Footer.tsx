import { sectionIds } from "@/data/links.data";
import { siteConfig } from "@/data/site.data";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t-[1.5px] border-line bg-paper">
      <div className="container-page flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
        <p className="text-[13px] leading-relaxed text-muted">
          © 2026 {siteConfig.name} · {siteConfig.role}
        </p>

        <div className="flex items-center gap-6">
          <SocialLinks
            className="flex items-center gap-1"
            linkClassName="size-10 rounded-field text-strong hover:bg-cream"
          />

          <a
            href={`#${sectionIds.home}`}
            className="text-[13px] font-semibold text-ink transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
