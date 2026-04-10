import HeroSection from "@/components/HeroSection";
import LiveHealthCarouselSection from "@/components/LiveHealthCarouselSection";
import ScienceOfSelfCareSection from "@/components/ScienceOfSelfCareSection";
import SelectYourModelSection from "@/components/SelectYourModelSection";
import TechSpecsSection from "@/components/TechSpecsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import { getConfig } from "./actions";

export default async function Home() {
  const config = await getConfig();

  return (
    <main>
      <HeroSection price={config.price} />
      <LiveHealthCarouselSection />
      <ScienceOfSelfCareSection />
      <SelectYourModelSection price={config.price} checkouts={config.checkouts} />
      <FAQSection />
      <TechSpecsSection />
      <FooterSection />
    </main>
  );
}
