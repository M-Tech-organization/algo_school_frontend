import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import top from "../../assets/top.png";
import bottom from "../../assets/bottom.png";

const students = [
  {
    name: "🎓 Muhammadkarim To'xtaboyev",
    desc1: "✅ Microsoft Developers Uzbekistan Community asoschisi va lideri.",
    desc2: "✅ Biznesni Rivojlantirish Bankida CTO lavozimida ishlaydi.",
    img: person1,
  },
  {
    name: "🎓 Jamshid Farxodov",
    desc1: "✅ Huawei ICT musobaqasida 1-o‘rin (BAA).",
    desc2: "✅ Xitoyda 3-o‘rin, “Sahiya” loyihasi asoschilaridan.",
    img: person2,
  },
  {
    name: "🎓 Rahmonov Nazarboy",
    desc1: "✅ Qatarda tahsil oladi.",
    desc2:
      "✅ 2023-yilda Singapurda First Global Challenge musobaqasida 3-o‘rin.",
    desc3: "✅ Present Tech Award’da 1-o‘rin.",
    img: person3,
  },
  {
    name: "🎓 Olimjonv Aziz",
    desc1: "✅ Qatarda tahsil oladi.",
    desc2:
      "✅ 2023-yilda Singapurda First Global Challenge musobaqasida 3-o'rin.",
    desc3: "✅ Present Tech Award'da 1-o'rin.",
    img: person3,
  },
];

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-gradient-to-b from-[#F0F3FF] to-[#D9ECFF]">
      <div className="max-w-[1000px] mx-auto px-4 py-[100px] overflow-visible">
        <h3 className="text-center font-semibold text-[20px] sm:text-[32px] md:text-[48px] text-[#262626]">
          BITIRGAN SHOGIRTLARIM BILAN TANISHING!
        </h3>
        {/* Tugmalar */}
        <div className="flex gap-5 justify-end my-[40px]">
          <button
            ref={prevRef}
            className="bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] rounded-[8px] p-[15px]"
          >
            <ArrowLeft className="text-white text-[24px]" />
          </button>
          <button
            ref={nextRef}
            className="bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] rounded-[8px] p-[15px]"
          >
            <ArrowRight className="text-white text-[24px]" />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          slidesPerView={3} // default katta ekran
          slidesPerGroup={1}
          breakpoints={{
            0: {
              // mobil
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              // planshet
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            1024: {
              // desktop
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
          }}
        >
          {students.map((student, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center w-full">
                <div className="p-[2px] max-w-[330px] w-full rounded-[12px] cursor-pointer my-10 bg-gradient-to-r from-[#1FB3F5] to-[#6651FF]">
                  <div className="bg-white rounded-[12px] p-[20px] flex flex-col gap-[22px] h-[650px]">
                    <img
                      src={student.img}
                      alt={student.name}
                      className="w-full h-[315px] object-cover rounded-[8px]"
                      loading="lazy"
                    />
                    <h3 className="font-semibold text-[#262626] text-[22px]">
                      {student.name}
                    </h3>
                    <p className="text-[18px] text-[#262626] font-medium">
                      {student.desc1}
                    </p>
                    <p className="text-[18px] text-[#262626] font-medium">
                      {student.desc2}
                    </p>
                    {student.desc3 && (
                      <p className="text-[18px] text-[#262626] font-medium">
                        {student.desc3}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <h3 className="text-[#1A1A1A] font-medium text-center text-[16px] sm:text-[28px] md:text-[34px] lg:text-[38px]">
          Har bir g‘alaba — bu shunchaki natija emas, kimningdir hayoti
          o‘zgarganini anglatadi.
        </h3>

        {/* Register Button */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <button
            onClick={() => {
              document.getElementById("course").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="cursor-pointer relative w-full sm:w-auto min-w-[280px] sm:min-w-[675px] h-16 sm:h-24 rounded-xl text-white font-bold text-[16px] sm:text-3xl overflow-hidden transition-all duration-300 hover:text-gray-800 group"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] p-0.5">
              <span className="uppercase w-full h-full bg-transparent rounded-[10px] flex items-center justify-center transition-all duration-300 group-hover:bg-white">
                DASTURCHILAR SAFIGA QO’SHILISH
              </span>
            </span>
            {/* Top Image */}
            <img
              className="absolute -top-2 right-2 sm:right-[26px] w-[30px] sm:w-[61px] h-[18px] sm:h-[49px] object-contain"
              src={top}
              alt="Top decorative element"
              loading="lazy"
            />

            {/* Bottom Image */}
            <img
              className="absolute -bottom-2 left-2 sm:left-[16px] w-[28px] sm:w-[61px] h-[18px] sm:h-[49px] object-contain"
              src={bottom}
              alt="Bottom decorative element"
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;

//transition-all duration-300 hover:scale-105 hover:shadow-2xl relative
