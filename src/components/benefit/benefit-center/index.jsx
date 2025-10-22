// import benefit2 from "../../../assets/benefit2.png";
// import center1 from "../../../assets/benefit/center1.png";
// import center2 from "../../../assets/benefit/center2.png";
// import center3 from "../../../assets/benefit/center3.png";
// import center4 from "../../../assets/benefit/center4.png";
// import center5 from "../../../assets/benefit/center5.png";
// import center6 from "../../../assets/benefit/center6.png";
// import center7 from "../../../assets/benefit/center7.png";
// import center8 from "../../../assets/benefit/center8.png";
// import center9 from "../../../assets/benefit/center9.png";
// import center10 from "../../../assets/benefit/center10.png";
// import center11 from "../../../assets/benefit/center11.png";
// import center12 from "../../../assets/benefit/center12.png";
// import center13 from "../../../assets/benefit/center13.png";
// import center14 from "../../../assets/benefit/center14.jpg";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { useEffect, useState } from "react";
// import Partner from "./partner";

// const images = [
//   center1,
//   center2,
//   center3,
//   center4,
//   center5,
//   center6,
//   center7,
//   center8,
//   center9,
//   center10,
//   center11,
//   center12,
//   center13,
//   center14,
// ];

// const BenefitCenter = () => {
//   const [midIndex, setMidIndex] = useState(0);
//   const [leftIndex, setLeftIndex] = useState(images.length - 1);
//   const [rightIndex, setRightIndex] = useState(1);

//   // 📌 Indexlarni hisoblash
//   useEffect(() => {
//     if (midIndex === 0) {
//       setLeftIndex(images.length - 1);
//       setRightIndex(1);
//     } else if (midIndex === images.length - 1) {
//       setLeftIndex(midIndex - 1);
//       setRightIndex(0);
//     } else {
//       setLeftIndex(midIndex - 1);
//       setRightIndex(midIndex + 1);
//     }
//   }, [midIndex]);

//   const nextImage = () => {
//     setMidIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevImage = () => {
//     setMidIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   return (
//     <div
//       className="w-full min-h-[494px] relative flex flex-col justify-center px-3 xs:px-4 sm:px-6 py-[0px] sm:py-[150px]"
//       style={{
//         backgroundImage: `url(${benefit2})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="ImageSlider max-w-[1000px] mx-auto px-4 ">
//         <Partner />

//         {/* Tugmalar */}
//         <div className="buttons mb-[50px] flex justify-end items-center gap-5 w-full -translate-y-[5px]">
//           <button
//             aria-label="leftButton"
//             className="leftButton"
//             onClick={prevImage}
//           >
//             <ArrowLeft size={30} />
//           </button>
//           <button
//             aria-label="rightButton"
//             className="rightButton"
//             onClick={nextImage}
//           >
//             <ArrowRight size={30} />
//           </button>
//         </div>

//         {/* Rasmlar ko‘rinishi */}
//         <div className="ImageSliderContainer mb-[20px] flex justify-center items-center gap-4">
//           {/* Chapdagi rasm */}
//           <img
//             src={images[leftIndex]}
//             alt="Previous"
//             className="leftImage w-[200px] h-[120px] opacity-60 hover:opacity-80 cursor-pointer transition-transform duration-300 hover:scale-105"
//             onClick={prevImage}
//             loading="load"
//           />
//           {/* O‘rtadagi rasm */}
//           <img
//             loading="load"
//             src={images[midIndex]}
//             alt="Current"
//             className="middleImage w-[600px] h-[340px] cursor-pointer transition-transform duration-300 hover:scale-105"
//           />
//           {/* O‘ngdagi rasm */}
//           <img
//             src={images[rightIndex]}
//             alt="Next"
//             className="rightImage w-[200px] h-[120px] opacity-60 hover:opacity-80 cursor-pointer transition-transform duration-300 hover:scale-105"
//             onClick={nextImage}
//             loading="load"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BenefitCenter;

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Partner from "./partner";
import benefit2 from "../../../assets/benefit2.png";
import center1 from "../../../assets/benefit/center1.png";
import center2 from "../../../assets/benefit/center2.png";
import center3 from "../../../assets/benefit/center3.png";
import center4 from "../../../assets/benefit/center4.png";
import center5 from "../../../assets/benefit/center5.png";
import center6 from "../../../assets/benefit/center6.png";
import center7 from "../../../assets/benefit/center7.png";
import center8 from "../../../assets/benefit/center8.png";
import center9 from "../../../assets/benefit/center9.png";
import center10 from "../../../assets/benefit/center10.png";
import center11 from "../../../assets/benefit/center11.png";
import center12 from "../../../assets/benefit/center12.png";
import center13 from "../../../assets/benefit/center13.png";
import center14 from "../../../assets/benefit/center14.jpg";

