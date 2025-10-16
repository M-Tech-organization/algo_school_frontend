import AbilityBottom from "./ability-bottom";
import AbilityTop from "./ability-top";

const Ability = () => {
  return (
    <div className="max-w-[1000px] mx-auto text-center px-4 py-[100px]">
      <div className="mb-[60px]">
        <h3 className="uppercase leading-tight sm:leading-snug md:leading-[1.2] lg:leading-[1.3] text-[#262626] text-[20px] sm:text-5xl md:text-[54px] lg:text-[54px] font-semibold">
          <span className="bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] bg-clip-text text-transparent">
            ALGO SCHOOL — ORQALI NIMALARNI OLASIZ
          </span>
        </h3>

        <div className="flex flex-col gap-[20px] mt-[60px] text-left">
          <p className="text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px] font-normal text-[#262626] capitalize">
            Siz shunchaki kurs emas — natija beradigan tizimni olasiz.
            Allaqachon dastur bilan tanishib o‘qib bo'ldingiz, endi esa...
          </p>

          <p className="text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px] font-normal text-[#262626] capitalize">
            Ko‘ring —{" "}
            <span className="font-bold">
              nega bu dastur siz uchun eng to‘g‘ri investitsiya.
            </span>
          </p>

          <p className="text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px] font-normal text-[#262626] capitalize">
            Bu shunchaki darslar emas.
          </p>

          <p className="text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px] font-normal text-[#262626] capitalize">
            Bu —{" "}
            <span className="font-bold">
              3 oy ichida sizni haqiqiy dasturchiga aylantiradigan tizim.{" "}
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[60px]">
        <AbilityTop />
        <AbilityBottom />
      </div>
    </div>
  );
};

export default Ability;
