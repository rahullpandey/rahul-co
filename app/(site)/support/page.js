import InfoPage from "../../components/travel/InfoPage";
import { INFO_PAGES } from "../../data/travelSite";

export const metadata = {
  title: "Support"
};

export default function SupportPage() {
  return <InfoPage {...INFO_PAGES.support} />;
}
