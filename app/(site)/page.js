import DestinationGrid from "../components/travel/DestinationGrid";
import FrameSequenceHero from "../components/travel/FrameSequenceHero";
import StayShowcase from "../components/travel/StayShowcase";

const description =
  "Luxury travel experiences recreated to match the reference site, including the same cinematic opening animation.";

export const metadata = {
  description
};

export default function HomePage() {
  return (
    <main>
      <FrameSequenceHero />
      <StayShowcase />
      <DestinationGrid />
    </main>
  );
}
