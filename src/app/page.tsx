import GetExperience from "@/components/Home/GetExperience";
import GetOffers from "@/components/Home/GetOffers";
import Hero from "@/components/Home/Hero";
import LiveVilla from "@/components/Home/LiveVila";
import SceneryIntro from "@/components/Home/SceneryIntro";
import SocialMediaSection from "@/components/Home/SocialMediaSection";
import VillaCollection from "@/components/Home/VillaCollection";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Hero />
      <SceneryIntro />
      <WhatsAppButton />
      <VillaCollection />
      <LiveVilla />
      <GetExperience />
      <GetOffers />
      <SocialMediaSection />
      {/* other sections of your home page */}
    </>
  );
}
