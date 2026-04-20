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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("is-overlay-open", isMenuOpen);

    return () => {
      document.body.classList.remove("is-overlay-open");
    };
  }, [isMenuOpen]);

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
          <button
            className={`travel-menu-toggle ${isMenuOpen ? "is-open" : ""}`}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="travel-mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        id="travel-mobile-menu"
        className={`travel-mobile-menu ${isMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <button
          className="travel-mobile-menu-backdrop"
          type="button"
          tabIndex={isMenuOpen ? 0 : -1}
          aria-label="Close mobile menu"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="travel-mobile-menu-panel">
          <nav className="travel-mobile-nav" aria-label="Mobile primary">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`travel-mobile-link ${pathname === item.path ? "is-active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="travel-mobile-menu-actions">
            <Link href="/contact" className="travel-login-link travel-mobile-login-link">
              Login
            </Link>
            <button
              className="travel-header-button travel-mobile-reserve-button"
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                setIsModalOpen(true);
              }}
            >
              Reserve
            </button>
          </div>
        </div>
      </div>

      {isModalOpen ? <ReservationModal onClose={() => setIsModalOpen(false)} /> : null}
    </>
  );
}
