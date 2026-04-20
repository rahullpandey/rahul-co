"use client";

import { useEffect, useState } from "react";
import ReservationModal from "./ReservationModal";

export default function ServicePage({ title, subtitle, heroImage, description, features }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(Math.min(150, window.scrollY * 0.3));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className="travel-service-page">
        <section className="travel-service-hero">
          <div className="travel-service-image-wrap" style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
            <img src={heroImage} alt={title} className="travel-service-image" />
          </div>
          <div className="travel-service-overlay" />
          <div className="travel-service-copy">
            <p>{subtitle}</p>
            <h1>{title}</h1>
            <button className="travel-glass-button" type="button" onClick={() => setIsModalOpen(true)}>
              Inquire Now
            </button>
          </div>
        </section>

        <section className="travel-section">
          <div className="travel-shell">
            <div className="travel-service-grid">
              <div>
                <h2>
                  Unrivaled <span>Excellence.</span>
                </h2>
                <p>{description}</p>
              </div>

              <div className="travel-feature-grid">
                {features.map((feature) => (
                  <article key={feature.title} className="travel-feature-card">
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {isModalOpen ? (
        <ReservationModal
          destination={{ title, price: "Service Inquiry", image: heroImage }}
          onClose={() => setIsModalOpen(false)}
        />
      ) : null}
    </>
  );
}
