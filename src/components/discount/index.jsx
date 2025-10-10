import discount from "../../assets/discount.png";
import { useEffect, useState } from "react";

const Discount = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Chegirma tugash sanasi (5 kun)
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
    <div className="flex flex-col items-center flex-1 min-w-[60px] xs:min-w-[80px] sm:min-w-[120px] md:min-w-[190px]">
      {/* Value box */}
      <div className="w-full h-[70px] xs:h-[90px] sm:h-[120px] md:h-[160px] bg-white rounded-t-[12px] flex items-center justify-center text-[1.25rem] xs:text-[1.75rem] sm:text-[2.5rem] md:text-[3.5rem] font-medium text-[#262626]">
        {value}
      </div>

      {/* Label box */}
      <div className="w-full h-[35px] xs:h-[45px] sm:h-[60px] md:h-[70px] bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] rounded-b-[12px] flex items-center justify-center text-[0.65rem] xs:text-[0.8rem] sm:text-[1rem] md:text-[1.5rem] font-[400] text-white">
        {label}
      </div>
    </div>
  );

  return (
    <div
      className="w-full min-h-[380px] xs:min-h-[420px] sm:min-h-[465px] relative text-white flex flex-col justify-center px-3 xs:px-4 sm:px-6 py-[40px] sm:py-[60px]"
      style={{
        backgroundImage: `url(${discount})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Title */}
      <h3 className="font-medium uppercase text-[20px] xs:text-[24px] sm:text-[40px] md:text-[54px] mb-[30px] sm:mb-[50px] text-center max-w-[1000px] mx-auto leading-tight">
        <span className="bg-gradient-to-r from-[#1FB3F5] via-[#8FD9FA] to-[#FFFFFF] bg-clip-text text-transparent">
          Chegirma tugashiga
        </span>{" "}
        qoldi:
      </h3>

      {/* Countdown */}
      <div className="max-w-[1000px] mx-auto flex flex-wrap justify-center items-center gap-3 xs:gap-4 sm:gap-4">
        {renderTimeCard(timeLeft.days, "Days")}
        {renderTimeCard(timeLeft.hours, "Hours")}
        {renderTimeCard(timeLeft.minutes, "Minutes")}
        {renderTimeCard(timeLeft.seconds, "Seconds")}
      </div>
    </div>
  );
};

export default Discount;
