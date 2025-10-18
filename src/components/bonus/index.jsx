// import bonus from "../../assets/bonus.png";
// import bonus1 from "../../assets/bonus1.png";
// import bonus2 from "../../assets/bonus2.png";
// import bonus3 from "../../assets/bonus3.png";
// import bonus4 from "../../assets/bonus4.png";
// import bonus5 from "../../assets/bonus5.png";
// import bonus6 from "../../assets/bonus6.png";
// import bonus7 from "../../assets/bonus7.png";
// import top from "../../assets/top.png";
// import bottom from "../../assets/bottom.png";

// const cards = [
//   {
//     id: 1,
//     image: bonus1,
//     title: "🎯 Bonus \nShaxsiy Mentor Chat (Private Group)",
//     description:
//       "Xatolaringizni soatlab o'ylab o'tirmaysiz — mentor siz bilan birgalikda muammoni yechadi.Siz yolg'iz emassiz. ",
//   },
//   {
//     id: 2,
//     image: bonus2,
//     title: "🧭 Bonus  \n“Algo Map 90-Day Planner”",
//     description:
//       "90 kunlik rivojlanish yo'l xaritasi: har hafta nimani o'rganish, qanday natija kutish, va qayerga yetib borishni aniq ko'rsatadi.Motivatsiya emas — tizimli reja.",
//   },
//   {
//     id: 3,
//     image: bonus3,
//     title: "💼 Bonus",
//     description:
//       "Ish topish va portfolio tuzish uchun tayyor shablonlar, cover letter, CV va freelance loyihalar ro'yxati. \n\nBozorda o'zingizni “junior” emas, mutaxassis sifatida ko'rsatasiz.",
//   },
//   {
//     id: 4,
//     image: bonus4,
//     title: "🎫 Bonus \nFree Merch Pack (Limited Edition)",
//     description:
//       "Algo School brendli hoodie, kepka, va nishonlar.Bir qarashda sizni jamoamiz a'zosi sifatida tan olishadi.",
//   },
// ];

// const Bonus = () => {
//   return (
//     <div
//       className="w-full min-h-[874px] relative text-white flex flex-col justify-center px-6 py-[100px]"
//       style={{
//         backgroundImage: `url(${bonus})`,
//         backgroundSize: "cover", // ekranni to'liq egallaydi
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-[1000px] mx-auto">
//         {/* Sarlavha */}
//         <h3 className="font-medium leading-tight sm:leading-snug md:leading-[1.2] lg:leading-[1.3] uppercase text-[20px] sm:text-[25px] md:text-[54px] lg:text-[54px] mb-16 text-center max-w-[1000px] mx-auto">
//           🎁 ENDI ESA BEPUL BONUSLAR BILAN TANISHING
//         </h3>

//         <div className="flex flex-col gap-[16px] justify-start items-start text-left mt-[20px]">
//           <p className="capitalize font-[400] text-[14px] sm:text-[22px] md:text-[28px] leading-relaxed flex gap-2 items-center">
//             Bu bonuslar — sizning natijangizni 2 barobar tezlashtiradi. <br />
//             <br /> Faqat birinchi 30 nafar o'quvchi uchun quyidagi eksklyuziv
//             bonuslar ochiladi 👇
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-[36px] mt-[40px] items-stretch">
//             {cards.map((card, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col bg-[#001A49] text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 h-full"
//               >
//                 <img
//                   src={card.image}
//                   alt="Image"
//                   className="w-full h-[338px] object-cover"
//                 />
//                 <div className="px-4 py-6  text-center whitespace-pre-line flex flex-col justify-center flex-1 capitalize">
//                   <h3 className="text-[18px] md:text-[20px] lg:text-[25px] xl:text-[30px] font-medium mb-[20px]">
//                     {card.title}
//                   </h3>
//                   <p className="text-[16px] sm:text-[19px] md:text-[24px] font-medium opacity-90">
//                     {card.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="text-center mt-[80px] flex flex-col justify-center">
//           <h3 className="text-center font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] capitalize mb-[40px]">
//             🧠 Qo‘shimcha Super Bonuslar
//           </h3>

