import "./travel-site.css";
import TravelFooter from "../components/travel/TravelFooter";
import TravelHeader from "../components/travel/TravelHeader";

export default function PublicSiteLayout({ children }) {
  return (
    <div className="travel-site-shell">
      <TravelHeader />
      {children}
      <TravelFooter />
    </div>
  );
}
