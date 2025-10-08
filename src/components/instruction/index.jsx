import instructor from "../../assets/instructor.png";
import instruction from "../../assets/instruction.jpg";

const Instruction = () => {
  return (
    <div
      className="w-full h-[874px] relative text-white flex flex-col justify-center px-6 py-[100px]"
      style={{
        backgroundImage: `url(${instructor})`,
        backgroundSize: "cover", // ekranni to'liq egallaydi
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Sarlavha */}
      <h3 className="font-medium uppercase text-[40px] sm:text-[54px] mb-16 text-center max-w-[1000px] mx-auto">
        Meet Our Expert Instructor
      </h3>

      {/* Kontent */}
      <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        {/* Matn */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
          <h3 className="font-semibold text-[24px] sm:text-[28px]">
            Lorem ipsum dolor sit amet, consectetur <br /> Lorem ipsum dolor
            sit amet, consectetur
          </h3>
          <p className="font-[400] text-[20px] sm:text-[24px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="font-[400] text-[20px] sm:text-[24px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Instructor rasm */}
        <div className="flex-shrink-0">
          <img
            src={instruction}
            alt="Instructor"
            className="rounded-full w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Instruction;
