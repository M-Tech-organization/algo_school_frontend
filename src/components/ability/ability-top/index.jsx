import check from "../../../assets/check.svg";
import logo2 from "../../../assets/logo2.png";

const data = [
  {
    id: 1,
    img: logo2,
    title: "🎓 Algo Foundations dasturi",
    price: " — 2 400 000",
  },
  {
    id: 2,
    img: check,
    title: "Haftalik mentor feedback (12 sessiya)",
    price: "— 1 200 000",
  },
  {
    id: 3,
    img: check,
    title: "Jamoa + Coworking zona kirishi",
    price: " — 900 000",
  },
  {
    id: 4,
    img: check,
    title: "Robocontest Premium darslarga kirish",
    price: "— 700 000",
  },
  {
    id: 5,
    img: check,
    title: "Karyera va Frilans yo‘riqnomasi (Portfolio + CV)",
    price: "— 800 000",
  },
  {
    id: 6,
    img: check,
    title: "Sertifikat + Tavsiyanoma xati",
    price: "— 500 000 so‘m",
  },
];

const AbilityTop = () => {
  return (
    <div>
      <h3 className="uppercase leading-tight sm:leading-snug md:leading-[1.2] lg:leading-[1.3] text-[#262626] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[38px] font-semibold">
        <span className="bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] bg-clip-text text-transparent">
          Siz Oladigan Narsalar & Asl Qiymati:
        </span>
      </h3>
      <p className="text-[14px] mt-[10px] italic sm:text-[18px] md:text-[24px] lg:text-[28px] font-normal text-[#262626] capitalize">
        (Junior bosqich uchun)
      </p>

      <div className="flex flex-col gap-5 my-[60px]">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 w-full bg-[#1FB3F5]/15 rounded-[21px] px-5 sm:px-[46px] py-5 sm:py-[29px]"
          >
            {/* Icon qismi */}
            <div className="bg-white shadow-lg flex justify-center items-center rounded-full p-3 sm:p-[12px]">
              <img
                src={item.img}
                className="w-[32px] sm:w-[36px] h-auto"
                alt="icon"
              />
            </div>

            {/* Title qismi */}
            <h3 className="text-center sm:text-left text-[#001A49] font-semibold text-[16px] sm:text-[20px] flex-1">
              {item.title}
            </h3>

            {/* Button qismi */}
            <button className="cursor-pointer w-full sm:max-w-[280px] h-[50px] sm:h-[66px] bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] font-semibold text-[16px] sm:text-[20px] text-white rounded-[33px] transition-transform hover:scale-105">
              {item.price} so'm
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-[900px] mx-auto text-center flex flex-col gap-[20px] justify-center w-full">
        <p className="text-[14px] text-left mt-[10px] sm:text-[18px] md:text-[24px] lg:text-[28px] font-bold text-[#262626] capitalize">
          Jami qiymat: 6 500 000 so‘m
        </p>

        <p className="text-[14px] text-left mt-[10px] sm:text-[18px] md:text-[24px] lg:text-[28px] font-bold text-[#262626] capitalize">
          Ammo bugun ro‘yxatdan o‘tganlar uchun maxsus taklif:
        </p>

        <p className="text-[14px] text-left mt-[10px] sm:text-[18px] md:text-[24px] lg:text-[28px] font-normal text-[#262626] capitalize">
          Faqat <span className="font-bold">997 000 so‘m / oyiga</span> va siz{" "}
          <span className="font-bold">barchasini</span> qo‘lga kiritasiz.
        </p>
      </div>
    </div>
  );
};

export default AbilityTop;
