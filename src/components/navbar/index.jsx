import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import hero1 from "../../assets/hero1.webp";
import line from "../../assets/line.png";
import top from "../../assets/top.png";
import bottom from "../../assets/bottom.png";
import logo2 from "../../assets/logo2.png";

const Navbar = () => {
  const [showTop, setShowTop] = useState(true);
  const boxes = Array.from({ length: 14 }, (_, i) => i + 1);
  const [selected, setSelected] = useState([9, 10, 11, 12, 13, 14]); // 14 doim aktiv
  const [flash, setFlash] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 13 ni flash bo'yicha boshqarish + 14ni saqlab qolish
  useEffect(() => {
    setSelected((prev) => {
      const base = prev.includes(14) ? prev : [...prev, 14];
      const without13 = base.filter((n) => n !== 8);
      return flash ? [...without13, 8] : without13;
    });
  }, [flash]);

  const handleSelect = (num) => {
    // Faqat 13 va 14 ishlaydi
    if (num !== 8 && num !== 14) return;
  };

  return (
    <div className="w-full ">
      <div className="mx-2 sm:mx-3 lg:mx-4 relative">
        {showTop && (
          <div className="bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] rounded-[8px] mt-4 py-3 px-4 flex items-center justify-center gap-3 absolute top-0 left-0 w-full z-50">
            {/* Matn va ArrowRight */}
            <div className="flex items-center justify-center gap-3 flex-1">
              <h1 className="text-white font-normal text-[9px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-center">
                “Kod yozishni o‘rganmoqchimisiz — lekin qayerdan boshlashni
                bilmaysizmi?”{" "}
              </h1>

              <button
                onClick={() => {
                  document
                    .getElementById("course")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex-shrink-0 cursor-pointer"
                aria-label="Get it now"
              >
                <ArrowRight className="text-white w-5 h-5" />
              </button>
            </div>

            {/* X tugmasi */}
            <button
              onClick={() => setShowTop(false)}
              className="cursor-pointer flex-shrink-0 ml-3"
              aria-label="Close"
            >
              <X className="text-white w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-[150px] sm:pt-[150px] pb-[92px]">
        <div className="max-w-5xl mx-auto">
          {/* Line decoration */}
          <div className="relative">
            <img
              loading="lazy"
              src={line}
              alt="Line"
              className="absolute -left-[25px] -top-[25px]  w-5 xs:w-6 sm:w-8 z-0 pointer-events-none"
            />
          </div>

          {/* Title Card */}
          <div className="relative bg-white border border-gray-200 rounded-xl py-4 sm:py-6 mb-8 sm:mb-[80px] z-10 max-w-[1000px] w-full mx-auto">
            {/* Logo + Unlock Your */}
            <div className="uppercase flex items-center justify-center gap-2 sm:gap-4 whitespace-nowrap">
              <img
                loading="lazy"
                src={logo2}
                alt="Image"
                className="w-6 h-auto sm:w-7 md:w-8 lg:w-9 xl:w-10"
              />

              <span className="text-[10px] xs:text-2xl sm:text-3xl md:text-5xl lg:text-[48px] font-bold bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] bg-clip-text text-transparent flex-shrink-0">
                Algo School
              </span>
              <span className="text-[10px] xs:text-2xl sm:text-3xl md:text-5xl lg:text-[48px] font-bold text-gray-800 flex-shrink-0">
                sizni chalkash
              </span>
            </div>

            {/* Potential Value */}
            <h2 className="uppercase leading-tight sm:leading-snug md:leading-[1.2] lg:leading-[1.3] text-[10px] xs:text-2xl sm:text-3xl md:text-5xl lg:text-[48px] font-bold text-gray-800 text-center mt-2">
              nazariyadan olib chiqib, 90 kunda haqiqiy dasturchiga aylantiradi.
            </h2>
          </div>

          {/* Hero Image */}
          <div className="mb-8 sm:mb-12">
            <img
              src={hero1}
              alt="Hero"
              className="w-full h-auto rounded-lg "
              loading="lazy"
            />
          </div>

          {/* Description */}
          <p className="text-base sm:text-xl lg:text-[24px] font-[400] text-[#4C4C4D] text-center mb-6 sm:mb-10">
            Har bir kod orqasida g'alaba yashiringan. <br /> Biz o'qitamiz —
            ular dunyoni zabt etadi.
          </p>

          {/* Register Button */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <button
              onClick={() => {
                document.getElementById("course").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="cursor-pointer relative w-full sm:w-auto min-w-[280px] sm:min-w-[500px] h-16 sm:h-24 rounded-xl text-white font-bold text-[14px] sm:text-3xl overflow-hidden transition-all duration-300 hover:text-gray-800 group"
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

          {/* Urgency Text */}
          <h3 className="text-[#262626] font-medium text-xl sm:text-3xl lg:text-[38px] text-center mb-6 sm:mb-8">
            Shoshiling! Joylar soni oz qolib bormoqda...
          </h3>

          {/* Checkboxes in one row */}
          <div className="flex justify-center gap-0.5 sm:gap-1 md:gap-2 w-full flex-wrap">
            {boxes.map((num) => (
              <div key={num} className="flex-shrink-0">
                <input
                  id={`checkbox-${num}`}
                  type="checkbox"
                  checked={selected.includes(num)}
                  onChange={() => handleSelect(num)}
                  className="sr-only peer"
                />
                <label
                  aria-label={`Box ${num}`}
                  htmlFor={`checkbox-${num}`}
                  className={`flex items-center justify-center w-5 sm:w-6 md:w-9 h-5 sm:h-6 md:h-9 rounded-lg cursor-pointer bg-gradient-to-r transition-all duration-500
    ${
      selected.includes(num)
        ? "from-[#1FB3F5] to-[#6651FF]"
        : "from-[#F0F3FF] to-[#D9ECFF]"
    }
    ${num === 8 ? "transition-opacity duration-500" : ""}
  `}
                  style={{
                    opacity: num === 8 ? (selected.includes(8) ? 1 : 0) : 1,
                  }}
                >
                  <svg
                    className={`w-2.5 sm:w-4 md:w-5 h-2.5 sm:h-4 md:h-5 text-white transition-opacity duration-200 ${
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
