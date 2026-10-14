import { navLinks } from "@/data/links.data";
import Link from "next/link";

const Header = () => {
  return (
    <header className="my-8">
      <div className="container-page">
        <div className="flex items-center justify-between p-3  border-2 border-ink rounded-2xl bg-paper">
          <div className="flex items-center gap-2">
            <div className="p-2.5 border-2 border-ink rounded-xl text-lg text-brand-soft  bg-brand font-bold">
              DR
            </div>
            <h3 className="font-bold text-xl">Daniil Rai</h3>
          </div>
          <div>
            <ul className="flex gap-2">
              {navLinks.map((links) => (
                <li key={links} className="list-none">
                  <Link
                    href={`#${links}`}
                    className={`no-underline font-bold  uppercase ${links === "contact" ? "nav-link-btn" : "nav-link text-strong"}`}
                  >
                    {links}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
