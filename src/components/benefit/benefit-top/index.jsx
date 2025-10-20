import benefit1 from "../../../assets/benefit1.png";

const BenefitTop = () => {
  return (
    <div
      className="w-full min-h-screen relative flex flex-col justify-center px-3 xs:px-4 sm:px-6 py-[50px] sm:py-[150px]"
      style={{
        backgroundImage: `url(${benefit1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1000px] mx-auto px-4  flex flex-col text-center gap-[30px] text-[#262626]">
        <div>
          <h3 className="text-center uppercase leading-tight sm:leading-snug md:leading-[1.2] lg:leading-[1.3] text-[#262626] text-[20px] sm:text-5xl md:text-[54px] lg:text-[54px] font-semibold">
            <span className="bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] bg-clip-text text-transparent">
              G'ALABA QOZONGAN MUSOBAQALARIMIZ
            </span>
          </h3>
          <p className="uppercase text-center text-[#1A1A1A] sm:text-[28px] text-[14px] font-medium my-[20px]">
            Biz gap bilan emas — natija bilan isbotlaymiz.
          </p>
        </div>

        <p className="capitalize sm:text-[28px] text-[14px] font-[500] text-left">
          Quyida xalqaro musobaqalarda jamoam va shogirdlarim bilan <br />{" "}
          qo‘lga kiritgan yutuqlarimizdan ba’zilarini ko‘rishingiz mumkin.
        </p>
        <p className="sm:text-[28px] text-[14px] font-[500] text-left">
          <span className="font-bold">Mentorlar:</span> Zarif Qodirov va
          Sunatullo Hojiyev
        </p>
        <p className="sm:sm:text-[28px] text-[14px] font-[500] text-left">
          <span className="font-bold">
            🔹 First Global Challenge — Gretsiya final bosqichi yo‘llanmasi
          </span>{" "}
          O‘zbekiston terma jamoasi Zarif Qodirov mentorligida BAA va
          Qozog‘iston jamoalarini ortda qoldirib, final bosqichiga chiqdi.
        </p>
        <p className="sm:sm:text-[28px] text-[14px] font-[500] text-left">
          <span className="font-bold">🔹 Huawei ICT Global Competition</span>
          <br />
          O‘zbekiston jamoasi{" "}
          <span className="font-bold">
            1-o‘rin (BAA) va 3-o‘rin (Xitoy finali) — <br /> “Sahiya” loyihasi
            bilan.
          </span>
        </p>
        <p className="sm:text-[28px] text-[14px] font-[500] text-left">
          Imkoniyati cheklangan insonlarga imkon bergan loyiha bugun xalqaro
          miqyosda e’tirof etildi.
        </p>

        <p className="sm:sm:text-[28px] text-[14px] font-bold text-left">
          🔹 ICPC / IOI / EGOI — xalqaro dasturlash olimpiadalari
        </p>
        <p className="sm:sm:text-[28px] text-[14px] font-[500] text-left">
          <span className="font-bold">🏅 IOI bronza medali sohiblari:</span>
          <br /> Dilyor Valijanov, Dilshodbek Khujaev, Mardon Hazratov
        </p>
        <p className="sm:sm:text-[28px] text-[14px] font-[500] text-left">
          <span className="font-bold"> 🏅 EGOI bronza medali sohibalari:</span>
          <br />
          Zarnigor Raximova, Oysha Mirzatillayeva, Malika Xojamuratova
        </p>
      </div>
    </div>
  );
};

export default BenefitTop;
