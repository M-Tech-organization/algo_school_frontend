import { useRef } from "react";
import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import accosiate1 from "../../assets/accosiate1.png";
import accosiate2 from "../../assets/accosiate2.png";
import accosiate3 from "../../assets/accosiate3.png";
import { Carousel } from "antd";

const Accosiate = () => {
  const images = [
    partner1,
    partner2,
    partner3,
    accosiate1,
    accosiate2,
    accosiate3,
  ];

  // 📌 Carousel uchun ref yaratamiz
  const carouselRef = useRef(null);

  return (
    <div className="bg-gradient-to-r from-[#1FB3F5] to-[#6651FF]">
      <div className="text-center w-full max-w-[1000px] mx-auto px-4 py-[100px] flex flex-col gap-[100px]">
        <h3 className="text-white font-medium text-[25px] sm:text-[30px] md:text-[40px] lg:text-[48px] uppercase">
          Bizning Hamkorlar
        </h3>

        <div className="relative">
          <Carousel
            ref={carouselRef} // 👈 ref biriktirildi
            autoplay
            dots
            infinite
            autoplaySpeed={2500}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
              },
              {
                breakpoint: 600,
                settings: { slidesToShow: 2 },
              },
              {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
              },
            ]}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-full cursor-pointer"
                onClick={() => carouselRef.current?.goTo(index)} // 👈 rasmga bosganda shu slaydga o'tadi
              >
                <img
                  loading="load"
                  src={img}
                  alt={`partner-${index}`}
                  className="mx-auto"
                  style={{
                    width: "280px",
                    height: "200px",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div>
          <p className="uppercase text-white font-medium text-[14px] sm:text-[16px] md:text-[20px] lg:text-[28px]">
            Har bir kod, har bir loyiha, har bir g‘alaba — O‘zbekiston nomini
            yuksaltiradi.”
          </p>
          <p className="uppercase text-right italic text-white mt-7 font-medium text-[11px] sm:text-[15px] md:text-[17px] lg:text-[20px]">
            — Sunatullo Hojiyev, Algo School asoschisi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accosiate;
