"use client";

import { useEffect } from "react";

export default function ReservationModal({ destination, onClose }) {
  const details = destination || {
    title: "Plan Your Journey",
    price: "Tailored Experience",
    image:
      "https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=2670&auto=format&fit=crop"
  };

  useEffect(() => {
    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="travel-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={details.title}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="travel-modal-card">
        <div className="travel-modal-hero">
          <img src={details.image} alt={details.title} />
          <div className="travel-modal-hero-fade" />
          <button className="travel-modal-close" type="button" onClick={onClose} aria-label="Close">
            ×
          </button>
          <div className="travel-modal-title-wrap">
            <h3>{details.title}</h3>
            <p>{details.price}</p>
          </div>
        </div>

        <div className="travel-modal-body">
          <div className="travel-form-grid">
            <label className="travel-form-field">
              <span>First Name</span>
              <input type="text" placeholder="John" />
            </label>
            <label className="travel-form-field">
              <span>Last Name</span>
              <input type="text" placeholder="Doe" />
            </label>
          </div>

          <label className="travel-form-field">
            <span>Email Address</span>
            <input type="email" placeholder="john@example.com" />
          </label>

          <div className="travel-form-grid">
            <label className="travel-form-field">
              <span>Guests</span>
              <select defaultValue="2 Guests">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3-4 Guests</option>
                <option>5+ Guests</option>
              </select>
            </label>
            <label className="travel-form-field">
              <span>Dates</span>
              <input type="date" />
            </label>
          </div>

          <div className="travel-modal-actions">
            <button className="travel-solid-button" type="button">
              Confirm Reservation
            </button>
            <p>Our concierge will contact you within 24 hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
