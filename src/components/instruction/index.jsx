import instructor from "../../assets/instructor.png";
import zarif from "../../assets/zarif.png";
import check from "../../assets/check.svg";

const Instruction = () => {
  return (
    <div
      className="w-full min-h-[874px] relative text-white flex flex-col justify-center px-6 py-[100px]"
      style={{
        backgroundImage: `url(${instructor})`,
        backgroundSize: "cover", // ekranni to'liq egallaydi
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Sarlavha */}
        <h3 className="font-medium uppercase text-[20px] sm:text-5xl md:text-[54px] lg:text-[54px] mb-16 text-center max-w-[1000px] mx-auto">
          Mening ismim Zarif Qodirov
        </h3>

        {/* Kontent */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 lg:gap-[60px]">
          {/* Matn */}
          <div className="flex-1 flex flex-col gap-6 text-left">
            <h3 className="font-semibold text-[14px] sm:text-[28px]">
              👤 TANISHAYLIK <br />
              Mening Ismim — Zarif Qodirov <br />
              Men 2010-yilda TATUda o'qishni boshladim.
            </h3>
            <p className="font-[400] text-[14px] sm:text-[24px] leading-relaxed">
              Shaxsiy kompyuterim yo’qligi, sabab <br /> fleshkada kod yozib..
            </p>
            <p className="font-[400] text-[14px] sm:text-[24px] leading-relaxed">
              Yuklab, yurib dasturlashni o’rganganman.
            </p>
            <p className="capitalize font-[400] text-[14px] sm:text-[24px] leading-relaxed">
              O‘sha paytlar ICPC jamoasiga qo‘shilib, dasturlashda ilk xalqaro
              tajribamni oldim. <br /> Bugun esa:
            </p>
          </div>

          {/* Instructor rasm */}
          <div className="flex-shrink-0">
            <img
              loading="lazy"
              src={zarif}
              alt="Instructor"
              className="rounded-full w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[16px] justify-start items-start text-left mt-[20px]">
          <p className="capitalize font-[400] text-[14px] sm:text-[24px] leading-relaxed flex gap-2 items-center">
            <img src={check} alt="Image" />
            30 ta mamlakatda bo‘ldim, 500 ming dollarlik musobaqalarda <br />
            g‘alaba qozondim.
          </p>
          <p className="capitalize font-[400] text-[14px] sm:text-[24px] leading-relaxed flex gap-2 items-center">
            <img src={check} alt="Image" />
            150 mingdan ortiq foydalanuvchiga ega Robocontest <br />
            platformasining asoschilaridanman.
          </p>
          <p className="capitalize font-[400] text-[14px] sm:text-[24px] leading-relaxed flex gap-2 items-center">
            <img src={check} alt="Image" />
            “Sahiya” — BAA va Qatarda ishlatilayotgan Imkoniyati cheklangan
            <br />
            Insonlar uchun Yaratilgan dastur muallifiman.
          </p>
          <p className="capitalize font-[400] text-[14px] sm:text-[24px] leading-relaxed flex gap-2 items-center">
            <img src={check} alt="Image" />
            “AirPilot” — 100 ming dollarlik xalqaro mukofot sohibi bo‘lgan
            ta’lim <br /> o‘yini Mentoriman.
          </p>
          <p className="capitalize font-[400] text-[14px] sm:text-[24px] leading-relaxed flex gap-2 items-center">
            <img src={check} alt="Image" />
            Microsoft, Google Hamda boshqa Yetakchi Xalqaro Kompaniyalarida <br />
            ishlayotgan o‘nlab shogirdlarim bor — ularning bari shu yo‘ldan
            o‘tgan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
