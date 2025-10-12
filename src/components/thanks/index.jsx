import thanks from "../../assets/thanks.png";
import thanks2 from "../../assets/thanks2.png";
import thanks_logo from "../../assets/thanks_logo.png";
import { useNavigate } from "react-router-dom";

const Thanks = () => {
  const navigate = useNavigate(); // navigation hook

  const handleBackHome = () => {
    navigate("/"); // Home sahifaga qaytadi
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
            Thank You
          </span>
        </h1>
        {/* Description */}
        <p className="text-[#262626] text-sm sm:text-[28px] leading-relaxed ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
        {/* Illustration */}
        <img
          loading="lazy"
          src={thanks2}
          alt="Thank You Illustration"
          className="max-w-[350px] w-full h-auto"
        />
        {/* Register Button */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <button
            onClick={handleBackHome}
            className="cursor-pointer relative w-full sm:w-auto min-w-[280px] sm:min-w-[300px] h-16 sm:h-18 rounded-[10px] text-white font-bold text-xl sm:text-[26px] overflow-hidden transition-all duration-300 hover:text-gray-800 group"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] p-0.5">
              <span className="w-full h-full bg-transparent rounded-[10px] flex items-center justify-center transition-all duration-300 group-hover:bg-white">
                Back to home
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
