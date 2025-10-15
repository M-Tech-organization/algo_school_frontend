import quality from "../../assets/quality.png";
import guarante from "../../assets/guarante.png";

const Guarantee = () => {
  return (
    <div
      className="w-full min-h-[900px] relative text-white flex flex-col justify-center py-[100px]"
      style={{
        backgroundImage: `url(${guarante})`,
        backgroundSize: "cover", // ekranni to'liq egallaydi
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1000px] mx-auto px-4 text-center flex flex-col gap-[40px] items-center">
        <img
          loading="lazy"
          src={quality}
          alt="Image"
          className="w-full max-w-[160px] xs:max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[378px] h-auto mx-auto"
        />
        <h3 className="uppercase leading-tight sm:leading-snug md:leading-[1.2] lg:leading-[1.3] text-[#262626] text-[20px] sm:text-5xl md:text-[54px] lg:text-[54px] font-semibold">
          😳
          <span className="bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] bg-clip-text text-transparent">
            “Ko'zlarimga ishonmayman”
          </span>{" "}
          Nomli Kafolat
        </h3>

        <div className="mt-[60px] flex flex-col gap-[30px]">
          <p className="text-[#262626] text-[14px] sm:text-[24px] md:text-[28px] font-[400] text-left capitalize">
            Biz sizga 100% xavfsiz kafolat beramiz: <br />
            <br /> Agar 30 kun ichida hech qanday o‘sish yoki natija <br />
            sezmasangiz — to‘liq pulni qaytaramiz.
            <br />
            <br />
            Hech qanday savol yo‘q, bahona yo‘q, xafa bo‘lish yo‘q.
            <br /> <br />
            Sizning ishonchingiz — biz uchun obro‘dan muhimroq.
            <br />
            <br /> Mening va’dam — 90 kunda natija ko‘rasiz.
            <br />
            <br /> Ko‘p kurslarda siz tinglaysiz, yozasiz, lekin o‘rganmaysiz.
            <br />
            Domla gapiradi — siz kuzatasiz.
            <br />
            Natija? — yo‘q.
            <br />
            <br /> Algo School bu tizimni butunlay o‘zgartiradi.
          </p>
          <div>
            <p className="text-[#262626] text-[14px] sm:text-[24px] md:text-[28px] font-bold text-left capitalize">
              Bu yerda siz:
            </p>
            <div className="md:pl-45 pl-0">
              <p className="text-[#262626] text-[14px] sm:text-[24px] md:text-[28px] font-bold text-left capitalize">
                ❌ tinglamaysiz — ✅ yechasiz <br /> ❌ yodlamaysiz — ✅
                tushunasiz
                <br />❌ o‘qimaysiz — ✅ qurasiz
                <br /> ❌ nazariyada qolmaysiz — ✅ natijaga chiqasiz
              </p>
            </div>
          </div>
          <p className="text-[#262626] text-[14px] sm:text-[24px] md:text-[28px] font-[400] text-left capitalize">
            90 KUNDA NATIJA FORMULASI: <br />
            <br />
            ✅ C++ tilini asosidan to‘liq tushunasiz <br /> ✅ Codeforces’da
            1200+ reytingga chiqasiz <br /> ✅ Algoritmlarni amalda ishlatasiz{" "}
            <br /> ✅ Robocontest’da real masalalar yechasiz <br /> ✅ Mentor
            sizni shaxsan kuzatib, xatolaringizni to‘g‘rilaydi <br /> 3 oy
            ichida — siz hozir yodlayotgan kodni tushunib yozasiz. <br /> 6 oy
            ichida — siz o‘sha kodni boshqalarga o‘rgata olasiz.
          </p>
          <div>
            <p className="text-[#262626] text-[14px] sm:text-[24px] md:text-[28px] font-[400] text-left capitalize">
              Nega bu ishlaydi?
            </p>
            <p className="text-[#262626] text-[14px] sm:text-[24px] md:text-[28px] font-[400] text-left capitalize">
              <span className="font-bold">
                1. Mentorlar — amaliy chempionlar.
              </span>
              <br /> Nazariy domlalar emas, balki musobaqa g'oliblari va ishlab
              chiquvchilar.
            </p>
            <p className="text-[#262626] text-[14px] sm:text-[24px] md:text-[28px] font-[400] text-left capitalize">
              <span className="font-bold">
                2. Har dars — real masalaga bog‘langan.
              </span>
              <br /> Teoriya emas — haqiqiy kod, haqiqiy natija.
            </p>
            <p className="text-[#262626] text-[14px] sm:text-[24px] md:text-[28px] font-[400] text-left capitalize">
              <span className="font-bold">33. Shaxsiy kuzatuv tizimi.</span>
              <br /> Haftalik feedback, progress jadvali, va mentor tahlili.
            </p>
            <p className="text-[#262626] text-[14px] sm:text-[24px] md:text-[28px] font-[400] text-left capitalize">
              <span className="font-bold">4. Jamoaviy muhit.</span>
              <br /> Har guruh — kichik startap kabi. Siz o‘rganasiz, hamkorlik
              <br />
              Qilasiz, o‘sasiz.
            </p>
            <p className="text-[#262626] text-[14px] sm:text-[24px] md:text-[28px] font-[400] text-left capitalize">
              <span className="font-bold">5.Robocontest integratsiyasi.</span>
              <br /> Bu shunchaki kurs emas — bu milliy reyting tizimi bilan{" "}
              <br />
              bog‘langan dastur.
            </p>
          </div>
          <p className="text-[#262626] text-[14px] sm:text-[24px] md:text-[28px] font-[400] text-left capitalize">
            🧾 ISBOTLAR <br /> ✅ 150 000+ foydalanuvchi Robocontest’da o‘qigan
            <br /> ✅ $500 000+ xalqaro mukofot yutgan jamoalar <br /> ✅
            “Sahiya” — BAA va Qatarda ishlatilayotgan ijtimoiy loyiha <br /> ✅
            “AirPilot” — $100 000 mukofotli global ta’lim o‘yini <br /> ✅
            Shogirdlar — Microsoft, Google, Yaponiya, Koreya, <br /> Germaniyada
            ishlaydi
            <br />
            <br /> “Biz gap bilan emas —{" "}
            <span className="font-bold">natija bilan gaplashamiz.”</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
