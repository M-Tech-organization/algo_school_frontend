import information from "../../assets/information.png";

const Hero = () => {
  return (
    <div
      className="w-full relative text-white flex flex-col justify-center px-6 h-[1304px]"
      style={{
        backgroundImage: `url(${information})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <h3 className="uppercase lg:text-6xl leading-tight sm:leading-snug md:leading-[1.2] lg:leading-[1.3] font-semibold text-[20px] sm:text-5xl md:text-[54px] lg:text-[54px] mb-[40px] sm:mb-24 md:mb-32 lg:mb-[80px] text-center max-w-[1000px] mx-auto">
        Agar Dasturlashni tez, to'g'ri va foydali o'rganmoqchi bo'lsangiz,
        sahifaning oxirigacha o'qing.
      </h3>

      <div className="max-w-[1000px] mx-auto flex flex-col gap-[30px]">
        <p className="uppercase font-[400] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]">
          ⚠️Sizga tanish holatlarmi?
        </p>
        <div className="flex flex-col gap-[30px] px-2">
          <p className="font-[400] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]">
            🔴C++ Darslari Boshlanadi - Lekin Birinchi Haftadanoq Chalkashlik.
          </p>
          <p className="font-[400] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]">
            🔴YouTube'da O'rganmoqchi Bo'lasiz - Lekin Har Biri Boshqacha
            Tushuntiradi.
          </p>
          <p className="font-[400] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]">
            🔴Masalani Yechmoqchi Bo'lasiz - Lekin Yechimni "Copy_Paste"
            Qilasiz, Tushunmaysiz.
          </p>
          <p className="font-[400] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]">
            🔴Universitetdagi Dasrlar Nazariyada Qoladi, Amaliyot Esa Yo'q.
          </p>
          <p className="font-[400] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]">
            🔴Har Safar "Bugun Boshlayman" Deysiz - Lekin Motivatsiya 3-Kun
            Yo'qoladi.
          </p>
          <p className="font-[400] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]">
            🔴Atrofdagilar O'sib Ketayotgandek, Siz Esa Joyingizda Turgandek
            Tuyulasiz.
          </p>
          <p className="font-[400] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]">
            Agar Shu Holatda O'zingizni Ko'rsangiz - Xavotir Olmang.
          </p>
          <p className="font-[400] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]">
            Men Ham Xuddi Shu Joydan Boshlayman.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
