import ServicePage from "../../components/travel/ServicePage";
import { SERVICE_PAGES } from "../../data/travelSite";

export const metadata = {
  title: "Curated Experiences"
};

export default function ExperiencesPage() {
  return <ServicePage {...SERVICE_PAGES.experiences} />;
}
