"use client";
import "./navTab.scss";
import { ComponentProps, useEffect, useState } from "react";
import { Link } from "@/../navigation";

export type NavTabSubItem = {
  label: string;
  href: ComponentProps<typeof Link>["href"];
};

type NavTabProps = {
  label: string;
  href: ComponentProps<typeof Link>["href"];
  className?: string;
  subItems?: NavTabSubItem[];
  onClick?: () => void;
};

export const NavTab: React.FC<NavTabProps> = ({ label, href, className, subItems, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasSubItems = subItems && subItems.length > 0;

  useEffect(() => {
    if (!isHovered) return;
    const handleScroll = () => setIsHovered(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHovered]);

  return (
    <div
      className={`nav-tab ${className ?? ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        className="nav-tab-link"
        href={href}
        onClick={onClick}
      >
        {label}
      </Link>
      {hasSubItems && isHovered && (
        <div className="nav-tab-dropdown">
          {subItems!.map((item, index) => (
            <Link
              key={index}
              className="nav-tab-dropdown-item"
              href={item.href}
              onClick={onClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
