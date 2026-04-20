"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "../../data/travelSite";
import ReservationModal from "./ReservationModal";

export default function TravelHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`travel-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="travel-header-brand">
          <Link href="/" className="travel-brand-link">
            <span className="travel-brand-mark">R</span>
            <span>RAHUL CO.</span>
          </Link>

          <nav className="travel-nav" aria-label="Primary">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`travel-nav-link ${pathname === item.path ? "is-active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="travel-header-actions">
          <Link href="/contact" className="travel-login-link">
            Login
          </Link>
          <button className="travel-header-button" type="button" onClick={() => setIsModalOpen(true)}>
            Reserve
          </button>
        </div>
      </header>

      {isModalOpen ? <ReservationModal onClose={() => setIsModalOpen(false)} /> : null}
    </>
  );
}
