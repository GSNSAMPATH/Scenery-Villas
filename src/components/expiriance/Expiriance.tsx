// import Button from "../Button";

// // components/Experience.tsx
// export default function Experience() {
//     function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
//     window.location.href = "/bookpage";
//     }

//   return (
//     <section className="bg-[var(--background0)] py-30 px-4 text-center">
//       <h2 className="text-5xl font-bold mb-8 mt-20">Experience</h2>
//       <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto mb-8">
//         Experience is Scenery Villas in Bentota, Sri Lanka, offering
//         family-friendly and group accommodations with private spaces and baby
//         pools, perfect for relaxing getaways.
//       </p>

//  <Button color="black text-white" size="3" onClick={handleClick}>Book Now</Button>
//     </section>
//   );
// }

"use client";

import { lobster } from "@/app/googlefont";
import Button from "../Button";

// components/Experience.tsx
export default function Experience() {
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    window.location.href = "/bookpage";
  }

  return (
    <section className="bg-[var(--background0)] py-10 px-4 text-center">
      <h2 className={`${lobster.className} text-4xl font-bold text-green-900 leading-tight mb-4 md:mb-8 md:mt-30 mt-20`}>Experience</h2>
      {/* "text-5xl font-bold mb-8 mt-20" */}
      <p className="text-lg sm:text-xl text-black max-w-7xl mx-auto mb-0">
        Experience is Scenery Villas in Bentota, Sri Lanka, offering
        family-friendly and group accommodations with private spaces and baby
        pools, perfect for relaxing getaways.
      </p>

      {/* <Button color="black" size="3" onClick={handleClick}>
        <span className="text-white">Book Now</span>
      </Button> */}
    </section>
  );
}


