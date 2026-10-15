import HomeHero from "../components/home/HomeHero";
import PartnersSection from "../components/home/PartnersSection";
import PainSection from "../components/home/PainSection";
import PlatformSection from "../components/home/PlatformSection";
import AiSection from "../components/home/AiSection";
import ComparisonSection from "../components/home/ComparisonSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <PartnersSection />
      <PainSection />
      <PlatformSection />
      <AiSection />
      <ComparisonSection />
    </>
  );
}