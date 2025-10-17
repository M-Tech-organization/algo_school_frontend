import register_top from "../../../assets/register_top.png";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RegisterTop = () => {
  return (
    <div className="w-full max-h-[365px] relative text-white flex flex-col justify-center px-6 pt-[90px] md:py-[200px] overflow-hidden">

      {/* 🖼️ Background image (lazy load bilan) */}
      <img
        src={register_top}
        alt="Register background"
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* 📌 Title */}
      <h3 className="font-medium uppercase text-[20px] sm:text-5xl md:text-[54px] lg:text-[54px] mb-[80px] text-center max-w-[1000px] mx-auto">
        <span className="bg-gradient-to-r from-[#1FB3F5] via-[#8FD9FA] to-[#FFFFFF] bg-clip-text text-transparent">
          ALGO SCHOOL
        </span>
      </h3>

      {/* 🔙 Back icon */}
      <Link
        to="/"
        className="text-white absolute top-4 left-4 sm:top-5 sm:left-5 md:top-5 md:left-5 lg:top-5 lg:left-5"
      >
        <ArrowLeft className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-11 lg:w-11 lg:h-11" />
      </Link>
    </div>
  );
};

export default RegisterTop;
