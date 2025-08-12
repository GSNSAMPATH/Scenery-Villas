import { dmSans, lobster } from "@/app/googlefont";
import Button from "../Button";

const villaDescription = `
Scenery Villas is a premium villa rental company offering a curated selection of luxurious and spacious villas ideal for long-term stays. Nestled in some of the most scenic and tranquil locations, our villas are thoughtfully designed to provide guests with a blend of comfort, elegance, and privacy. Each property is fully equipped with modern amenities, high-end furnishings, and personalized services to ensure a truly relaxing and memorable experience. Whether you're seeking a peaceful retreat, a family getaway, or a remote work sanctuary, Scenery Villas is committed to delivering exceptional hospitality, quality accommodations, and a home-like atmosphere that meets the highest standards of luxury living.
`;

export default function Aboutcontent() {
    return (
        // <section className="bg-white text-gray-800 py-24 px-4 sm:px-8 lg:px-24">
        //     <h1 className="text-4xl font-bold mb-4">About</h1>
        //     <p className="text-lg mb-8">
        //         Scenery Villas is a luxurious villa rental company that specializes in providing
        //         luxurious and spacious villas for long-term stays. Our villas are designed to
        //         provide a comfortable and relaxing environment for our guests, with modern amenities
        //         and a focus on quality.
        //     </p>
        // </section>
            <section className="bg-[var(--background)] px-4 py-30 text-[var(--foreground)]">
              <div className="max-w-6xl mx-auto text-center md:mt-30">
                <h2 className={`${lobster.className} text-5xl font-bold mb-3 mt-4`}>
                  <span className="text-black">About </span>
                  <span className="text-green-900">Scenery Villas</span>
                </h2>
                <p
                  className={`${dmSans.className} text-base sm:text-2xl mb-8 max-w-4xl mx-auto mt-10`}
                >
                  {villaDescription}
                </p>
                <div className="mb-10">
                  <Button color="black text-white mb-4" size="3">
                    Contact US
                  </Button>
                </div>
              </div>
            </section>
    );
}