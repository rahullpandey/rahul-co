import { DESTINATION_CARDS } from "../../data/travelSite";

export default function DestinationGrid() {
  return (
    <section className="travel-section travel-destination-section">
      <div className="travel-shell travel-shell-wide">
        <div className="travel-section-heading">
          <h2 className="travel-section-title">
            Curated <span>Destinations</span>
          </h2>
          <div className="travel-heading-line" />
        </div>

        <div className="travel-destination-grid">
          {DESTINATION_CARDS.map((card) => (
            <article
              key={card.id}
              className={`travel-destination-card is-${card.size} ${card.accent ? "is-accent" : ""}`}
            >
              <div className="travel-destination-media">
                <video autoPlay loop muted playsInline>
                  <source src={card.videoPath} type="video/mp4" />
                </video>
                <div className="travel-destination-gradient" />
                <div className="travel-destination-shine" />
              </div>

              <div className="travel-destination-content">
                <div className="travel-destination-top">
                  <span className="travel-destination-stat">{card.stats}</span>
                  <span className="travel-destination-icon" aria-hidden>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </div>

                <div className="travel-destination-bottom">
                  <p>{card.subtitle}</p>
                  <h3>{card.title}</h3>
                  <div className="travel-destination-hover">
                    <p>{card.description}</p>
                    <button type="button">Explore</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
