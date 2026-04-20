import { STAY_CARDS } from "../../data/travelSite";

export default function StayShowcase() {
  return (
    <section className="travel-section travel-stays-section">
      <div className="travel-shell">
        <h2 className="travel-section-title">Exclusive Stays</h2>
        <p className="travel-section-copy">
          Discover our collection of award-winning private residences, designed for the ultimate escape.
        </p>

        <div className="travel-stay-grid">
          {STAY_CARDS.map((card) => (
            <article
              key={card.title}
              className={`travel-stay-card ${card.dark ? "is-dark" : ""} ${card.accent ? "is-accent" : ""}`}
            >
              <div className="travel-stay-media">
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>
              <div className="travel-stay-body">
                <div>
                  <h3>{card.title}</h3>
                  <p className="travel-stay-price">{card.price}</p>
                  <p className="travel-stay-description">{card.description}</p>
                </div>
                <div className="travel-stay-arrow" aria-hidden>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
