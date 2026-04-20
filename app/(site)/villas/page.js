import ServicePage from "../../components/travel/ServicePage";
import { SERVICE_PAGES } from "../../data/travelSite";

export const metadata = {
  title: "Luxury Villas"
};

export default function VillasPage() {
  return <ServicePage {...SERVICE_PAGES.villas} />;
}
