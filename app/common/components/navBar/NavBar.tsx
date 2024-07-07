"use client";
import "./navBar.scss";
import { useEffect, useState } from "react";
import { Link } from "@/../navigation";
import Image from "next/image";
import closeBtn from "../../assets/images/navBar/closeBtn.svg";

type NavBarProps = {
  data: any[];
};

export const NavBar: React.FC<NavBarProps> = ({ data }) => {
  const NAV_BAR_BREAK_POINT = 80;
  const [showNavBar, setShowNavBar] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`nav-bar-container ${
        lastScrollY > NAV_BAR_BREAK_POINT && showNavBar ? "" : "nav-bar-top"
      }`}
      style={{
        top: showNavBar ? 0 : -100,
      }}
    >
      <Link
        className="nav-bar-logo-link"
        href={{ pathname: "/" }}
        onClick={() => setShowMobileMenu(false)}
      />
      <div className="nav-bar-links-desktop">
        <Link
          className="nav-bar-link nav-bar-link-services"
          href={{ pathname: "/services" }}
        >
          {data[0].servicesLink}
        </Link>
        <Link
          className="nav-bar-link nav-bar-link-projects"
          href={{ pathname: "/projects" }}
        >
          {data[0].projectsLink}
        </Link>
        <Link
          className="nav-bar-link nav-bar-link-about-us"
          href={{ pathname: "/about-us" }}
        >
          {data[0].aboutUsLink}
        </Link>
        <Link
          className="nav-bar-link nav-bar-link-blog"
          href={{ pathname: "/blog" }}
        >
          {data[0].blogLink}
        </Link>
        <Link
          className="nav-bar-link nav-bar-contact-us"
          href={{ pathname: "/contact" }}
        >
          {data[0].contactUs}
        </Link>
      </div>
      <div className="nav-bar-links-mobile">
        {showMobileMenu ? (
          <Image
            className="nav-bar-mobile-menu-close-btn"
            src={closeBtn}
            width={20}
            height={20}
            alt="Logo de la compagnie Mamuth"
            unoptimized
            onClick={() => setShowMobileMenu(false)}
          />
        ) : (
          <div
            onClick={() => setShowMobileMenu(true)}
            className="nav-bar-mobile-menu-open-btn"
          />
        )}
      </div>
      {showMobileMenu && (
        <div className="nav-bar-mobile-menu">
          <Link
            className="nav-bar-mobile-menu-link"
            href={{ pathname: "/" }}
            onClick={() => setShowMobileMenu(false)}
          />
          <Link
            className="nav-bar-mobile-link nav-bar-link-services"
            href={{ pathname: "/services" }}
            onClick={() => setShowMobileMenu(false)}
          >
            {data[0].servicesLink}
          </Link>
          <Link
            className="nav-bar-mobile-link nav-bar-link-projects"
            href={{ pathname: "/projects" }}
            onClick={() => setShowMobileMenu(false)}
          >
            {data[0].projectsLink}
          </Link>
          <Link
            className="nav-bar-mobile-link nav-bar-link-about-us"
            href={{ pathname: "/about-us" }}
            onClick={() => setShowMobileMenu(false)}
          >
            {data[0].aboutUsLink}
          </Link>
          <Link
            className="nav-bar-mobile-link nav-bar-link-blog"
            href={{ pathname: "/blog" }}
            onClick={() => setShowMobileMenu(false)}
          >
            {data[0].blogLink}
          </Link>
          <Link
            className="nav-bar-mobile-link"
            href={{ pathname: "/contact" }}
            onClick={() => setShowMobileMenu(false)}
          >
            {data[0].contactUs}
          </Link>
        </div>
      )}
    </nav>
  );
};
