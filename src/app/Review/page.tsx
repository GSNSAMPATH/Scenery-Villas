import ExperienceCollection from "@/components/expiriance/ExperienceCollection";
import Reviews from "@/components/Review/Review";
import Experience from "@/components/expiriance/Expiriance";
import GuestImages from "@/components/gestimage/GestImage";


export default function ReviewsPage() {
  return (
    <>
      <Reviews/>
      <GuestImages/>
      <Experience />
      <ExperienceCollection />
    </>
  );
}