//           <div className="flex flex-col gap-6">
//             {[
//               {
//                 img: bonus5,
//                 title: "🎁 Robocontest Premium Access (3 ta kursga kirish)",
//                 text: "Qimmatli Premium kurslarga to‘liq kirish — bepul.",
//               },
//               {
//                 img: bonus6,
//                 title: "🎁 Umrbod 20% chegirma",
//                 text: "Robocontest va RoboticsLab loyihalarida barcha kurs va darsliklarga doimiy chegirma.",
//               },
//               {
//                 img: bonus7,
//                 title: "🎁 Mentorlar bilan maxsus uchrashuvlar",
//                 text: "Siz faqat dars emas, real tajriba orttirasiz — xalqaro g‘olib mentorlar bilan jonli muloqotda.",
//               },
//             ].map((bonus, i) => (
//               <div
//                 key={i}
//                 className="w-full flex flex-col md:flex-row items-center bg-[#4C0070]/20 text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
//               >
//                 <img
//                   src={bonus.img}
//                   alt="Image"
//                   className="w-full max-w-[180px] h-auto sm:max-w-[220px] md:max-w-[280px] lg:max-w-[340px] rounded-2xl object-cover"
//                 />
//                 <div className="flex flex-col justify-center p-5 text-center md:text-left">
//                   <h3 className="text-[11px] sm:text-[20px] md:text-[30px] font-medium mb-[16px]">
//                     {bonus.title}
//                   </h3>
//                   <p className="text-[10px] sm:text-[18px] md:text-[24px] font-medium">
//                     {bonus.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-[60px] flex flex-col gap-[20px] text-left">
//           <h3 className="font-bold text-[14px] sm:text-[22px] md:text-[28px] capitalize">
//             Umumiy Bonus Qiymati: ≈ 1 800 000 So‘m — BEPUL!
//           </h3>

//           <p className="font-normal text-[14px] sm:text-[22px] md:text-[28px] capitalize">
//             💎 Sizning investitsiyangiz — faqat 997 000 so‘m / oyiga
//           </p>

//           <p className="font-normal text-[14px] sm:text-[22px] md:text-[28px] capitalize">
//             Ammo siz oladigan qiymat — 6 500 000 so‘m + 1 800 000 so‘m bonus = 8
//             300 000 so‘m.
//           </p>

//           <h3 className="font-bold text-[14px] sm:text-[22px] md:text-[28px] capitalize">
//             🕒 Shoshiling — bonuslar faqat birinchi 30 ta o‘quvchi uchun amal
//             qiladi!
//           </h3>

//           <p className="font-normal text-[14px] sm:text-[22px] md:text-[28px] capitalize">
//             Bugun boshlasangiz — 3 oy ichida o‘zingizga yangi hayot qurishingiz
//             mumkin.
//           </p>
//         </div>

//         <div className="mt-[80px]">
//           {/* Register Button */}
//           <div className="flex justify-center mb-8 sm:mb-12">
//             <button
//               onClick={() => {
//                 document.getElementById("course").scrollIntoView({
//                   behavior: "smooth",
//                 });
//               }}
//               className="cursor-pointer relative w-full sm:w-auto min-w-[280px] sm:min-w-[687px] h-16 sm:h-24 rounded-xl text-white font-bold text-[14px] sm:text-3xl overflow-hidden transition-all duration-300 hover:text-gray-800 group"
//             >
//               <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] p-0.5">
//                 <span className="uppercase w-full h-full bg-transparent rounded-[10px] flex items-center justify-center transition-all duration-300 group-hover:bg-white">
//                   bonuslarni qo’lga kiritish
//                 </span>
//               </span>
//               {/* Top Image */}
//               <img
//                 className="absolute -top-2 right-2 sm:right-[26px] w-[30px] sm:w-[61px] h-[18px] sm:h-[49px] object-contain"
//                 src={top}
//                 alt="Top decorative element"
//                 loading="lazy"
//               />

//               {/* Bottom Image */}
//               <img
//                 className="absolute -bottom-2 left-2 sm:left-[16px] w-[28px] sm:w-[61px] h-[18px] sm:h-[49px] object-contain"
//                 src={bottom}
//                 alt="Bottom decorative element"
//                 loading="lazy"
//               />
//             </button>
//           </div>

//           <p className="font-normal text-[14px] sm:text-[22px] md:text-[28px] capitalize mt-[20px] text-center">
//             Joylar soni cheklangan. Bonuslar tugagach, eshik yopiladi.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bonus;

import bonus from "../../assets/bonus.png";
import bonus1 from "../../assets/bonus1.png";
import bonus2 from "../../assets/bonus2.png";
import bonus3 from "../../assets/bonus3.png";
import bonus4 from "../../assets/bonus4.png";
import bonus5 from "../../assets/bonus5.png";
import bonus6 from "../../assets/bonus6.png";
import bonus7 from "../../assets/bonus7.png";
import top from "../../assets/top.png";
import bottom from "../../assets/bottom.png";

