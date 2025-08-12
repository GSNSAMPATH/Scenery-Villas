import Aboutcontent from "@/components/about/about";
import GetExperience from "@/components/Home/GetExperience";
import GetOffers from "@/components/Home/GetOffers";
import LiveVilla from "@/components/Home/LiveVila";
import SocialMediaSection from "@/components/Home/SocialMediaSection";
import VillaCollection from "@/components/Home/VillaCollection";

export default function About() {
    return (
           <>
           <Aboutcontent/>
           <VillaCollection />
           <LiveVilla />
           <GetExperience />
           <GetOffers />
           <SocialMediaSection />
           </>
    );
}