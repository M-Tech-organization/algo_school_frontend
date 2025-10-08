import data from "../../assets/data.png";
import check from "../../assets/check.svg";

const card = [
  {
    id: 1,
    title: "World class Trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: 2,
    title: "Professional Guidance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: 3,
    title: "Top Quality Education",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: 4,
    title: "Best Learning Platform",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
];

const Data = () => {
  return (
    <div
      className="w-full min-h-[1523px] relative text-white flex flex-col justify-center px-6 py-[100px]"
      style={{
        backgroundImage: `url(${data})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Title */}
        <h3 className="font-medium uppercase text-[40px] sm:text-[54px] mb-[70px] text-center max-w-[1000px] mx-auto">
          <span className="bg-gradient-to-r from-[#1FB3F5] via-[#8FD9FA] to-[#FFFFFF] bg-clip-text text-transparent">
            Algo School
          </span>{" "}
          Information
        </h3>

        {/* Description */}
        <div className="flex flex-col gap-[30px] mb-[80px]">
          <p className="text-[#FFFFFF] text-[20px] sm:text-[28px] font-[500]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <p className="text-[#FFFFFF] text-[20px] sm:text-[28px] font-[500]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-[#FFFFFF] text-[20px] sm:text-[28px] font-[500]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-[#FFFFFF] text-[20px] sm:text-[28px] font-[500]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {card.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer bg-white text-[#1A1A1A] rounded-lg p-6 flex flex-col gap-4 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_30px_rgba(31,179,245,0.4)]"
            >
              <div className="flex items-start gap-4">
                <img src={check} alt="Check" className="w-8 h-8" />
                <h3 className="sm:text-[28px] text-[20px] font-semibold">
                  {item.title}
                </h3>
              </div>
              <p className="text-[16px] sm:text-[18px] font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Data;
