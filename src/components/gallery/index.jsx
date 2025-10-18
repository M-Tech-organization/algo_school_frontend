import { useEffect, useRef } from "react";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";
import gallery7 from "../../assets/images/gallery7.jpg";
import gallery8 from "../../assets/images/gallery8.jpg";
import gallery9 from "../../assets/images/gallery9.jpg";
import gallery10 from "../../assets/images/gallery10.jpg";
import gallery11 from "../../assets/images/gallery11.jpg";
import gallery12 from "../../assets/images/gallery12.jpg";
import gallery13 from "../../assets/images/gallery13.jpg";
import gallery14 from "../../assets/images/gallery14.jpg";
import gallery15 from "../../assets/images/gallery15.jpg";
import gallery16 from "../../assets/images/gallery16.png";
import gallery17 from "../../assets/images/gallery17.png";
import gallery18 from "../../assets/images/gallery18.png";
import gallery19 from "../../assets/images/gallery19.png";
import gallery20 from "../../assets/images/gallery20.png";
import gallery21 from "../../assets/images/gallery21.png";
// import gallery22 from "../../assets/images/gallery22.png";

const images = {
  column1: [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery16,
    gallery17,
  ],
  column2: [
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery18,
    gallery19,
  ],
  column3: [
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
    gallery20,
    gallery21,
  ],
};

const IMAGE_WIDTH = "w-[140px] sm:w-[290px]"; // Mobile: 140px, Desktop: 290px
const IMAGE_HEIGHT = "h-[100px] sm:h-[280px]"; // Mobile: 180px, Desktop: 280px
const CONTAINER_HEIGHT = "h-[560px] sm:h-[880px]"; // Mobile: 3 rasm vertical

const ColumnSlider = ({ images, speed = 1 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let y = 0;
    let requestId;

    const totalHeight = container.scrollHeight / 3; // 3 martaga duplicate qilingan

    const step = () => {
      y += 1; // scroll tezligi, o'zgartirish mumkin
      if (y >= totalHeight) y = 0; // loop
      container.scrollTop = y;
      requestId = requestAnimationFrame(step);
    };

    requestId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(requestId);
  }, []);

  // triple duplication for seamless scroll
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className={`overflow-hidden ${CONTAINER_HEIGHT}`} ref={containerRef}>
      <div className="flex flex-col items-center gap-[10px]">
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className={`${IMAGE_WIDTH} ${IMAGE_HEIGHT} flex-shrink-0`}
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover rounded-[10px]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="bg-gradient-to-b from-[#F0F3FF] to-[#D9ECFF] py-[100px]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-[28px] sm:text-[54px]  font-semibold mb-[80px] text-[#262626]">
          Quyida So‘nggi Yillarda Jamoam Va Shogirdlarim Bilan Birgalikda
          Erishgan Natijalarimizdan Ba’zilari Bilan Tanishing.
        </h3>

        <div className="flex justify-between gap-[20px]">
          <ColumnSlider images={images.column1} speed={1} />
          <ColumnSlider images={images.column2} speed={1.2} />
          <ColumnSlider images={images.column3} speed={1.5} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
