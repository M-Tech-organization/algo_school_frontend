import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import accosiate1 from "../../assets/accosiate1.png";
import accosiate2 from "../../assets/accosiate2.png";
import accosiate3 from "../../assets/accosiate3.png";

const Accosiate = () => {
  const images = [accosiate1, accosiate2, accosiate3];

  return (
    <div className="bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] py-[80px] sm:py-[100px]">
      <div className="text-center w-full max-w-[1000px] mx-auto px-4 flex flex-col gap-[80px]">
        {/* Title */}
        <h3 className="text-white font-semibold text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] uppercase tracking-wide">
          Bizning Hamkorlar
        </h3>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={40}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full pb-10" // 👈 pagination uchun pastga joy
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img
                  src={img}
                  alt={`partner-${index}`}
                  className="w-[250px] h-[180px] sm:w-[280px] sm:h-[200px] object-contain rounded-lg shadow-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Quote */}
        <div>
          <p className="uppercase text-white font-medium text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] leading-relaxed">
            “Har bir kod, har bir loyiha, har bir g‘alaba — O‘zbekiston nomini
            yuksaltiradi.”
          </p>
          <p className="uppercase text-right italic text-white mt-6 font-medium text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
            — Sunatullo Hojiyev, Algo School asoschisi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accosiate;
