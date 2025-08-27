"use client";

import { useState } from "react";
import Image from "next/image";
import { lobster } from "../googlefont";

const villaImages: { [key: string]: string[] } = {
  "Villa Mandalay": [
    "/Vilacollection/0000001848.jpg",
    "/Vilacollection/DSC02837HDR-2.jpg",
    "/Vilacollection/DSC07235-Edit.jpg",
    "/Vilacollection/0000001848.jpg",
    "/Vilacollection/DSC02837HDR-2.jpg",
    "/Vilacollection/DSC07235-Edit.jpg",
  ],
  "Tara Garden": [
      "https://lh3.googleusercontent.com/d/16DKoTibgCmyBlcbkDqeoRwa-lJrJmg8s",
      "https://lh3.googleusercontent.com/d/1dTS4mFWZutJwuBbnXgyIJgkvx7ynzbmM",
      "https://lh3.googleusercontent.com/d/1a_2TnSYdajXvbWhceZptzS0qGpPZ-vvg",
      "https://lh3.googleusercontent.com/d/1pokMA3ZCzGYGU4Z8Xtm7p1De9N-j7yXM",
      "https://lh3.googleusercontent.com/d/10ALOZAYdtGJyN5ghFPXMDmw5hMd7y9FA",
      "https://lh3.googleusercontent.com/d/1VzmBlOxKv-tdPzkEOuHt3T0vxgdxIU_d",
      "https://lh3.googleusercontent.com/d/1vHNHa2wwA3sOCSeqaAempf5JQ8kMQV0N",
      "https://lh3.googleusercontent.com/d/1Zqs1O6DsFbdEqFZA6M919gvp0n90vXbA",
      "https://lh3.googleusercontent.com/d/1XGKvT7QJdRYp0Em2iUyWgkzq860LZ9L9",
      "https://lh3.googleusercontent.com/d/1I7OF6M1OlK9aFkClxVbG48qTREVny1dk",
      "https://lh3.googleusercontent.com/d/1sXz1ADaYKgICdmt5exaYixTjMXTXTF1X",
      "https://lh3.googleusercontent.com/d/1rvtUj7nCdZ4_VyH3drsbGDO5UEwHXYFo",
      "https://lh3.googleusercontent.com/d/1IB6IOO5ntlHCrZaM6a3UlNJyUoHNMXRC",
      "https://lh3.googleusercontent.com/d/1pjw-Jx6utKSuuc00Efq_XphUepTh4qfK",
      "https://lh3.googleusercontent.com/d/1J6aTIEnct7oRiiMcxhFlKRwvmzTAQSOP",
      "https://lh3.googleusercontent.com/d/1nflsRci7sE_4-jJr0ngpk6uXVRNur-_1",
      "https://lh3.googleusercontent.com/d/1sMs_ScSmkakalp8iFNpEFLNX6yns5EM9",
      "https://lh3.googleusercontent.com/d/19WycUKUcOwDsP5qJX-3q7Kub2bgYwmVO",
      "https://lh3.googleusercontent.com/d/1nfqJ4hYXJU6TQd3yzKPRadvWbfJBCz_0",
      "https://lh3.googleusercontent.com/d/1xOfkvxWzGjW8FlnWsdA-x7kwVTueZaUB",
      "https://lh3.googleusercontent.com/d/1dIK1DhBLysNquT_jhITDvtvdEjAoEZ_i",
      "https://lh3.googleusercontent.com/d/1uHvZaODcKHWbcmozpHj1XNdBooCeDCp_",
      "https://lh3.googleusercontent.com/d/14iNmda_yhHtOHiedOyd_qd6akB4jhcH2",
      "https://lh3.googleusercontent.com/d/1BdT3SSg3LV4hhx-Da7K69InQoLTFfeSU",
      "https://lh3.googleusercontent.com/d/1rGcRYh_iPK3cdwT5Vuk5p09WytAkyBMs",
      "https://lh3.googleusercontent.com/d/1LjlM9s8mDob5CEAoBzUrVvwmvksrtJ9P",
      "https://lh3.googleusercontent.com/d/1cojznQUBEOYkokmwiu_SzavdunNgQYBZ",
      "https://lh3.googleusercontent.com/d/1M-nh1MLsFrZ30f0NYzX4xM-VVMRds50J",
      "https://lh3.googleusercontent.com/d/1zXNo5OjkFL7zDZGmbjLZUuPMAtYM68fU",
      "https://lh3.googleusercontent.com/d/1Q14ueF-72XFgV905UDLpFkJ4oJw_UvB1",
      "https://lh3.googleusercontent.com/d/1ikUV6BrV04nIfA5jlFYNC1eb6jddrupf",
      "https://lh3.googleusercontent.com/d/16nnZWiLXx0LKpmyRIGDbUKjmIm92YbtL",
      "https://lh3.googleusercontent.com/d/15_EB3PQ93Ri0ltgxdWBvYD1djj5FEQEB",
      "https://lh3.googleusercontent.com/d/1Mghtvv2cn5RkS7cS5KUEMpsQBS1Q9fnD",
  ],
  "Treetop Resort": [
      "https://lh3.googleusercontent.com/d/1kXRX7OeZw68A3ygYe52kovHLKMMalaSm",
      "https://lh3.googleusercontent.com/d/1JOpbiOUmrE5XEYXzZEk2BODGV4xWRoWR",
      "https://lh3.googleusercontent.com/d/1GyMQyCofaIUap275uGJygprROfsU3z6g",
      "https://lh3.googleusercontent.com/d/16k1Bv6VcUSIE-CKeu5I7rds0FRGUTORC",
      "https://lh3.googleusercontent.com/d/1IjX1bnVDb665OEOC2l6BU-4--v83SaCx",
      "https://lh3.googleusercontent.com/d/1h4hR82_yb-bk3ffRzZGnh4gT2qeiGnaT",
      "https://lh3.googleusercontent.com/d/16625r-u2VSs9YgK896WGIqkgjvqGtN3j",
      "https://lh3.googleusercontent.com/d/1Uoqxjr8OhWPVnSu1Iz9JsPVbkCbD3ILi",
      "https://lh3.googleusercontent.com/d/16x13MXKjv3A_qe646x-xjZNLpebnnmUY",
      "https://lh3.googleusercontent.com/d/1isl3IF8hdXMQnG9E2ZEzJywWUUeY6HsG",
      "https://lh3.googleusercontent.com/d/1tt851PGrbH-C6frVgi6Amyad6mD2beO7",
      "https://lh3.googleusercontent.com/d/15nPr3qUl7uNa6Y13uqStonmrOhc4oc2m",
      "https://lh3.googleusercontent.com/d/16kvjHaNRWStqDVN8mTsRg5kORDV3yRsz",
      "https://lh3.googleusercontent.com/d/1RNrSe3JvxIfxNz5zeVgxsXGxeevTdNS4",
      "https://lh3.googleusercontent.com/d/13DH_cXcXplga4dKctYvf8wUP4ezkhJRY",
      "https://lh3.googleusercontent.com/d/1hh5yGcQA9qouhPcuaW7-w2WinnT7ryZd",
      "https://lh3.googleusercontent.com/d/13OoOhGNwWJyuWG37BZhm6wdJbdD4lPTV",
      "https://lh3.googleusercontent.com/d/1G-8ugDFmYKNk0-KO2pP6DaqIqPdhQZ4f",
      "https://lh3.googleusercontent.com/d/1Yo1IZ0_Srr2Hi6XSUo4jGwAm5B4F7I6J",
      "https://lh3.googleusercontent.com/d/1Kjsd-KhqR3qMUMNsyh589IdjBbOPSD3V",
      "https://lh3.googleusercontent.com/d/1xicRsXGc0ZZOprnYQKgu3pcHrmq_-PGS",
      "https://lh3.googleusercontent.com/d/10RUt-5nLJ6uqMMo4c91M4qj3fYk2OReg",
      "https://lh3.googleusercontent.com/d/15YyyeSw00nqY_R9i0R2VYGNNgxZwp3rD",
      "https://lh3.googleusercontent.com/d/18ZmqUGqGcTPL6Bj0GBiI-N4iRSx_BQCs",
      "https://lh3.googleusercontent.com/d/1OYJTai1Ufg1mIizDH4z-fuDaq_b2kfdF",
      "https://lh3.googleusercontent.com/d/1C3JPp5N3bCkxBCQBBBo7rzWFPRvHEYNq",
      "https://lh3.googleusercontent.com/d/11HbTTnYtAh1zzGBTZFmOGWULtZqy2pFb",
      "https://lh3.googleusercontent.com/d/1QVo-ie2nc613ruZ5P7fGG95ciWm5o4md",
      "https://lh3.googleusercontent.com/d/1wFhL391bUepWNtbEHprbZJtlFgTnvqeI",
      "https://lh3.googleusercontent.com/d/1PfOgAgzQzg1avF2fXLBotn2oHxOGFLgy",
      "https://lh3.googleusercontent.com/d/1W_hKlSiz8kDA_xyxaRPrWPau-koqBxPT",
      "https://lh3.googleusercontent.com/d/1GVChdsEq931U7xTnBAXQMcLzF8bwCq_Z",
      "https://lh3.googleusercontent.com/d/1nQ1ywS5Qj_RSv0OFjVhwSWiB6SpgoqNN",
      "https://lh3.googleusercontent.com/d/1y0SCraw1WiVDSwmwgHDNzHHkhx8N9JQ4",
      "https://lh3.googleusercontent.com/d/1m6is-9hsujQNX8_ycenAegfJVZVl8kzm",
  ],
  "Villa Desire": [
    "/Vilacollection/DSC07314.jpg",
    "/Vilacollection/DSC07442.jpg",
    "/Vilacollection/Untitled design.jpg",
    "/Vilacollection/DSC07314.jpg",
    "/Vilacollection/DSC07442.jpg",
    "/Vilacollection/Untitled design.jpg",
  ],
};

