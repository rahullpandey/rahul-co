import ServicePage from "../../components/travel/ServicePage";
import { SERVICE_PAGES } from "../../data/travelSite";

export const metadata = {
  title: "Private Aviation"
};

export default function PrivateJetsPage() {
  return <ServicePage {...SERVICE_PAGES["private-jets"]} />;
}