const images = [
  center1,
  center2,
  center3,
  center4,
  center5,
  center6,
  center7,
  center8,
  center9,
  center10,
  center11,
  center12,
  center13,
  center14,
];

const BenefitCenter = () => {
  const [midIndex, setMidIndex] = useState(0);
  const [leftIndex, setLeftIndex] = useState(images.length - 1);
  const [rightIndex, setRightIndex] = useState(1);

  useEffect(() => {
    if (midIndex === 0) {
      setLeftIndex(images.length - 1);
      setRightIndex(1);
    } else if (midIndex === images.length - 1) {
      setLeftIndex(midIndex - 1);
      setRightIndex(0);
    } else {
      setLeftIndex(midIndex - 1);
      setRightIndex(midIndex + 1);
    }
  }, [midIndex]);

  const nextImage = () => {
    setMidIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setMidIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handlePartnerClick = (index) => {
    setMidIndex(index);
  };

  return (
    <div
      className="w-full min-h-[500px] flex flex-col justify-center items-center px-3 sm:px-6 py-12 sm:py-24 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${benefit2})` }}
    >
      {/* Partner section */}
      <Partner onImageClick={handlePartnerClick} />

      {/* Tugmalar */}
      <div className="flex justify-end w-full max-w-[1000px] mx-auto gap-4 mt-8 sm:mt-12">
        <button
          aria-label="leftButton"
          onClick={prevImage}
          className="p-3 sm:p-4 rounded-lg bg-gradient-to-r from-[#6651ff] to-[#1fb3f5] text-white hover:scale-105 transition-transform duration-300 shadow-md"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          aria-label="rightButton"
          onClick={nextImage}
          className="p-3 sm:p-4 rounded-lg bg-gradient-to-r from-[#6651ff] to-[#1fb3f5] text-white hover:scale-105 transition-transform duration-300 shadow-md"
        >
          <ArrowRight size={24} />
        </button>
      </div>

      {/* Rasmlar slideri */}
      <div className="flex justify-center items-center gap-4 sm:gap-6 mt-10 w-full max-w-[1000px]">
        {/* Chapdagi kichik rasm */}
        <img
          src={images[leftIndex]}
          alt="Previous"
          onClick={prevImage}
          loading="lazy"
          className="hidden sm:block w-[180px] h-[260px] object-cover rounded-lg opacity-60 hover:opacity-80 cursor-pointer transition-transform duration-300 hover:scale-105"
        />

        {/* O‘rtadagi katta rasm */}
        <img
          src={images[midIndex]}
          alt="Current"
          loading="eager"
          className="w-[90vw] max-w-[400px] sm:w-[420px] sm:h-[350px] md:w-[480px] md:h-[380px] rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
        />

        {/* O‘ngdagi kichik rasm */}
        <img
          src={images[rightIndex]}
          alt="Next"
          onClick={nextImage}
          loading="lazy"
          className="hidden sm:block w-[180px] h-[260px] object-cover rounded-lg opacity-60 hover:opacity-80 cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setMidIndex(index)}
            className={`w-2.5 h-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
              index === midIndex
                ? "bg-gradient-to-r from-[#6651ff] to-[#1fb3f5] border-none scale-110"
                : "border-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitCenter;
