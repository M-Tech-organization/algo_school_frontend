import discount from "../../assets/discount.png";
import { useEffect, useState } from "react";

const Discount = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Discount tugash vaqti (masalan 5 kun keyin)
  const discountEndDate = new Date();
  discountEndDate.setDate(discountEndDate.getDate() + 5);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = discountEndDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderTimeCard = (value, label) => (
    <div className="flex flex-col items-center flex-1 min-w-[70px] sm:min-w-[120px] md:min-w-[190px]">
      {/* Value box */}
      <div className="w-full h-[100px] sm:h-[140px] md:h-[160px] bg-white rounded-t-[12px] flex items-center justify-center text-[1.5rem] sm:text-[2.5rem] md:text-[3.5rem] font-medium text-[#262626]">
        {value}
      </div>

      {/* Label box */}
      <div className="w-full h-[50px] sm:h-[60px] md:h-[70px] bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] rounded-b-[12px] flex items-center justify-center text-[0.75rem] sm:text-[1rem] md:text-[1.5rem] font-[400] text-white">
        {label}
      </div>
    </div>
  );

  return (
    <div
      className="w-full h-[465px] relative text-white flex flex-col justify-center px-6 py-[60px]"
      style={{
        backgroundImage: `url(${discount})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Title */}
      <h3 className="font-medium uppercase text-[20px] sm:text-5xl md:text-[54px] lg:text-[54px] mb-[50px] text-center max-w-[1000px] mx-auto">
        <span className="bg-gradient-to-r from-[#1FB3F5] via-[#8FD9FA] to-[#FFFFFF] bg-clip-text text-transparent">
          Chegirma tugashiga
        </span>{" "}
        qoldi:
      </h3>

      {/* Countdown */}
      <div className="max-w-[1000px] mx-auto flex justify-center items-center gap-4">
        {renderTimeCard(timeLeft.days, "Days")}
        {renderTimeCard(timeLeft.hours, "Hours")}
        {renderTimeCard(timeLeft.minutes, "Minutes")}
        {renderTimeCard(timeLeft.seconds, "Seconds")}
      </div>
    </div>
  );
};

export default Discount;
