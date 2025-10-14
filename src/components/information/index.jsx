import check from "../../assets/check.svg";

const Information = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-[100px] flex flex-col gap-[30px] text-[#262626]">
      <p className="sm:text-[28px] text-[14px] font-[500]">
        🔥 Keyingi bo‘limga tayyorlaning: Algo School Haqida
      </p>
      <p className="sm:text-[28px] text-[14px] font-[500]">
        Endi sizga qanday qilib 90 kunda algoritmlarni o‘rganib, Codeforces’da
        1200+ reytingga chiqish mumkinligini ko’rsataman…
      </p>
      <p className="sm:sm:text-[28px] text-[14px] font-[500]">
        Men sizga oddiy kursni emas, natija tizimini taklif qilaman.
      </p>
      <p className="sm:text-[28px] text-[14px] font-[500]">Bu tizimda siz:</p>
      <p className="sm:sm:text-[28px] text-[14px] font-[500] flex gap-2 items-center">
        <img src={check} alt="Image" />
        Nazariyada emas, real kod orqali o‘rganasiz.
      </p>
      <p className="sm:sm:text-[28px] text-[14px] font-[500] flex gap-2 items-center">
        <img src={check} alt="Image" />
        Darsda o‘tirib emas, amaliy masala yechib rivojlanasiz.
      </p>
      <p className="sm:sm:text-[28px] text-[14px] font-[500] flex gap-2 items-center">
        <img src={check} alt="Image" />
        Yodlab emas, tushunib o‘rganasiz.
      </p>
      <p className="sm:sm:text-[28px] text-[14px] font-[500]">
        💬 3 oy ichida siz hozir yodlab o‘tirgan kodni — tushunib yozadigan
        bo‘lasiz.
      </p>
      <p className="sm:sm:text-[28px] text-[14px] font-[500]">
        💬 6 oyda esa — o‘sha kod orqali loyiha qila boshlaysiz.
      </p>
    </div>
  );
};

export default Information;
