import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import hero1 from "../../assets/hero1.png";
import line from "../../assets/line.png";
import logo2 from "../../assets/logo2.svg";

const Navbar = () => {
  const [showTop, setShowTop] = useState(true);
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
    <div className="mx-4 relative">
      {/* Top */}
      {showTop && (
        <div className="bg-gradient-to-r mt-5 from-[#1FB3F5] to-[#6651FF] rounded-[8px] py-[14px] flex justify-center items-center gap-[20px] absolute top-0 left-0 w-full z-10">
          <h1 className="text-center text-white font-[400] text-[18px]">
            IT Courses 🌟 Sale Ends Soon, Get It Now
          </h1>
          <a
            onClick={() => {
              document
                .getElementById("course")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer"
            aria-label="Get it now"
          >
            <ArrowRight className="text-white" size={24} />
          </a>

          <div
            onClick={() => setShowTop(false)}
            className="cursor-pointer absolute right-5"
            aria-label="Close"
          >
            <X size={24} className="text-white" />
          </div>
        </div>
      )}

      {/* Bottom */}
      <div className="pt-[100px] py-[23px] flex justify-between items-center z-0">
        <div className="relative max-w-[1000px] mx-auto px-4 py-[100px] text-center">
          <img
            src={line}
            alt="Abstrakt Line"
            className="absolute top-[70px] left-[120px] w-[30px]"
          />

          <div className="max-w-[700px] px-4 mx-auto flex flex-col items-center bg-[#FCFCFD]  border border-[#E6E6E6] rounded-[11px] py-[19px] mb-[20px] relative z-10">
            {/* Rasm va Unlock Your bir qatorda */}
            <div className="flex items-center gap-4 mb-4">
              <img src={logo2} alt="Icon" className="w-[50px] h-auto" />
              <span className="text-[58px] font-bold bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] bg-clip-text text-transparent">
                Unlock
              </span>
              <span className="text-[58px] font-bold text-[#262626]">Your</span>
            </div>

            {/* Pastdagi matn */}
            <h2 className="text-[58px] font-bold text-[#262626] leading-[1.1] text-center">
              Potential Value
            </h2>
          </div>

          <div className="mt-[100px]">
            <img className="w-full h-auto" src={hero1} alt="Image" />
            <p className="text-[24px] text-[#4C4C4D] font-[400] mt-[80px] max-w-[1100px] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>

            <button className="relative cursor-pointer my-[40px] w-full max-w-[500px] h-[100px] rounded-[12px] text-white font-bold text-[38px] overflow-hidden transition-all duration-300 hover:text-[#262626]">
              {/* Gradient border */}
              <span className="absolute inset-0 rounded-[12px] bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] p-[2px]">
                {/* Inner white bg on hover */}
                <span className="w-full h-full bg-transparent rounded-[10px] flex items-center justify-center transition-all duration-300 hover:bg-white">
                  Register Now
                </span>
              </span>
            </button>
          </div>

          <h3 className="text-[#262626] font-[500] text-[38px]">
            Shoshiling! Joylar soni oz qolib bormoqda...
          </h3>

          {/* Checkboxlar */}
          <div className="flex flex-wrap gap-3 mt-[35px] justify-center">
            {boxes.map((num) => (
              <div key={num} className="flex items-center">
                <input
                  id={`t${num}`}
                  type="checkbox"
                  checked={selected.includes(num)}
                  onChange={() => handleSelect(num)}
                  className="sr-only peer"
                />
                <label
                  htmlFor={`t${num}`}
                  className={`inline-flex items-center justify-center w-[36px] h-[36px]
                    rounded-[6px] cursor-pointer 
                    bg-gradient-to-r transition-all duration-300
                    ${
                      selected.includes(num)
                        ? "from-[#1FB3F5] to-[#6651FF]"
                        : "from-[#F0F3FF] to-[#D9ECFF]"
                    }`}
                >
                  {/* Check belgisi */}
                  <svg
                    className={`w-5 h-5 text-white transition-opacity duration-200 ${
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
