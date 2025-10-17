import benefit2 from "../../../assets/benefit2.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Partner from "./partner";

const images = [
  "https://i.pinimg.com/originals/dc/55/a7/dc55a7baa9cbd457221ae6d12d9b1b51.jpg",
  "https://th.bing.com/th/id/R.4a10cc5456ddb0170e461fc60b002a98?rik=E49HgzWnOvklZw&riu=http%3a%2f%2fbeddingnewsnow.com%2fwp-content%2fuploads%2f2024%2f06%2fphotos.png&ehk=Ko4PmfmN7jF%2baqhjYS9ihVYeD80x8yXuvld9vSOUIo8%3d&risl=&pid=ImgRaw&r=0",
  "https://img.freepik.com/premium-photo/best-amazing-wonderful-this-photo-take-this-picture-your-work-ai-generated-top-lovely-photo_1169327-105130.jpg",
  "https://photographyreal.com/wp-content/uploads/2024/03/Post-Processing-for-Editorial-Images.jpg",
  "https://tse4.mm.bing.net/th/id/OIP.spIliNW2QPq2ndCzDXLdnQHaFj?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
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
