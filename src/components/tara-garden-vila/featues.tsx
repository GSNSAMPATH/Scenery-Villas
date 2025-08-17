// // components/FeaturesSection.tsx
// 'use client';

// import { FaBed, FaTree, FaParking, FaSwimmingPool, FaTv, FaSnowflake, FaUtensils } from 'react-icons/fa';
// import { MdOutlineKitchen, MdBathroom } from 'react-icons/md';
// import { GiChefToque } from 'react-icons/gi';
// import { FiWifi } from 'react-icons/fi';

// const features = [
//   { icon: <FaBed />, text: '4 Bedrooms' },
//   { icon: <FaTree />, text: 'Private garden' },
//   { icon: <FaParking />, text: 'Free parking on premise' },
//   { icon: <FaSwimmingPool />, text: 'Private Pool' },
//   { icon: <MdOutlineKitchen />, text: 'Kitchen' },
//   { icon: <FaTv />, text: 'TV' },
//   { icon: <MdBathroom />, text: 'Washroom' },
//   { icon: <FaSnowflake />, text: 'Air Condition' },
//   { icon: <GiChefToque />, text: 'Private chef' },
//   { icon: <FiWifi />, text: 'Wifi' },
// ];

// export default function FeaturesSection() {
//   return (
//     <section className="bg-gray-200 py-10">
//       <h2 className="text-center text-lg font-bold text-blue-600 mb-8">
//         Features
//       </h2>

//       <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-3 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
//           >
//             <span className="text-2xl text-gray-800">{feature.icon}</span>
//             <span className="text-gray-900 font-medium">{feature.text}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// components/FeaturesSection.tsx
'use client';

import { ReactNode } from 'react';

interface Feature {
  icon: ReactNode;
  text: string;
}

interface FeaturesSectionProps {
  title?: string;
  titleColor?: string;
  bgColor?: string;
  textColor?: string;
  features: Feature[];
}

export default function FeaturesSection({
  title = "Features",
  titleColor = "text-blue-600",
  bgColor = "bg-gray-200",
  textColor = "text-blue-600",
  features,
}: FeaturesSectionProps) {
  return (
    <section className={`${bgColor} py-30 MD:mx-auto`}>
      <h1 
        className={`text-center text-lg font-bold mb-8 md:text-5xl md:mb-20`}
        style={{ color: titleColor }}
        >
        {title}
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center h-[80px] gap-3 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <span className="text-2xl text-gray-800">{feature.icon}</span>
            <span className="text-gray-900 font-medium">{feature.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
