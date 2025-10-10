import { useState } from "react";
import { X } from "lucide-react";
const faq = [
  {
    id: 1,
    question: "Will I get full access to the course after purchasing?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    question: "Can I watch the lessons offline?",
    answer:
      "Yes, you can download the lessons and watch them offline anytime you want.",
  },
  {
    id: 3,
    question: "Will I get a certificate after completing the course?",
    answer:
      "Yes, after completing the course you will receive a verified certificate.",
  },
  {
    id: 4,
    question: "Can I get a refund if I’m not satisfied?",
    answer:
      "Of course, we offer a 30-day money-back guarantee if you're not happy with the course.",
  },
];

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="max-w-[1000px] mx-auto md:mt-10 mt-0 mb-[70px] md:mb-[140px] px-4">
      <h3 className="uppercase text-[#262626] text-[20px] sm:text-5xl md:text-[54px] lg:text-[54px] font-semibold text-center mb-[60px]">
        Frequently asked{" "}
        <span className="bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] bg-clip-text text-transparent">
          questions
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
                  <p className="text-[#4C4C4D] font-[400] text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px] leading-relaxed">
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
