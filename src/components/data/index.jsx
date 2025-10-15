import data from "../../assets/data.png";
import check from "../../assets/check.svg";
import top from "../../assets/top.png";
import bottom from "../../assets/bottom.png";

const card = [
  {
    id: 1,
    title: "🥇 1-toifa: Junior (3 oy)",
    description:
      "➡️ Algoritmlash asoslari, C++ ga kirish \n➡️ Codeforces’da 1200+ reyting \n🎯 Maqsad: Kodni tushunish, mantiqni shakllantirish",
  },
  {
    id: 2,
    title: "🥈 2-toifa: Middle (3 oy)",
    description:
      "➡️ Data strukturalar, mashhur algoritmlar \n➡️ Codeforces’da 1400+ reyting \n 🎯 Maqsad: Real loyihalarga tayyorlik",
  },
  {
    id: 3,
    title: "🥉 3-toifa: Senior (3 oy)",
    description:
      "➡️ Murakkab algoritmlar, kontest tezligi \n➡️ Codeforces’da 1700+ reyting \n 🎯 Maqsad: Ish yoki freelance uchun to‘liq tayyorlik",
  },
  {
    id: 4,
    title: "🏆 4-toifa: Master (3 oy)",
    description:
      "➡️ Div.1 musobaqalarga tayyorgarlik \n➡️ Codeforces’da 2000+ reyting \n 🎯 Maqsad: Mentorlik, xalqaro musobaqalar",
  },
];

const Data = () => {
  return (
    <div
      className="w-full min-h-[1523px] relative text-white flex flex-col justify-center px-6 py-[100px]"
      style={{
        backgroundImage: `url(${data})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Title */}
        <h3 className="font-medium uppercase leading-tight sm:leading-snug md:leading-[1.2] lg:leading-[1.3] text-[20px] sm:text-5xl md:text-[54px] lg:text-[54px] mb-[70px] text-center max-w-[1000px] mx-auto">
          <span className="bg-gradient-to-r from-[#1FB3F5] via-[#8FD9FA] to-[#FFFFFF] bg-clip-text text-transparent">
            QANDAY QILIB BIZ BU TAJRIBANI
          </span>{" "}
          SIZGA BERAMIZ?
        </h3>

        {/* Description */}
        <div className="flex flex-col gap-[30px] mb-[80px]">
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            Yuqoridagi loyihalar — tasodif emas.
          </p>
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            Bu — bir tizim, yillar davomida sinovdan o‘tgan o‘quv va amaliy
            natijalar tizimi.
          </p>
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            Men o‘rgangan har bir saboq, yechgan har bir xato, yutgan har bir
            musobaqa — endi siz uchun yo‘l xaritasiga aylangan.
          </p>
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            Men va jamoam shu tajriba asosida siz uchun Algo School dasturini
            yaratdik — shunda siz 5–10 yillik xatolarni takrorlamaysiz, balki 3
            oyda haqiqiy natijaga chiqasiz.
          </p>
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            🎓 ALGO SCHOOL — NATIJA BERADIGAN DASTURLASH AKADEMIYASI
          </p>
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            Algo School — bu O‘zbekistondagi algoritmlash va dasturlashni
            haqiqiy amaliy yo‘l bilan o‘rgatuvchi akademiya.
          </p>
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            🧭 BU TIZIMDA SIZ: <br />
            ✔️ Nazariyada emas — real kod orqali o‘rganasiz.
            <br />
            ✔️ Tinglamaysiz — yechasiz. <br />
            ✔️ Yodlamaysiz — tushunasiz. <br />
            ✔️ Yakunida — portfolio loyihalar yaratib, ish yoki freelance uchun
            tayyor bo‘lasiz.
          </p>
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            Har bir bosqichda sizning natijangiz aniq o‘lchanadi: RoboContest,
            Codeforces reytingi, loyiha ballari, va sertifikatlar orqali.
          </p>
        </div>

        <div className="flex flex-col gap-[60px]">
          <h3 className="font-medium text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-white text-center">
            📈 O‘QUV DARAJALARI
          </h3>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-[40px]">
            {card.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer bg-white text-[#1A1A1A] rounded-lg p-[20px] flex flex-col gap-4 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_30px_rgba(31,179,245,0.4)] w-full md:w-[calc(50%-20px)] max-w-[440px]"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={check}
                    alt="Check"
                    className="md:w-8 w-[24px] h-auto"
                    loading="lazy"
                  />
                  <h3 className="sm:text-[18px] text-[14px] font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[12px] text-[#4C4C4D] sm:text-[16px] font-[400] leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[38px] flex flex-col gap-[30px] justify-center mx-auto w-full max-w-[800px] items-start">
          <p className="text-white text-[14px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-[400] text-left">
            FORMAT <br /> ☑️ 3 oy davomida (haftasiga 3 kun, 2 soat)
            <br /> ☑️ 6-10 kishilik kichik guruhlar
            <br /> ☑️ Gibrid format — Offline + Online + Masofaviy
          </p>
          <p className="text-white text-[14px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-[400] text-left">
            NATIJA NIMA BO'LADI? <br /> ✅ C++ asoslarini mukammal tushunasiz
            <br />✅ Algoritmik fikrlash rivojlanadi <br />✅ RoboContest /
            Codeforces'da Reytingingiz Oshadi <br />✅ Portfolio loyihalar bilan
            CV to'ldiriladi <br />✅ Freelance yoki ish uchun tayyor holatga
            kelasiz <br />✅ Sertifikat + Mentor tavsiyasi olasiz
          </p>
        </div>

        {/* Register Button */}
        <div className="flex justify-center items-center w-full mx-auto mt-[60px] mb-8 sm:mb-12">
          <button
            onClick={() => {
              document.getElementById("course").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="cursor-pointer relative w-full sm:w-auto min-w-[280px] sm:min-w-[690px] h-16 sm:h-24 rounded-xl text-white font-bold text-xl sm:text-3xl overflow-hidden transition-all duration-300 hover:text-gray-800 group"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] p-0.5">
              <span className="uppercase w-full h-full bg-transparent rounded-[10px] flex items-center justify-center transition-all duration-300 group-hover:bg-white">
                Hoziroq Boshlash
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

export default Data;
