import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import top from "../../assets/top.png";
import bottom from "../../assets/bottom.png";

const students = [
  {
    name: "🎓 Muhammadkarim To'xtaboyev",
    desc1: "✅ Microsoft Developers Uzbekistan Community asoschisi va lideri.",
    desc2: "✅ Biznesni Rivojlantirish Bankida CTO lavozimida ishlaydi.",
    video: "https://www.youtube.com/shorts/AYfy_K8Su6g",
  },
  {
    name: "🎓 Jamshid Farxodov",
    desc1: "✅ Huawei ICT musobaqasida 1-o‘rin (BAA).",
    desc2: "✅ Xitoyda 3-o‘rin, “Sahiya” loyihasi asoschilaridan.",
    video: "https://www.youtube.com/shorts/3DiL_DOicAo",
  },
  {
    name: "🎓 Rahmonov Nazarboy",
    desc1: "✅ Qatarda tahsil oladi.",
    desc2:
      "✅ 2023-yilda Singapurda First Global Challenge musobaqasida 3-o‘rin.",
    desc3: "✅ Present Tech Award’da 1-o‘rin.",
    video: "https://www.youtube.com/shorts/Sz4trAKTukM",
  },
];

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const convertToEmbed = (url) => {
    if (!url) return "";

    let videoId = "";

    // Agar shorts bo'lsa, uni watch linkga aylantiramiz
    if (url.includes("shorts")) {
      videoId = url.split("/shorts/")[1].split("?")[0];
    } else if (url.includes("watch?v=")) {
      videoId = url.split("watch?v=")[1].split("&")[0];
    }

    // Oddiy embed
    return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1`;
  };

  return (
    <div className="bg-gradient-to-b from-[#F0F3FF] to-[#D9ECFF]">
      <div className="max-w-[1000px] mx-auto px-4 py-[100px] overflow-visible">
        <h3 className="text-center font-semibold text-[20px] sm:text-[32px] md:text-[48px] text-[#262626]">
          BITIRGAN SHOGIRTLARIM BILAN TANISHING!
        </h3>
        {/* Tugmalar */}
        <div className="flex gap-5 justify-end my-[40px]">
          <button
            aria-label="left-btn"
            ref={prevRef}
            className="bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] rounded-[8px] p-[15px]"
          >
            <ArrowLeft className="text-white text-[24px]" />
          </button>
          <button
            aria-label="right-btn"
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
          autoplay={false}
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
                <div className="p-[1.5px] max-w-[330px] w-full rounded-[12px] cursor-pointer my-10 bg-gradient-to-r from-[#1FB3F5] to-[#6651FF]">
                  <div className="bg-white rounded-[12px] p-[20px] flex flex-col gap-[22px] h-[550px]">
                    <div
                      className="w-full relative"
                      style={{ paddingTop: "100%" }}
                    >
                      <iframe
                        src={convertToEmbed(student.video)}
                        title={student.name}
                        className="absolute top-0 left-0 w-full h-full rounded-[8px]"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>

                    <h3 className="font-semibold text-[#262626] text-[16px]">
                      {student.name}
                    </h3>
                    <p className="text-[14px] text-[#262626] font-medium">
                      {student.desc1}
                    </p>
                    <p className="text-[14px] text-[#262626] font-medium">
                      {student.desc2}
                    </p>
                    {student.desc3 && (
                      <p className="text-[14px] text-[#262626] font-medium">
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
            className="cursor-pointer relative w-full sm:w-auto min-w-[280px] sm:min-w-[675px] h-16 sm:h-24 rounded-xl text-white font-bold text-[14px] sm:text-3xl overflow-hidden transition-all duration-300 hover:text-gray-800 group"
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