const cards = [
  {
    id: 1,
    image: bonus1,
    title: "🎯 Bonus \nShaxsiy Mentor Chat (Private Group)",
    description:
      "Xatolaringizni soatlab o'ylab o'tirmaysiz — mentor siz bilan birgalikda muammoni yechadi.Siz yolg'iz emassiz. ",
  },
  {
    id: 2,
    image: bonus2,
    title: "🧭 Bonus  \n“Algo Map 90-Day Planner”",
    description:
      "90 kunlik rivojlanish yo'l xaritasi: har hafta nimani o'rganish, qanday natija kutish, va qayerga yetib borishni aniq ko'rsatadi.Motivatsiya emas — tizimli reja.",
  },
  {
    id: 3,
    image: bonus3,
    title: "💼 Bonus",
    description:
      "Ish topish va portfolio tuzish uchun tayyor shablonlar, cover letter, CV va freelance loyihalar ro'yxati. \n\nBozorda o'zingizni “junior” emas, mutaxassis sifatida ko'rsatasiz.",
  },
  {
    id: 4,
    image: bonus4,
    title: "🎫 Bonus \nFree Merch Pack (Limited Edition)",
    description:
      "Algo School brendli hoodie, kepka, va nishonlar.Bir qarashda sizni jamoamiz a'zosi sifatida tan olishadi.",
  },
];

