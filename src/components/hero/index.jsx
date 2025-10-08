import information from "../../assets/information.png";

const Hero = () => {
  return (
    <div
      className="w-full h-[1304px] relative text-white flex flex-col justify-center px-6"
      style={{
        backgroundImage: `url(${information})`,
        backgroundSize: "100% 100%", // width va height to'liq
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h3 className="font-semibold text-[54px] mb-[80px] text-center max-w-[1000px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </h3>

      <div className="max-w-[1000px] mx-auto flex flex-col gap-[30px]">
        <p className="font-[400] text-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </p>
        <p className="font-[400] text-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="font-[400] text-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <p className="font-[400] text-[28px]">
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
