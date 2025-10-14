import { useState } from "react";
import { X } from "lucide-react";

const faq = [
  {
    id: 1,
    question: "1. Dasturlashni umuman bilmasam ham o‘qiy olamanmi?",
    answer:
      "Albatta! Junior bosqichi aynan boshlang‘ich darajadagilar uchun. Sizni nol bilimdan to real kod yozish darajasigacha olib chiqamiz. 3 oyda C++ asoslarini tushunasiz va Codeforces’da 1200 reytingga chiqasiz. \n\n“Sizdan faqat qat’iyat kerak, qolganini biz o‘rgatamiz.”",
  },
  {
    id: 2,
    question: "2. Online va offline o‘rtasida farq bormi?",
    answer:
      "Farqi deyarli yo‘q — ikkalasi ham bir xil mentorlar, bir xil darslar va bir xil natija tizimiga ega.\n\nAmmo Offline — TATU yonida joylashgan, mentorlar bilan yuzma-yuz va jamoaviy muhitda o'rganish imkoni bor.\n\nOnline esa — aynan shu darslar platformada jonli tarzda olib boriladi va har bir guruh uchun alohida mentorlar sifatli ta'lim olishingiz uchun ma'sul bo'ladi.\n\nSiz qayerda bo‘lishingizdan qat’i nazar, natija bir xil.",
  },
  {
    id: 3,
    question: "3. Darslar qanday o‘tadi?",
    answer:
      "Har hafta 3 marta 2 soatdan dars.Har dars — nazariya + amaliy mashq.\n\nHar hafta oxirida esa mentor sizning ishlagan kodlaringizni shaxsan tahlil qiladi (feedback session).\n\n“Ko‘rasiz — siz har darsdan keyin yaxshiroq kod yozasiz.”",
  },
  {
    id: 4,
    question: "4. Mentorlar kim?",
    answer:
      "Darslarni Robocontest va ICPC xalqaro musobaqalari \ng‘oliblari — Zarif Qodirov va uning jamoasi olib boradi. \n\nUlarning shogirdlari hozir Google, Microsoft va boshqa global kompaniyalarda ishlaydi.“Siz faqat o‘qimaysiz — eng kuchlilardan o‘rganasiz.”",
  },
  {
    id: 5,
    question: "5. Darsda vaqtida qatnasha olmasam, saqlab qolinadimi?",
    answer:
      "Ha, har bir dars yozib olinadi. Siz istagan payt qayta ko‘rib, mashq qilishingiz mumkin.\n“O‘tkazib yuborilgan dars — saqlanadi, tashvish qilishizga hojat yo'q.”",
  },
  {
    id: 6,
    question: "6. Nechta o‘quvchi bir guruhda bo‘ladi?",
    answer:
      "Har bir mentor 6–10 ta o‘quvchiga mas’ul. Shu sababli har bir ishtirokchiga individual e’tibor kafolatlangan.\n\n“Siz omma orasida yo‘qolmaysiz — siz bilan alohida ishlanadi.”",
  },
  {
    id: 7,
    question: "7. To‘lovni qanday amalga oshirish mumkin?",
    answer:
      "To‘lovni Click,  yoki naqd tarzda amalga oshirishingiz mumkin.\n\nShuningdek, oylik to‘lov tizimi mavjud — 3 oylikni birdan to‘lamasdan, oyma-oy to‘lov qilasiz.\n\nBa'tafsil bu haqida va 3 oylik chegirma haqida bilish uchun admin bilan bog'laning \n\nhttps://t.me/AlgoSchoolHelp",
  },
  {
    id: 8,
    question: "8. Agar kurs yoqmasa yoki o‘rganishga qiynalsam-chi?",
    answer:
      "Bizda 100% pulni qaytarish kafolati mavjud. \n\nAgar 30 kun ichida o‘sishni sezmasangiz, bemalol ayting — biz pulingizni qaytaramiz.\n\n“Hech qanday xavf yo‘q.”",
  },
  {
    id: 9,
    question: "9. Bitirgandan keyin ish topishimga yordam berasizmi?",
    answer:
      "Ha. Sizga “Karyera & Frilanser Qo'llanmasi” va Karyera tadbirlariga takliflar taqdim etiladi.\n\nBundan tashqari, eng yaxshi bitiruvchilar “Realsoft”, “Robotics Lab” va IT Park rezident kompaniyalarga yo‘naltiriladi.\n\n“Kurs yakunida sizda portfolio va yo‘nalish bo‘ladi.”",
  },
  {
    id: 10,
    question: "10. Qachon boshlanadi va joylar cheklanganmi?",
    answer:
      "Ha, ro‘yxatdan o‘tish faqat 30 nafar talaba bilan cheklanadi. \n\nYangi guruh 20-oktabr kuni boshlanadi.\n\n“Joylar to‘lishi bilan ro‘yxat yopiladi — imkonni boy bermang.”",
  },
  {
    id: 11,
    question: "11. Sertifikat beriladimi?",
    answer:
      "Ha, sizga rasmiy sertifikat va tavsiya xati beriladi. \n\nBu sizning portfolioingizni mustahkamlaydi va ish/intervyu jarayonlarida katta ustunlik beradi.",
  },
  {
    id: 12,
    question: "12. Kursni tugatgandan keyin nima bo‘ladi?",
    answer: "Siz keyingi bosqichga o‘tasiz: Junior → Middle → Senior → Master  \n\nHar bosqichda sizga yangi darajadagi bilim, loyiha va imkoniyatlar ochiladi.\n\n“Bu kurs emas — bu sizning dasturchilik karerangizning yo‘l xaritasi.”",
  },
  {
    id: 13,
    question: "13. Bonuslar haqida yana bir marta aytingchi?",
    answer: "Erta ro‘yxatdan o‘tgan 30 ta o‘quvchiga: \n\n🎁 10% chegirma  \n🎁 Shaxsiy mentor chat  \n🎁 “Algo Map 90-kun rejalashtiradigan”  \n🎁 Robocontest Premium kirish  \n🎁 Maxsus Hoodie / Cap sovg‘alari",
  },
];

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div
      id="faq"
      className="max-w-[1000px] mx-auto md:mt-10 mt-0 mb-[70px] md:mb-[140px] px-4"
    >
      <h3 className="uppercase text-[#262626] text-[20px] sm:text-5xl md:text-[54px] lg:text-[54px] font-semibold text-center mb-[60px]">
        ❓Ko‘p so‘raladigan savollar{" "}
        <span className="bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] bg-clip-text text-transparent">
          (FAQ)
        </span>
      </h3>

      <div className="flex flex-col gap-5">
        {faq.map((item) => {
          const isActive = activeId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => toggleFaq(item.id)}
              className={`p-[2px] rounded-lg cursor-pointer transition-all duration-500 ease-in-out
          ${
            isActive
              ? "bg-gradient-to-r from-[#6651FF] to-[#1FB3F5]"
              : "bg-[#D9D9D9] hover:bg-gradient-to-r hover:from-[#6651FF] hover:to-[#1FB3F5]"
          }`}
            >
              <div className="bg-white rounded-md px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-[16px] sm:text-[22px] md:text-[28px] lg:text-[38px] font-semibold text-[#1A1A1A] pr-4 flex-1">
                    {item.question}
                  </h3>
                  <span
                    className={`flex-shrink-0 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-bold transition-transform duration-300 border border-[#D9D9D9] rounded-full w-[30px] sm:w-[34px] md:w-[36px] h-[30px] sm:h-[34px] md:h-[36px] flex items-center justify-center 
      ${
        isActive
          ? "rotate-45 text-[#6651FF] border-[#6651FF]"
          : "rotate-0 text-[#262626]"
      }`}
                  >
                    <X />
                  </span>
                </div>

                {/* Answer with smooth animation */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out 
              ${
                isActive
                  ? "max-h-[500px] opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
                >
                  <p className="whitespace-pre-line text-[#4C4C4D] font-[400] text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
