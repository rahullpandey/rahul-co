import InfoPage from "../../components/travel/InfoPage";
import { INFO_PAGES } from "../../data/travelSite";

export const metadata = {
  title: "Gallery"
};

export default function GalleryPage() {
  return <InfoPage {...INFO_PAGES.gallery} />;
}
