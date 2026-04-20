import { INFO_PAGE_DEFAULT_HIGHLIGHTS } from "../../data/travelSite";

export default function InfoPage({ title, subtitle, image, highlights = INFO_PAGE_DEFAULT_HIGHLIGHTS }) {
  return (
    <main className="travel-info-page">
      <div className="travel-shell">
        <section className="travel-info-hero">
          <img src={image} alt={title} />
          <div className="travel-info-hero-overlay">
            <div>
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
          </div>
        </section>

        <section className="travel-info-grid">
          <div>
            <h2>Experience the Extraordinary</h2>
            <p>
              At Rahul Co., we believe that travel is not just about the destination, but the journey
              itself. Our curated experiences are designed to immerse you in the culture, beauty, and
              luxury of the world&apos;s most sought-after locations.
            </p>
            <p>
              Whether you are seeking a secluded island retreat, a cultural city expedition, or an
              adventurous wildlife safari, our team of experts is dedicated to crafting bespoke
              itineraries that exceed your expectations.
            </p>
          </div>

          <aside className="travel-info-panel">
            <h3>Page Highlights</h3>
            <ul>
              {highlights.map((item) => (
                <li key={item}>
                  <span />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </div>
    </main>
  );
}
