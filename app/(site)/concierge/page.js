import ServicePage from "../../components/travel/ServicePage";
import { SERVICE_PAGES } from "../../data/travelSite";

export const metadata = {
  title: "Global Concierge"
};

export default function ConciergePage() {
  return <ServicePage {...SERVICE_PAGES.concierge} />;
}
