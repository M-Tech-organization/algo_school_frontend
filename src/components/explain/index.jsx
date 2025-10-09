import explain from "../../assets/explain.png";
import check from "../../assets/check.svg";
import { useState } from "react";

const Explain = () => {
  const boxes = Array.from({ length: 14 }, (_, i) => i + 1);
  const [selected, setSelected] = useState([]);

  const handleSelect = (num) => {
    if (selected.includes(num)) {
      // agar allaqachon bosilgan bo‘lsa — o‘chirib tashlaymiz
      setSelected(selected.filter((n) => n !== num));
    } else {
      // agar hali tanlanmagan bo‘lsa
      if (selected.length < 2) {
        setSelected([...selected, num]);
      } else {
        // agar 2 tadan oshsa — birinchisini olib tashlab yangisini qo‘shamiz
        setSelected([selected[1], num]);
      }
    }
  };

  return (
    <div
      className="w-full max-h-[2600px] relative text-white flex flex-col justify-center px-6 py-[100px]"
      style={{
        backgroundImage: `url(${explain})`,
        backgroundSize: "cover", // ekranni to'liq egallaydi
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Title */}
      <h3 className="font-medium uppercase text-[20px] sm:text-5xl md:text-[54px] lg:text-[54px] mb-[80px] text-center max-w-[1000px] mx-auto">
        <span className="bg-gradient-to-r from-[#1FB3F5] via-[#8FD9FA] to-[#FFFFFF] bg-clip-text text-transparent">
          Sahifani to’liq o’qimay
        </span>{" "}
        oxiriga tushganlar uchun:
      </h3>

      {/* Kontent */}
      <div className="max-w-[1000px] mx-auto flex flex-col gap-[50px]">
        {/* Matn */}
        <div className="flex-1 flex flex-col gap-[30px] text-left">
          <h3 className="capitalize font-[400] text-[14px] sm:text-[38px]">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor incididunt
          </h3>

          <p className="capitalize font-[400] text-[14px] sm:text-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <p className="capitalize font-[400] text-[14px] sm:text-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-[30px] text-left">
          <h3 className="capitalize font-[400] text-[18px] sm:text-[38px] border-b-2 border-white pb-2 max-w-max  lg:mx-0 mb-[30px] sm:mb-[50px]">
            World className Trainers
          </h3>
          <p className="flex items-start gap-4 font-[400] text-[14px] sm:text-[24px] lg:text-[28px] capitalize leading-[1.4]">
            <img
              src={check}
              alt="Check icon"
              className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] flex-shrink-0"
            />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <p className="flex items-start gap-4 font-[400] text-[14px] sm:text-[24px] lg:text-[28px] capitalize leading-[1.4]">
            <img
              src={check}
              alt="Check icon"
              className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] flex-shrink-0"
            />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <p className="flex items-start gap-4 font-[400] text-[14px] sm:text-[24px] lg:text-[28px] capitalize leading-[1.4]">
            <img
              src={check}
              alt="Check icon"
              className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] flex-shrink-0"
            />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <p className="flex items-start gap-4 font-[400] text-[14px] sm:text-[24px] lg:text-[28px] capitalize leading-[1.4]">
            <img
              src={check}
              alt="Check icon"
              className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] flex-shrink-0"
            />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p className="flex items-start gap-4 font-[400] text-[14px] sm:text-[24px] lg:text-[28px] capitalize leading-[1.4]">
            <img
              src={check}
              alt="Check icon"
              className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] flex-shrink-0"
            />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <p className="flex items-start gap-4 font-[400] text-[14px] sm:text-[24px] lg:text-[28px] capitalize leading-[1.4]">
            <img
              src={check}
              alt="Check icon"
              className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] flex-shrink-0"
            />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <p className="flex items-start gap-4 font-[400] text-[14px] sm:text-[24px] lg:text-[28px] capitalize leading-[1.4]">
            <img
              src={check}
              alt="Check icon"
              className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] flex-shrink-0"
            />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p className="font-[400] text-[14px] sm:text-[24px] lg:text-[28px] capitalize leading-[1.4]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-[30px] text-left mt-[10px]">
          <h3 className="uppercase font-[400] text-center text-[18px] sm:text-[38px]">
            Shoshiling! Joylar soni oz qolib bormoqda...
          </h3>

          <div className="flex justify-center gap-[4px] mt-4 bg-white p-2 rounded-[12px] flex-nowrap">
            {boxes.map((num) => {
              const id = `explain-t${num}`;
              return (
                <div
                  key={id}
                  className="flex-shrink-0"
                  style={{ width: `calc((100% - 13*4px)/14)` }}
                >
                  <input
                    id={id}
                    type="checkbox"
                    checked={selected.includes(num)}
                    onChange={() => handleSelect(num)}
                    className="sr-only peer"
                  />
                  <label
                    htmlFor={id}
                    className={`flex items-center justify-center aspect-square rounded-[6px] cursor-pointer
            bg-gradient-to-r transition-all duration-300
            ${
              selected.includes(num)
                ? "from-[#1FB3F5] to-[#6651FF]"
                : "from-[#F0F3FF] to-[#D9ECFF]"
            } `}
                  >
                    <svg
                      className={`w-3/4 h-3/4 text-white transition-opacity duration-200 ${
                        selected.includes(num) ? "opacity-100" : "opacity-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </label>
                </div>
              );
            })}
          </div>

          <button className="relative cursor-pointer my-10 w-full max-w-[500px] h-[60px] sm:h-[100px] rounded-[12px] text-white font-bold text-[18px] sm:text-[38px] overflow-hidden transition-all duration-300 hover:text-[#262626]">
            {/* Gradient border */}
            <span className="absolute inset-0 rounded-[12px] bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] p-[2px]">
              {/* Inner white bg on hover */}
              <span className="w-full h-full bg-transparent rounded-[10px] flex items-center justify-center transition-all duration-300 hover:bg-white">
                Register Now
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explain;
