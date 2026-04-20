import InfoPage from "../../components/travel/InfoPage";
import { INFO_PAGES } from "../../data/travelSite";

export const metadata = {
  title: "About Us"
};

export default function AboutPage() {
  return <InfoPage {...INFO_PAGES.about} />;
}
