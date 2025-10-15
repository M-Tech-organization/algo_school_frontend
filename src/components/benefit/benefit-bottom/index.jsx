import benefit3 from "../../../assets/benefit3.png";
import top from "../../../assets/top.png";
import bottom from "../../../assets/bottom.png";

const BenefitBottom = () => {
  return (
    <div
      className="w-full min-h-[994px] relative flex flex-col justify-center px-3 xs:px-4 sm:px-6 py-[40px] sm:py-[80px]"
      style={{
        backgroundImage: `url(${benefit3})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1000px] mx-auto px-4  flex flex-col text-center gap-[30px] text-[#262626]">
        <div className="text-center flex flex-col justify-center gap-[20px]">
          <p className="text-[#262626] text-left capitalize sm:text-[28px] text-[14px] font-[500]">
            🚀 Siz oladigan foyda <br />
            💎 3 oyda kodni “ko‘rish”dan — “tushunish”ga o‘tasiz <br /> 💎 IT
            bozoriga tayyor darajaga chiqasiz <br /> 💎 Mentorlar bilan bir
            jamoada ishlaysiz <br /> 💎 Portfolio loyihalar yaratasiz va
            freelance/ishga joylashasiz <br /> 💎 Sertifikat + tavsiyanoma
            olasiz <br /> 💎 Bepul Robocontest Premium + event kirish
          </p>
          <p className="text-[#262626] text-left capitalize sm:text-[28px] text-[14px] font-[500]">
            🔥 So‘nggi chaqiriq <br /> Agar siz ham hayotingizni tubdan
            o‘zgartirishni istasangiz — <br /> bugun{" "}
            <span className="font-bold">Algo School dasturiga yoziling.</span>{" "}
            <br /> 🤝90 kunda — natija kafolatlangan.
          </p>
        </div>

        {/* Register Button */}
        <div className="flex justify-center mt-8 sm:mt-[80px]">
          <button
            onClick={() => {
              document.getElementById("course").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="cursor-pointer relative w-full sm:w-auto min-w-[280px] sm:min-w-[500px] h-16 sm:h-24 rounded-xl text-white font-bold text-xl sm:text-3xl overflow-hidden transition-all duration-300 hover:text-gray-800 group"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] p-0.5">
              <span className="uppercase w-full h-full bg-transparent rounded-[10px] flex items-center justify-center transition-all duration-300 group-hover:bg-white">
                JAMOAGA QO'SHILISH
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
      </div>
    </div>
  );
};

export default BenefitBottom;
