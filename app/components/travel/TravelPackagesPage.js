"use client";

import { useEffect, useState } from "react";
import { TRAVEL_PACKAGES } from "../../data/travelSite";
import ReservationModal from "./ReservationModal";

export default function TravelPackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isTouchMode, setIsTouchMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateTouchMode = () => setIsTouchMode(mediaQuery.matches);

    updateTouchMode();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateTouchMode);
      return () => {
        mediaQuery.removeEventListener("change", updateTouchMode);
      };
    }

    mediaQuery.addListener(updateTouchMode);

    return () => {
      mediaQuery.removeListener(updateTouchMode);
    };
  }, []);

  const interactionHint = isTouchMode ? "Tap Reserve on Mobile" : "Double Click to Reserve";
  const cardHint = isTouchMode ? "Tap Reserve" : "Double Click to Reserve";

  return (
    <>
      <main className="travel-packages-page">
        <div className="travel-shell">
          <section className="travel-packages-header">
            <h1>
              Plan Your <span>Journey</span>
            </h1>
            <p>
              Explore our curated selection of global sanctuaries.
              <br />
              <span>{interactionHint}</span>
            </p>
          </section>

          <section className="travel-package-grid">
            {TRAVEL_PACKAGES.map((item) => (
              <article
                key={item.id}
                className="travel-package-card"
                onDoubleClick={() => {
                  if (!isTouchMode) {
                    setSelectedPackage(item);
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedPackage(item);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="travel-package-gradient" />
                <div className="travel-package-content">
                  <span>{item.location}</span>
                  <h3>{item.title}</h3>
                  <div className="travel-package-hover">
                    <p>{item.description}</p>
                    <strong>
                      {item.price} <small>/ Package</small>
                    </strong>
                    <div className="travel-package-actions">
                      <button
                        className="travel-glass-button travel-package-reserve-button"
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setSelectedPackage(item);
                        }}
                      >
                        Reserve
                      </button>
                    </div>
                  </div>
                </div>
                <div className="travel-package-callout" data-label={cardHint} aria-hidden>
                  {cardHint}
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>

      {selectedPackage ? (
        <ReservationModal destination={selectedPackage} onClose={() => setSelectedPackage(null)} />
      ) : null}
    </>
  );
}
