import InfoPage from "../../components/travel/InfoPage";
import { INFO_PAGES } from "../../data/travelSite";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return <InfoPage {...INFO_PAGES.contact} />;
}
