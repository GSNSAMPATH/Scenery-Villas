import Hero from "@/components/tara-garden-vila/hero";
import VillaDescription from "@/components/tara-garden-vila/description";
import FeaturesSection from "@/components/tara-garden-vila/featues";
import Gallery from "@/components/tara-garden-vila/gallery-tara-garden";
import MapSection from "@/components/tara-garden-vila/map";



export default function Home() {
  return (
    <>
      <Hero />
      <VillaDescription />
      <FeaturesSection />
      <Gallery />
      <MapSection />
    </>
  );
}