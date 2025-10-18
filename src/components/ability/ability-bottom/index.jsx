import top from "../../../assets/top.png";
import bottom from "../../../assets/bottom.png";

const AbilityBottom = () => {
  return (
    <div>
      {/* Title */}
      <h3 className="uppercase text-center leading-tight text-[#262626] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[38px] font-semibold mb-4 sm:mb-6">
        <span className="bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] bg-clip-text text-transparent">
          NEGA BU QADAR ARZON?
        </span>
      </h3>

      {/* Reasons Section */}
      <div className="max-w-[900px] mx-auto my-6 sm:my-[60px]">
        <p className="text-sm sm:text-[28px] font-[400] text-[#262626] mb-4 text-center sm:text-left">
          Sababi Oddiy.
        </p>

        <p className="text-sm sm:text-[28px] font-bold text-[#262626] mb-4 text-center sm:text-left">
          Bizning Maqsad —O'zbekistonda 10 000 Ta Haqiqiy Dasturchi Tayyorlash.
        </p>

        <p className="text-sm sm:text-[28px] font-[400] text-[#262626] mb-4 text-center sm:text-left">
          Shuning Uchun Bu Dastur Sof Tijorat Loyihasi Emas, Balki Milliy
          Missiya Sifatida Yo'lga Qo'yilgan.
        </p>

        <p className="text-sm sm:text-[28px] font-[400] text-[#262626] mb-6 sm:mb-8 text-center sm:text-left">
          Men Uchun Eng Katta Mukofot — Sizning Natijangiz.
        </p>
      </div>

      {/* 90 Days Program Title */}
      <div className="text-center">
        <h3 className="text-base sm:text-lg md:text-[28px] font-bold flex items-center justify-center gap-2">
          ⏱{" "}
          <span className="bg-gradient-to-b from-[#084FC7] to-[#7F56D9] bg-clip-text text-transparent">
            90 KUNLIK NATIJA TIZIMI:
          </span>
        </h3>
      </div>

      {/* 4 Levels Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto my-6 sm:my-[40px]">
        {[
          {
            level: 1,
            title: "Junior",
            text: "Algoritmlash asoslari, C++ boshlanq'ich, Codeforces'da 1200+ reyting",
          },
          {
            level: 2,
            title: "Middle",
            text: "Data strukturalar, murakkab masalalar, portfolio loyihalari",
          },
          {
            level: 3,
            title: "Senior",
            text: "Ish yoki freelance uchun tayyorlik",
          },
          {
            level: 4,
            title: "Master",
            text: "Div.1 kontestlar va xalqaro loyihatlar",
          },
        ].map(({ level, title, text }) => (
          <div
            key={level}
            className="bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] p-[1.5px] rounded-[15px] transition-transform hover:scale-105 h-full w-full"
          >
            <div className="bg-white rounded-[15px] p-3 sm:p-4 text-center flex flex-col justify-start h-full min-h-[230px]">
              <div className="bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] w-10 h-10 sm:w-12 sm:h-12 rounded-[15px] flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto mb-2 sm:mb-3">
                {level}
              </div>
              <h3 className="font-semibold text-sm sm:text-[19px] text-[#1A1A1A] mb-[15px]">
                {title}
              </h3>
              <p className="text-xs sm:text-[16px] font-medium text-[#4C4C4D] leading-snug flex-grow">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Trophy Statement */}
      <div className="text-center mb-6 sm:mb-[60px]">
        <p className="text-sm sm:text-base md:text-[28px] font-bold text-[#262626] flex items-center justify-center gap-2 flex-wrap">
          ⏳ 90 kunda sizni boshlovchidan — amaliy dasturchiga aylantiramiz.
        </p>
      </div>

      {/* Register Button */}
      <div className="flex justify-center mb-6 sm:mb-[40px]">
        <button
          onClick={() => {
            document.getElementById("course")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="cursor-pointer relative w-full sm:w-auto min-w-[280px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[687px] h-14 sm:h-20 lg:h-24 rounded-xl text-white font-bold text-base sm:text-xl lg:text-3xl overflow-hidden transition-all duration-300 hover:text-gray-800 group"
        >
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] p-0.5">
            <span className="uppercase w-full h-full bg-transparent rounded-[10px] flex items-center justify-center transition-all duration-300 group-hover:bg-white px-4">
              HOZIROQ RO'YXATDAN O'TISH 🚀
            </span>
          </span>
          {/* Top Image */}
          <img
            className="absolute -top-1 sm:-top-2 right-2 sm:right-4 lg:right-[26px] w-[25px] sm:w-[40px] lg:w-[61px] h-[15px] sm:h-[30px] lg:h-[49px] object-contain"
            src={top}
            alt="Top decorative element"
            loading="lazy"
          />

          {/* Bottom Image */}
          <img
            className="absolute -bottom-1 sm:-bottom-2 left-2 sm:left-3 lg:left-[16px] w-[23px] sm:w-[40px] lg:w-[61px] h-[15px] sm:h-[30px] lg:h-[49px] object-contain"
            src={bottom}
            alt="Bottom decorative element"
            loading="lazy"
          />
        </button>
      </div>

      {/* Bottom Text */}
      <div className="text-center max-w-[800px] mx-auto">
        <p className="text-sm sm:text-[28px] font-semibold text-[#262626]">
          Joylar Soni Cheklangan. Bugun Boshlang — 90 Kundan So'ng Natijani
          O'zingizda Ko'rasiz.
        </p>
      </div>
    </div>
  );
};

export default AbilityBottom;
