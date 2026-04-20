"use client";

import { useState } from "react";
import { TRAVEL_PACKAGES } from "../../data/travelSite";
import ReservationModal from "./ReservationModal";

export default function TravelPackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState(null);

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
              <span>Double Click to Reserve</span>
            </p>
          </section>

          <section className="travel-package-grid">
            {TRAVEL_PACKAGES.map((item) => (
              <article
                key={item.id}
                className="travel-package-card"
                onDoubleClick={() => setSelectedPackage(item)}
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
                  </div>
                </div>
                <div className="travel-package-callout">Double Click to Reserve</div>
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