const allImages = Object.values(villaImages).flat();

export default function GalleryPage() {
  const [selectedVilla, setSelectedVilla] = useState("All");

const displayedImages =
  selectedVilla === "All" ? allImages : villaImages[selectedVilla as keyof typeof villaImages];

  return (
    <main className="bg-gray-100 py-50 px-6">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className={`${lobster.className} text-4xl sm:text-5xl font-bold text-green-900 leading-tight mb-8`}>
          
          {/* "text-4xl sm:text-5xl font-bold text-green-900" */}
          Our Gallery
        </h1>
        <p className="text-lg max-w-xl mx-auto text-gray-600 mt-4">
          Explore breathtaking views of our villas, gardens, and relaxing spaces.
        </p>
      </div>

      {/* Villa Selector */}
      <div className="flex justify-center gap-4 flex-wrap mb-10 md:mb-16">
        {["All", "Villa Mandalay", "Tara Garden", "Treetop Resort", "Villa Desire"].map((villa) => (
          <button
            key={villa}
            onClick={() => setSelectedVilla(villa)}
            className={`px-4 py-2 rounded-lg border transition-all ${
              selectedVilla === villa
                ? "bg-green-900 text-white border-green-900"
                : "bg-white text-green-900 border-green-900 hover:bg-green-100"
            }`}
          >
            {villa === "All" ? "All" : `${villa}`}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 md:px-12">
        {displayedImages.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg group"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
