import projects1 from "../../assets/projects1.png";

const Projects = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-[100px] text-center flex flex-col gap-[60px]">
      <h3 className="uppercase leading-tight sm:leading-snug md:leading-[1.2] lg:leading-[1.3] text-[#262626] text-[20px] sm:text-5xl md:text-[54px] lg:text-[54px] font-semibold">
        <span className="bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] bg-clip-text text-transparent">
          BIZ YARATGAN DASTURLARIMIZ
        </span>
      </h3>

      <div className="p-[2px] rounded-[12px] bg-gradient-to-r from-[#1FB3F5] to-[#6651FF]">
        <div className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[60px] py-[42px] px-[35px] rounded-[12px] bg-white">
          <img
            src={projects1}
            alt="Image"
            className="max-w-[375px] w-full h-auto rounded-[8px]"
          />
          <div>
            <h3 className="text-left font-semibold text-[20px] sm:text-[22px] text-[#262626]">
              🔹 ROBOCONTEST.UZ — O‘zbekistonning №1 algoritmlash platformasi
            </h3>
            <p className="capitalize text-left text-[#262626] font-[400] text-[16px] sm:text-[18px] mt-3">
              💻 153 000+ foydalanuvchi <br /> 🧩 8 000 000+ yechilgan masalalar
              <br /> 📚 1200+ algoritmik topshiriqlar <br />
              🏅 270+ olimpiadalar o‘tkazilgan, 50+ xalqaro medal
            </p>
            <p className="capitalize text-left text-[#262626] font-[400] text-[16px] sm:text-[18px] mt-3">
              Shu platformada yuzlab o‘quvchilar “0 dan” boshlab dasturchilikka
              kirib kelgan. Bugun ular Google, Microsoft va IT Park
              kompaniyalarida ishlamoqda.
            </p>
          </div>
        </div>
      </div>

      <div className="p-[2px] rounded-[12px] bg-gradient-to-r from-[#1FB3F5] to-[#6651FF]">
        <div className="flex flex-col lg:flex-row">
          {/* Card 1 */}
          <div className="flex flex-col items-center py-[40px] px-[20px] rounded-t-[12px] lg:rounded-l-[12px] lg:rounded-tr-none bg-white w-full">
            <iframe
              src="https://www.youtube.com/embed/6rdRvh6tTa4"
              title="YouTube video player"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="max-w-[450px] w-full h-[253px] rounded-[8px]"
            ></iframe>

            <div>
              <h3 className="text-left font-semibold mt-[40px] text-[14px] sm:text-[22px] text-[#262626]">
                ✈️AIRPILOT — TA’LIM VA O‘YINNI BIRLASHTIRGAN GLOBAL LOYIHA
              </h3>
              <p className="text-left mt-[26px] capitalize text-[#262626] font-[400] text-[12px] sm:text-[18px]">
                🔻$100 000 Global Tech Award g‘olibi <br />
                🔻 “Simulyatsiya orqali o‘rganish” tajribasini yaratadi <br />
                🔻Hozirda ta’lim va gaming industriyasiga kiritilmoqda
              </p>
              <p className="text-left mt-[35px] capitalize text-[#262626] font-[400] text-[12px] sm:text-[18px]">
                O‘quvchi endi o‘rganmaydi —{" "}
                <span className="font-bold">tajriba qiladi.</span> <br />
                “AirPilot” — kelajakdagi interaktiv ta’limning boshlanishi.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center py-[40px] px-[20px] rounded-b-[12px] lg:rounded-r-[12px] lg:rounded-bl-none bg-white w-full">
            <iframe
              src="https://www.youtube.com/embed/ZlRVMOKZ6qQ"
              title="YouTube video player"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="max-w-[450px] w-full h-[253px] rounded-[8px]"
            ></iframe>

            <div>
              <h3 className="text-left mt-[20px] font-semibold text-[14px] sm:text-[22px] text-[#262626]">
                🧠SAHIYA — Nuqsoni bor insonlar uchun “sun’iy intellekt” orqali
                ishlaydigan platforma
              </h3>
              <p className="my-[20px] text-left capitalize text-[#262626] font-[400] text-[12px] sm:text-[18px]">
                🔻Ovoz tahlili orqali o‘qituvchi AI dastur <br />
                🔻 BAA va QATAR ta’lim tizimlarida qo‘llanmoqda <br />
                🔻100 % imkoniyati cheklangan insonlarga moslashtirilgan <br />
                🔻IT Park rezidenti, xalqaro eksport loyihasi
              </p>
              <p className="text-left capitalize text-[#262626] font-[400] text-[12px] sm:text-[18px] mt-3">
                <span className="font-bold">“Sahiya”</span> — imkoniyatni
                tiklaydigan dastur... <br /> Har bir inson, hatto ovoz chiqara
                olmaydiganlar yoki ko'ra olmaydiganlar ham, o'rganish imkoniga
                ega.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
