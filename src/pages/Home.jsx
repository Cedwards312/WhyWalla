import HomeHero from "../components/home/HomeHero";
import PainSection from "../components/home/PainSection";
import PlatformSection from "../components/home/PlatformSection";
import ComparisonSection from "../components/home/ComparisonSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <PainSection />
      <PlatformSection />
      <ComparisonSection />
    </>
  );
}