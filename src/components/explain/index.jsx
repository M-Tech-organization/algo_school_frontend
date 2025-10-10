import explain from "../../assets/explain.png";
import check from "../../assets/check.svg";
import { useEffect, useState } from "react";

const Explain = () => {
  const boxes = Array.from({ length: 14 }, (_, i) => i + 1);
  const [selected, setSelected] = useState([14]); // 14 doim active
  const [flash, setFlash] = useState(true); // 13 uchun toggle

  // 🔁 13 uchun flashing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFlash((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 13 ni flash bo‘yicha selectedga qo‘shish yoki olib tashlash
  useEffect(() => {
    setSelected((prev) => {
      const others = prev.filter((n) => n !== 13);
      return flash ? [...others, 13] : others;
    });
  }, [flash]);

  // 📌 Checkbox tanlash funksiyasi
  const handleSelect = (num) => {
    // 13 va 14 ni bosib bo‘lmaydi
    if (num === 13 || num === 14) return;

    if (selected.includes(num)) {
      // agar allaqachon bosilgan bo‘lsa — o‘chirib tashlaymiz
      setSelected(selected.filter((n) => n !== num));
    } else {
      // agar hali tanlanmagan bo‘lsa
      if (selected.length < 3) {
        // 13 va 14 allaqachon ichida bo'lishi mumkinligi uchun 3 deb qo‘ydik
        setSelected([...selected, num]);
      } else {
        // agar 2 ta tanlovdan oshsa — faqat user tanlaganlarini boshqaramiz
        const userSelected = selected.filter((n) => n !== 13 && n !== 14);
        if (userSelected.length >= 2) {
          // faqat user tanlagan birinchisini olib tashlab yangisini qo‘shamiz
          const newSelected = selected.filter(
            (n) => n !== userSelected[0] && n !== 13 && n !== 14
          );
          setSelected([...newSelected, 13, 14, num]);
        } else {
          setSelected([...selected, num]);
        }
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
      <h3 className="font-medium uppercase  leading-tight sm:leading-snug md:leading-[1.2] lg:leading-[1.3] text-[20px] sm:text-5xl md:text-[54px] lg:text-[54px] mb-[80px] text-center max-w-[1000px] mx-auto">
        <span className="bg-gradient-to-r from-[#1FB3F5] via-[#8FD9FA] to-[#FFFFFF] bg-clip-text text-transparent">
          Sahifani to’liq o’qimay
        </span>{" "}
        oxiriga tushganlar uchun:
      </h3>

      <div className="max-w-[1000px] mx-auto flex flex-col gap-[30px] sm:gap-[50px] px-3 sm:px-6 lg:px-0">
        {/* Matn */}
        <div className="flex-1 flex flex-col gap-[15px] sm:gap-[30px] text-left">
          <h3 className="capitalize font-[400] text-[12px] xs:text-[14px] sm:text-[38px] leading-snug">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor incididunt
          </h3>

          <p className="capitalize font-[400] text-[12px] xs:text-[14px] sm:text-[28px] leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <p className="capitalize font-[400] text-[12px] xs:text-[14px] sm:text-[28px] leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </div>

        {/* Trainer matni */}
        <div className="flex-1 flex flex-col gap-[15px] sm:gap-[30px] text-left">
          <h3 className="capitalize font-[400] text-[14px] sm:text-[38px] border-b-2 border-white pb-2 max-w-max mb-[20px] sm:mb-[50px]">
            World className Trainers
          </h3>

          {/* Qatorlar */}
          {Array.from({ length: 6 }).map((_, idx) => (
            <p
              key={idx}
              className="flex items-start gap-2 sm:gap-4 font-[400] text-[12px] xs:text-[14px] sm:text-[24px] lg:text-[28px] capitalize leading-[1.4]"
            >
              <img
                src={check}
                alt="Check icon"
                className="w-[20px] h-[20px] xs:w-[25px] xs:h-[25px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] flex-shrink-0"
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>

        {/* Joylar soni qismi */}
        <div className="flex-1 flex flex-col items-center justify-center gap-[20px] sm:gap-[30px] text-left mt-[10px]">
          <h3 className="uppercase font-[400] text-center text-[14px] xs:text-[16px] sm:text-[38px] leading-snug">
            Shoshiling! Joylar soni oz qolib bormoqda...
          </h3>

          {/* Checkboxlar */}
          <div className="flex justify-center gap-1 xs:gap-1.5 sm:gap-2 mt-4 bg-white p-2 xs:p-3 sm:p-4 rounded-[12px] flex-wrap">
            {boxes.map((num) => {
              const id = `explain-t${num}`;
              return (
                <div
                  key={id}
                  className="flex-shrink-0 w-[18px] xs:w-[22px] sm:w-[28px] md:w-[36px]"
                >
                  <input
                    id={id}
                    type="checkbox"
                    checked={selected.includes(num)}
                    onChange={() => handleSelect(num)}
                    className="sr-only peer"
                  />
                  <label
                    aria-label={`Box ${id}`}
                    htmlFor={id}
                    className={`flex items-center justify-center aspect-square rounded-[4px] xs:rounded-[5px] sm:rounded-[6px] cursor-pointer bg-gradient-to-r transition-all duration-300 ${
                      selected.includes(num)
                        ? "from-[#1FB3F5] to-[#6651FF]"
                        : "from-[#F0F3FF] to-[#D9ECFF]"
                    }`}
                  >
                    <svg
                      className={`w-2/3 h-2/3 text-white transition-opacity duration-200 ${
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

          {/* Tugma */}
          <button
            onClick={() => {
              document.getElementById("course").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="relative cursor-pointer my-8 w-full max-w-[320px] xs:max-w-[400px] sm:max-w-[500px] h-[50px] xs:h-[70px] sm:h-[100px] rounded-[12px] text-white font-bold text-[14px] xs:text-[20px] sm:text-[38px] overflow-hidden transition-all duration-300 hover:text-[#262626]"
          >
            <span className="absolute inset-0 rounded-[12px] bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] p-[2px]">
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
