import Hero from "@/components/Hero";
import SceneryIntro from "@/components/SceneryIntro";
import VillaCollection from "@/components/VillaCollection";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Hero />
      <SceneryIntro />
      <WhatsAppButton />
      <VillaCollection />
      {/* other sections of your home page */}
    </>
  );
}
