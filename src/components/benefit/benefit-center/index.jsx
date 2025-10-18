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
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Partner from "./partner";

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

  // 📌 Indexlarni hisoblash
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

  return (
    <div
      className="w-full min-h-[994px] xs:min-h-[420px] sm:min-h-[465px] relative flex flex-col justify-center px-3 xs:px-4 sm:px-6 py-[40px] sm:py-[150px]"
      style={{
        backgroundImage: `url(${benefit2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="ImageSlider max-w-[1000px] mx-auto px-4 ">
        <Partner />

        {/* Tugmalar */}
        <div className="buttons mb-[50px] flex justify-end items-center gap-5 w-full -translate-y-[5px]">
          <button
            aria-label="leftButton"
            className="leftButton"
            onClick={prevImage}
          >
            <ArrowLeft size={30} />
          </button>
          <button
            aria-label="rightButton"
            className="rightButton"
            onClick={nextImage}
          >
            <ArrowRight size={30} />
          </button>
        </div>

        {/* Rasmlar ko‘rinishi */}
        <div className="ImageSliderContainer mb-[20px] flex justify-center items-center gap-4">
          {/* Chapdagi rasm */}
          <img
            src={images[leftIndex]}
            alt="Previous"
            className="leftImage w-[200px] h-[120px] object-contain opacity-60 hover:opacity-80 cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={prevImage}
            loading="load"
          />
          {/* O‘rtadagi rasm */}
          <img
            loading="load"
            src={images[midIndex]}
            alt="Current"
            className="middleImage w-[600px] h-[340px] object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
          />
          {/* O‘ngdagi rasm */}
          <img
            src={images[rightIndex]}
            alt="Next"
            className="rightImage w-[200px] h-[120px] object-contain opacity-60 hover:opacity-80 cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={nextImage}
            loading="load"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitCenter;
