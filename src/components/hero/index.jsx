import information from "../../assets/information.png";

const Hero = () => {
  return (
    <div
      className="w-full relative text-white flex flex-col justify-center px-6
             h-[900px] sm:h-[950px] md:h-[1000px] lg:h-[1304px]"
      style={{
        backgroundImage: `url(${information})`,
        backgroundSize: "100% 100%", 
        backgroundPosition: "center",
      }}
    >
      <h3 className="uppercase lg:text-6xl leading-tight sm:leading-snug md:leading-[1.2] lg:leading-[1.3] font-semibold text-[20px] sm:text-5xl md:text-[54px] lg:text-[54px] mb-[40px] sm:mb-24 md:mb-32 lg:mb-[80px] text-center max-w-[1000px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </h3>

      <div className="max-w-[1000px] mx-auto flex flex-col gap-[30px]">
        <p className="font-[400] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </p>
        <p className="font-[400] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="font-[400] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="font-[400] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Hero;
