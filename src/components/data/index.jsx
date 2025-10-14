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
        <h3 className="font-medium uppercase text-[20px] sm:text-5xl md:text-[54px] lg:text-[54px] mb-[70px] text-center max-w-[1000px] mx-auto">
          <span className="bg-gradient-to-r from-[#1FB3F5] via-[#8FD9FA] to-[#FFFFFF] bg-clip-text text-transparent">
            Algo School
          </span>{" "}
          Information
        </h3>

        {/* Description */}
        <div className="flex flex-col gap-[30px] mb-[80px]">
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            ⚙️ NIMA UCHUN BU ISHLAYDI?
          </p>
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            1. Mentorlar — haqiqiy ishlab chiquvchilar
          </p>
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            Zarif Qodirov va Robocontest jamoasi — musobaqa g‘oliblari va
            platforma yaratuvchilari.
          </p>
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            Siz nazariy domlalar bilan emas, natija ko‘rsatgan ustozlar bilan
            ishlaysiz.
          </p>
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            2. Dars — har gal amaliy vazifa bilan yakunlanadi
          </p>
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            Har bir mavzu so‘ngida real “coding challenge” mavjud.
          </p>
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            Natijani ko‘rasiz, faqat tinglamaysiz.
          </p>
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            3. Haftalik mentor feedback
          </p>
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            Sizni kuzatib boruvchi ustoz — xatolaringizni to‘g‘rilab beradi.
          </p>
          <p className="capitalize text-[#FFFFFF] text-[14px] sm:text-[28px] font-[500]">
            Har haftada sizning progress reportingiz tayyorlanadi.
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
                <img
                  src={check}
                  alt="Check"
                  className="md:w-8 w-[24px] h-auto"
                  loading="lazy"
                />
                <h3 className="sm:text-[28px] text-[14px] font-semibold">
                  {item.title}
                </h3>
              </div>
              <p className="text-[12px] sm:text-[18px] font-normal leading-relaxed">
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