const Bonus = () => {
  return (
    <div
      className="w-full min-h-[874px] relative text-white flex flex-col justify-center px-4 sm:px-6 py-[60px] sm:py-[80px] md:py-[100px]"
      style={{
        backgroundImage: `url(${bonus})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Sarlavha */}
        <h3 className="font-medium leading-tight sm:leading-snug md:leading-[1.2] lg:leading-[1.3] uppercase text-[18px] xs:text-[22px] sm:text-[28px] md:text-[40px] lg:text-[54px] mb-8 sm:mb-12 md:mb-16 text-center max-w-[1000px] mx-auto px-2">
          🎁 ENDI ESA BEPUL BONUSLAR BILAN TANISHING
        </h3>

        <div className="flex flex-col gap-[16px] justify-start items-start text-left mt-[20px]">
          <p className="capitalize font-[400] text-[13px] xs:text-[15px] sm:text-[18px] md:text-[24px] lg:text-[28px] leading-relaxed">
            Bu bonuslar — sizning natijangizni 2 barobar tezlashtiradi. <br />
            <br /> Faqat birinchi 30 nafar o'quvchi uchun quyidagi eksklyuziv
            bonuslar ochiladi 👇
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] sm:gap-[28px] md:gap-[36px] mt-[30px] sm:mt-[40px] items-stretch">
            {cards.map((card, i) => (
              <div
                key={i}
                className="flex flex-col bg-[#001A49] text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 h-full"
              >
                <img
                  src={card.image}
                  alt="Image"
                  className="w-full h-[200px] xs:h-[250px] sm:h-[280px] md:h-[320px] lg:h-[338px] object-cover"
                />
                <div className="px-3 py-4 sm:px-4 sm:py-6 text-center whitespace-pre-line flex flex-col justify-center flex-1 capitalize">
                  <h3 className="text-[16px] xs:text-[18px] sm:text-[22px] md:text-[25px] lg:text-[28px] xl:text-[30px] font-medium mb-[12px] sm:mb-[16px] md:mb-[20px]">
                    {card.title}
                  </h3>
                  <p className="text-[13px] xs:text-[15px] sm:text-[17px] md:text-[20px] lg:text-[24px] font-medium opacity-90 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-[60px] sm:mt-[80px] flex flex-col justify-center">
          <h3 className="text-center font-bold text-[18px] xs:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] capitalize mb-[30px] sm:mb-[40px] px-2">
            🧠 Qo'shimcha Super Bonuslar
          </h3>

          <div className="flex flex-col gap-4 sm:gap-6">
            {[
              {
                img: bonus5,
                title: "🎁 Robocontest Premium Access (3 Ta Kursga Kirish)",
                text: "Qimmatli Premium Kurslarga To'liq Kirish — Bepul.",
              },
              {
                img: bonus6,
                title: "🎁 Umrbod 20% Chegirma",
                text: "Robocontest Va RoboticsLab Loyihalarida Barcha Kurs Va Darsliklarga Doimiy Chegirma.",
              },
              {
                img: bonus7,
                title: "🎁 Mentorlar Bilan Maxsus Uchrashuvlar",
                text: "Siz Faqat Dars Emas, Real Tajriba Orttirasiz — Xalqaro G'olib Mentorlar Bilan Jonli Muloqotda.",
              },
            ].map((bonus, i) => (
              <div
                key={i}
                className="w-full flex flex-col md:flex-row items-center bg-white/5 backdrop-blur-sm text-white rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl"
              >
                <div className="bg-white min-w-[140px] w-[160px] h-[160px] flex justify-center items-center flex-shrink-0">
                  <img
                    loading="lazy"
                    src={bonus.img}
                    alt="Bonus"
                    className="w-[110px] h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-6 text-left w-full">
                  <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-semibold mb-2 leading-tight">
                    {bonus.title}
                  </h3>
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-relaxed opacity-90">
                    {bonus.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[50px] sm:mt-[60px] flex flex-col gap-[16px] sm:gap-[20px] text-left">
          <h3 className="font-bold text-[14px] xs:text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] capitalize leading-relaxed">
            Umumiy Bonus Qiymati: ≈ 1 800 000 So'm — BEPUL!
          </h3>

          <p className="font-normal text-[13px] xs:text-[15px] sm:text-[18px] md:text-[22px] lg:text-[28px] capitalize leading-relaxed">
            💎 Sizning investitsiyangiz — faqat 997 000 so'm / oyiga
          </p>

          <p className="font-normal text-[13px] xs:text-[15px] sm:text-[18px] md:text-[22px] lg:text-[28px] capitalize leading-relaxed">
            Ammo siz oladigan qiymat — 6 500 000 so'm + 1 800 000 so'm bonus = 8
            300 000 so'm.
          </p>

          <h3 className="font-bold text-[14px] xs:text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] capitalize leading-relaxed">
            🕒 Shoshiling — bonuslar faqat birinchi 30 ta o'quvchi uchun amal
            qiladi!
          </h3>

          <p className="font-normal text-[13px] xs:text-[15px] sm:text-[18px] md:text-[22px] lg:text-[28px] capitalize leading-relaxed">
            Bugun boshlasangiz — 3 oy ichida o'zingizga yangi hayot qurishingiz
            mumkin.
          </p>
        </div>

        <div className="mt-[60px] sm:mt-[80px]">
          {/* Register Button */}
          <div className="flex justify-center mb-6 sm:mb-8 md:mb-12">
            <button
              onClick={() => {
                document.getElementById("course").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="cursor-pointer relative w-full sm:w-auto min-w-[260px] xs:min-w-[280px] sm:min-w-[500px] md:min-w-[687px] h-14 xs:h-16 sm:h-20 md:h-24 rounded-xl text-white font-bold text-[13px] xs:text-[14px] sm:text-2xl md:text-3xl overflow-hidden transition-all duration-300 hover:text-gray-800 group"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] p-0.5">
                <span className="uppercase w-full h-full bg-transparent rounded-[10px] flex items-center justify-center transition-all duration-300 group-hover:bg-white px-4">
                  bonuslarni qo'lga kiritish
                </span>
              </span>
              {/* Top Image */}
              <img
                className="absolute -top-1 xs:-top-2 right-1 xs:right-2 sm:right-[26px] w-[24px] xs:w-[30px] sm:w-[50px] md:w-[61px] h-[16px] xs:h-[18px] sm:h-[40px] md:h-[49px] object-contain"
                src={top}
                alt="Top decorative element"
                loading="lazy"
              />

              {/* Bottom Image */}
              <img
                className="absolute -bottom-1 xs:-bottom-2 left-1 xs:left-2 sm:left-[16px] w-[22px] xs:w-[28px] sm:w-[50px] md:w-[61px] h-[16px] xs:h-[18px] sm:h-[40px] md:h-[49px] object-contain"
                src={bottom}
                alt="Bottom decorative element"
                loading="lazy"
              />
            </button>
          </div>

          <p className="font-normal text-[13px] xs:text-[15px] sm:text-[20px] md:text-[24px] lg:text-[28px] capitalize mt-[20px] text-center leading-relaxed px-2">
            Joylar soni cheklangan. Bonuslar tugagach, eshik yopiladi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bonus;
