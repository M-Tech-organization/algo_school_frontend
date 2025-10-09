import { useState } from "react";
import { ChevronDown } from "lucide-react";
import register_bottom from "../../../assets/register_bottom.png";
import card from "../../../assets/card.svg";
import card2 from "../../../assets/card2.svg";
import upload from "../../../assets/upload.png";
import click from "../../../assets/click.svg";
import { LockKeyhole } from "lucide-react"; // icon import

const RegisterBottom = () => {
  const [formData, setFormData] = useState({
    link: "",
    reason: "+998",
    courseType: "Course Type",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // div ko'rinishi holati

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file.name);
    }
  };

  return (
    <div
      className="w-full max-h-[1971px] flex items-center justify-center px-4 py-[100px]"
      style={{
        backgroundImage: `url(${register_bottom})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[760px] w-full">
        {/* Gradient border wrapper */}
        <div className="rounded-[20px] p-[2px] bg-gradient-to-r from-[#1FB3F5] to-[#6651FF]">
          <div className="bg-white rounded-[18px] px-5 sm:px-6 md:px-10 lg:px-12 xl:px-[50px] py-[30px] sm:py-6 md:py-8 lg:py-10 xl:py-[60px]">
            {/* Header */}
            <h3 className="text-[#1A1A1A] text-[20px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-medium text-center mb-[30px]">
              Lorem ipsum dolor sit amet consectetur.
            </h3>

            <p className="text-[#4C4C4D] text-[12px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-[400] text-left mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              consectetur adipiscing elit.
            </p>

            {/* Form */}
            <div className="space-y-5">
              {/* F.I.Sh Input */}
              <div className="mt-[30px]">
                <label className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium text-[#4C4C4D] mb-2 block">
                  F.I.Sh
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter"
                    value={formData.link}
                    onChange={(e) =>
                      setFormData({ ...formData, link: e.target.value })
                    }
                    className="w-full p-[16px] border border-gray-400 rounded-[8px] focus:outline-none focus:border-blue-500 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-[#666666]"
                  />
                </div>
              </div>

              {/* Telefon Raqam Input */}
              <div className="mt-[30px]">
                <label className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium text-[#4C4C4D] mb-2 block">
                  Telefon Raqam
                </label>
                <input
                  type="tel"
                  value={formData.reason}
                  onChange={(e) =>
                    setFormData({ ...formData, reason: e.target.value })
                  }
                  placeholder="+998 90 123 45 67"
                  className="w-full p-[16px] border border-gray-400 rounded-[8px] focus:outline-none focus:border-blue-500 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-[#666666] bg-white"
                />
              </div>

              {/* Course Type Custom Dropdown */}
              <div className="mb-[40px]">
                <label className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium text-[#4C4C4D] mb-2 block">
                  Course Type
                </label>
                <div className="relative">
                  <div
                    onClick={() =>
                      setFormData({ ...formData, open: !formData.open })
                    }
                    className="w-full p-[16px] border border-gray-400 rounded-[8px] flex justify-between items-center cursor-pointer bg-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-[#666666]"
                  >
                    {formData.courseType}
                    <ChevronDown
                      className="w-6 h-6 transition-transform duration-300"
                      style={{
                        transform: formData.open
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    />{" "}
                  </div>

                  {formData.open && (
                    <ul className="absolute z-100 w-full mt-1 bg-white rounded-[8px] shadow-lg overflow-hidden">
                      {[
                        "Junior",
                        "Middle",
                        "Senior",
                        "Master",
                      ].map((option, idx) => (
                        <li
                          key={idx}
                          onClick={() =>
                            setFormData({
                              ...formData,
                              courseType: option,
                              open: false,
                            })
                          }
                          className="px-4 py-2 cursor-pointer transition-all hover:text-white hover:bg-gradient-to-r hover:from-[#1FB3F5] hover:to-[#6651FF]"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[24px] font-[400] text-[#4C4C4D]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              {/* Payment Methods */}
              <div className="flex gap-9 mt-10">
                {/* Card */}
                <button
                  onClick={() => {
                    if (paymentMethod === "card") {
                      // agar Card allaqachon active bo'lsa → yopish
                      setPaymentMethod("");
                      setIsVisible(false);
                    } else {
                      // aks holda → Card active va div ochilsin
                      setPaymentMethod("card");
                      setIsVisible(true);
                    }
                  }}
                  className="cursor-pointer flex-1 flex flex-col items-center justify-center gap-3.5 py-3 rounded-[8px] transition-all relative group"
                >
                  <div
                    className={`absolute inset-0 rounded-lg transition-all ${
                      paymentMethod === "card"
                        ? "bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] p-[2px]"
                        : "border-2 border-gray-200 group-hover:border-0 group-hover:bg-gradient-to-r group-hover:from-[#1FB3F5] group-hover:to-[#6651FF] group-hover:p-[2px]"
                    }`}
                  >
                    <div
                      className={`w-full h-full rounded-lg ${
                        paymentMethod === "card"
                          ? "bg-gradient-to-b from-[#F0F3FF] to-[#D9ECFF]"
                          : "bg-white"
                      }`}
                    ></div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center gap-3.5">
                    <img
                      src={card}
                      alt="Card"
                      className="w-full max-w-[50px] sm:max-w-[90px] md:max-w-[100px] lg:max-w-[106px] h-auto"
                    />
                    <p className="text-[#262626] text-[10px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium">
                      Karta orqali to'lov
                    </p>
                  </div>
                </button>

                {/* Click */}
                <button
                  disabled={true}
                  className="cursor-not-allowed flex-1 flex flex-col items-center justify-center gap-3.5 py-3 rounded-[8px] transition-all relative bg-[#707070] opacity-50"
                >
                  {/* Background / Border */}
                  <div className="absolute inset-0 rounded-lg border-2 border-gray-200 bg-[#707070]"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center gap-3.5">
                    <img
                      src={click}
                      alt="Click"
                      className="w-full max-w-[60px] sm:max-w-[100px] md:max-w-[110px] lg:max-w-[126px] h-auto opacity-70"
                    />
                    <p className="text-white text-[10px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium opacity-70">
                      Click orqali to'lov
                    </p>

                    {/* Lock Icon over content */}
                    <LockKeyhole className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white" />
                  </div>
                </button>
              </div>

              {isVisible && (
                <div>
                  {/* Card Info Box with Gradient Border */}
                  <div className="rounded-lg p-[2px] bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] mt-[40px]">
                    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 lg:p-[30px] flex flex-col items-start gap-[20px]">
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[22px] font-medium text-[#4C4C4D] mb-3">
                        Karta raqami
                      </p>
                      <div className="bg-gradient-to-b from-[#D9ECFF] to-[#F0F3FF] w-full p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={card2}
                            alt="Card"
                            className="w-[36px] h-[36px]"
                          />
                          <p className="text-[10px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium text-[#262626]">
                            Card
                          </p>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-[30px] mb-[14px]">
                            <p className="text-[10px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-[400] text-[#1A1A1A]">
                              Karta raqami:
                            </p>
                            <p className="text-[10px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium text-[#1A1A1A]">
                              1234 0000 1234 1232
                            </p>
                          </div>
                          <div className="flex items-center gap-[20px]">
                            <p className="text-[10px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-[400] text-[#1A1A1A]">
                              Qabul qiluvchi:
                            </p>
                            <p className="text-[10px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium text-[#1A1A1A]">
                              “ABC Company” MCHJ
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* File Upload with Gradient Border */}
                  <div className="rounded-lg p-[2px] bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] mt-8">
                    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 lg:p-10">
                      <label className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[22px] font-medium text-[#4C4C4D] mb-6 block">
                        Chekni yuklang
                      </label>
                      <div className="flex gap-3 items-center bg-gradient-to-b from-[#F0F3FF] to-[#D9ECFF] w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-14 rounded-lg">
                        <label className="flex-1 flex items-center justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 cursor-pointer">
                          <img
                            src={upload}
                            alt="Upload"
                            className="w-[24px] sm:w-[28px] md:w-[32px] lg:w-[34px] h-[24px] sm:h-[28px] md:h-[32px] lg:h-[34px]"
                          />
                          <span className="text-[10px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-[#262626] font-medium">
                            {uploadedFile || "Upload file"}
                          </span>
                          <input
                            type="file"
                            className="hidden"
                            onChange={handleFileUpload}
                          />
                        </label>
                        <div className="border-dashed border-2 border-gray-400 p-2 rounded-[8px] bg-white flex-shrink-0">
                          <button className="px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-[6px] text-[10px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-[400] hover:from-blue-600 hover:to-purple-700 transition-all">
                            Browse file
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center sm:justify-end mt-[40px]">
                <button className="uppercase w-full max-w-[251px] text-center py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-[6px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterBottom;

