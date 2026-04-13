"use client";
import "./navBar.scss";
import { useEffect, useState } from "react";
import { Link } from "@/../navigation";
import Image from "next/image";
import backArrow from "../../assets/images/navBar/backArrow.svg";
import { NavTab, NavTabSubItem } from "./NavTab";

type NavBarProps = {
  data: any[];
};

type MobileMenuView = "main" | "services" | "projects";

const SERVICES_SUB_ITEMS: NavTabSubItem[] = [
  { label: "Voir tous les services", href: { pathname: "/services" } },
  {
    label: "Design intérieur résidentiel",
    href: { pathname: "/services/[slug]", params: { slug: "design-interieur-residentiel" } },
  },
  {
    label: "Design intérieur commercial",
    href: { pathname: "/services/[slug]", params: { slug: "design-interieur-commercial" } },
  },
  {
    label: "Architecture résidentielle",
    href: { pathname: "/services/[slug]", params: { slug: "architecture-residentielle" } },
  },
];

const PROJECTS_SUB_ITEMS: NavTabSubItem[] = [
  { label: "Voir tous les projets", href: { pathname: "/projects" } },
  { label: "Résidentiel", href: { pathname: "/projects", query: { type: "residentiel" } } },
  { label: "Commercial", href: { pathname: "/projects", query: { type: "commercial" } } },
];

export const NavBar: React.FC<NavBarProps> = ({ data }) => {
  const NAV_BAR_BREAK_POINT = 80;
  const [showNavBar, setShowNavBar] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileMenuView, setMobileMenuView] = useState<MobileMenuView>("main");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > NAV_BAR_BREAK_POINT) {
      setShowNavBar(false);
      setShowMobileMenu(false);
    } else {
      setShowNavBar(true);
    }

    setLastScrollY(window.scrollY);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
    setMobileMenuView("main");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const subItems = mobileMenuView === "services" ? SERVICES_SUB_ITEMS : PROJECTS_SUB_ITEMS;

  return (
    <nav
      className={`nav-bar-container ${lastScrollY > NAV_BAR_BREAK_POINT && showNavBar ? "" : "nav-bar-top"}`}
      style={{
        top: showNavBar ? 0 : -100,
      }}
    >
      <Link className="nav-bar-logo-link" href={{ pathname: "/" }} onClick={closeMobileMenu} />
      <div className="nav-bar-links-desktop">
        <NavTab
          label={data[0].servicesLink}
          href={{ pathname: "/services" }}
          className="nav-bar-link nav-bar-link-services"
          subItems={SERVICES_SUB_ITEMS.slice(1)}
        />
        <NavTab
          label={data[0].projectsLink}
          href={{ pathname: "/projects" }}
          className="nav-bar-link nav-bar-link-projects"
          subItems={PROJECTS_SUB_ITEMS.slice(1)}
        />
        <NavTab
          label={data[0].aboutUsLink}
          href={{ pathname: "/about-us" }}
          className="nav-bar-link nav-bar-link-about-us"
        />
        <NavTab label={data[0].blogLink} href={{ pathname: "/blog" }} className="nav-bar-link nav-bar-link-blog" />
        <Link className="nav-bar-link nav-bar-contact-us" href={{ pathname: "/contact" }}>
          {data[0].contactUs}
        </Link>
      </div>
      <div className="nav-bar-links-mobile">
        <button
          className={`nav-bar-menu-toggle ${showMobileMenu ? "is-open" : ""}`}
          onClick={() => (showMobileMenu ? closeMobileMenu() : setShowMobileMenu(true))}
          aria-label="Menu"
        >
          <span />
          <span />
        </button>
      </div>
      {showMobileMenu && (
        <div className="nav-bar-mobile-menu">
          <Link className="nav-bar-mobile-menu-link" href={{ pathname: "/" }} onClick={closeMobileMenu} />

          {mobileMenuView === "main" ? (
            <>
              <button
                className="nav-bar-mobile-link nav-bar-link-services"
                onClick={() => setMobileMenuView("services")}
              >
                {data[0].servicesLink}
              </button>
              <button
                className="nav-bar-mobile-link nav-bar-link-projects"
                onClick={() => setMobileMenuView("projects")}
              >
                {data[0].projectsLink}
              </button>
              <Link
                className="nav-bar-mobile-link nav-bar-link-about-us"
                href={{ pathname: "/about-us" }}
                onClick={closeMobileMenu}
              >
                {data[0].aboutUsLink}
              </Link>
              <Link
                className="nav-bar-mobile-link nav-bar-link-blog"
                href={{ pathname: "/blog" }}
                onClick={closeMobileMenu}
              >
                {data[0].blogLink}
              </Link>
              <Link className="nav-bar-mobile-link" href={{ pathname: "/contact" }} onClick={closeMobileMenu}>
                {data[0].contactUs}
              </Link>
            </>
          ) : (
            <>
              {subItems.map((item, index) => (
                <Link key={index} className="nav-bar-mobile-link nav-bar-mobile-sublink" href={item.href} onClick={closeMobileMenu}>
                  {item.label}
                </Link>
              ))}
              <button className="nav-bar-mobile-back-btn" onClick={() => setMobileMenuView("main")}>
                <Image src={backArrow} width={56} height={28} alt="Retour" unoptimized />
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};
