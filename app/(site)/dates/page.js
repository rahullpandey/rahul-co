import InfoPage from "../../components/travel/InfoPage";
import { INFO_PAGES } from "../../data/travelSite";

export const metadata = {
  title: "Availability"
};

export default function DatesPage() {
  return <InfoPage {...INFO_PAGES.dates} />;
}
