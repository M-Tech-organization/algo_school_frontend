import thanks from "../../assets/thanks.png";
import thanks_logo from "../../assets/thanks_logo.png";

const Thanks = () => {
  const handleBackHome = () => {
    window.location.href = "https://t.me/AlgoSchoolHelp";
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center px-6 py-[50px] bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${thanks})`,
        backgroundSize: "100% 100%",
      }}
    >
      {/* Container */}
      <div className="max-w-[1078px] w-full bg-white rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col items-center gap-[30px] text-center">
        {/* Logo */}
        <img
          src={thanks_logo}
          alt="Logo"
          className="w-40 sm:w-[207px] h-auto"
          loading="lazy"
        />
        {/* Title */}
        <h1 className="text-2xl md:text-[38px] font-semibold">
          <span className="bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] bg-clip-text text-transparent">
            🎉TABRIKLAYMIZ!
          </span>
        </h1>
        {/* Description */}
        <p className="text-[#262626] text-sm sm:text-[28px] leading-relaxed ">
          Algo School o‘quv dasturiga muvaffaqiyatli ro‘yxatdan o‘tdingiz!{" "}
          <br /> Siz endi O‘zbekistondagi eng kuchli dasturchilar safarining bir
          qismisiz. <br />
          <br /> Eslatma: Adminlarimiz 24 soat ichida siz bilan bog‘lanadi va
          sizni rasmiy guruhga qo‘shadi. <br />
          <br /> 💬 So‘nggi bir qadam: Iltimos, to‘lov chekini quyidagi Telegram
          akkauntga yuboring, shunda sizni mentorlar va o‘quvchilar guruhiga
          qo‘shamiz 👇
        </p>

        {/* Register Button */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <button
            onClick={handleBackHome}
            className="cursor-pointer relative w-full sm:w-auto min-w-[280px] sm:min-w-[430px] h-16 sm:h-18 rounded-[10px] text-white font-bold text-[18px] sm:text-[26px] overflow-hidden transition-all duration-300 hover:text-gray-800 group"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] p-0.5">
              <span className="w-full h-full bg-transparent rounded-[10px] flex items-center justify-center transition-all duration-300 group-hover:bg-white">
                ALGO SCHOOL HELP
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
