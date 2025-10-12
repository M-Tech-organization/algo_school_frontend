import { useState } from "react";
import { ChevronDown, LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router-dom";
import register_bottom from "../../../assets/register_bottom.png";
import card from "../../../assets/card.svg";
import card2 from "../../../assets/card2.svg";
import upload from "../../../assets/upload.png";
import click from "../../../assets/click.svg";

const RegisterBottom = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "+998",
    courseType: "Course Type",
    open: false,
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Validatsiya funksiyalari
  const validateFullName = (name) => {
    if (!name.trim()) {
      return "To'liq ism kiritish majburiy";
    }
    if (name.trim().length < 3) {
      return "Ism kamida 3 ta belgidan iborat bo'lishi kerak";
    }
    if (!/^[a-zA-Z\s\u0400-\u04FF]+$/.test(name)) {
      return "Ism faqat harflardan iborat bo'lishi kerak";
    }
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone || phone === "+998") {
      return "Telefon raqam kiritish majburiy";
    }
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 12) {
      return "Telefon raqam to'liq emas (12 raqam bo'lishi kerak)";
    }
    if (!phone.startsWith("+998")) {
      return "Telefon raqam +998 bilan boshlanishi kerak";
    }
    return "";
  };

  const validateCourseType = (courseType) => {
    if (courseType === "Course Type") {
      return "Kurs turini tanlang";
    }
    return "";
  };

  const validatePaymentMethod = (method) => {
    if (!method) {
      return "To'lov usulini tanlang";
    }
    return "";
  };

  const validateFile = (file, method) => {
    if (method === "Card" && !file) {
      return "To'lov chekini yuklash majburiy";
    }
    if (file) {
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        return "Fayl hajmi 5MB dan oshmasligi kerak";
      }
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
        "application/pdf",
      ];
      if (!allowedTypes.includes(file.type)) {
        return "Faqat rasm (JPG, PNG, GIF) yoki PDF yuklash mumkin";
      }
    }
    return "";
  };

  // Real-time validatsiya
  const handleFullNameChange = (value) => {
    setFormData({ ...formData, fullName: value });
    const error = validateFullName(value);
    setErrors({ ...errors, fullName: error });
  };

  const handlePhoneChange = (value) => {
    // Faqat raqam va + belgisini qabul qilish
    let cleanValue = value.replace(/[^\d+]/g, "");

    // +998 ni saqlab qolish
    if (!cleanValue.startsWith("+998")) {
      cleanValue = "+998";
    }

    // Maksimal uzunlik: +998 (4) + 9 raqam = 13
    if (cleanValue.length > 13) {
      cleanValue = cleanValue.slice(0, 13);
    }

    setFormData({ ...formData, phone: cleanValue });
    const error = validatePhone(cleanValue);
    setErrors({ ...errors, phone: error });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const error = validateFile(file, paymentMethod);
      if (error) {
        setErrors({ ...errors, file: error });
        setUploadedFile(null);
      } else {
        setUploadedFile(file);
        setErrors({ ...errors, file: "" });
        setMessage("");
      }
    }
  };

  const handlePaymentMethodChange = (method) => {
    if (paymentMethod === method) {
      setPaymentMethod("");
      setIsVisible(false);
      setUploadedFile(null);
      setErrors({ ...errors, paymentMethod: "", file: "" });
    } else {
      setPaymentMethod(method);
      setIsVisible(method === "Card");
      const error = validatePaymentMethod(method);
      setErrors({ ...errors, paymentMethod: error });
    }
  };

  // Formani tekshirish
  const validateForm = () => {
    const newErrors = {};

    newErrors.fullName = validateFullName(formData.fullName);
    newErrors.phone = validatePhone(formData.phone);
    newErrors.courseType = validateCourseType(formData.courseType);
    newErrors.paymentMethod = validatePaymentMethod(paymentMethod);
    newErrors.file = validateFile(uploadedFile, paymentMethod);

    setErrors(newErrors);

    // Agar biror xato bo'lsa false qaytarish
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    // Formani validatsiya qilish
    if (!validateForm()) {
      setMessage("Iltimos, barcha maydonlarni to'g'ri to'ldiring!");
      setIsLoading(false);
      return;
    }

    try {
      const submitData = new FormData();
      submitData.append("full_name", formData.fullName);
      submitData.append("phone", formData.phone);
      submitData.append("course_type", formData.courseType);
      submitData.append("payment_method", paymentMethod);

      if (uploadedFile) {
        submitData.append("payment_screenshot", uploadedFile);
      }

      submitData.append("verified", false);

      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/payment/`,
        {
          method: "POST",
          body: submitData,
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        console.error("Backend xatosi:", responseData);
        if (responseData.payment_method) {
          setMessage(`To'lov usuli xatosi: ${responseData.payment_method[0]}`);
        } else if (responseData.course_type) {
          setMessage(`Kurs turi xatosi: ${responseData.course_type[0]}`);
        } else {
          setMessage(`Xatolik: ${JSON.stringify(responseData)}`);
        }
        setIsLoading(false);
        return;
      }

      navigate("/thanks");
    } catch (error) {
      console.error("Xatolik:", error);
      setMessage("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
    } finally {
      setIsLoading(false);
    }
  };

  const canSubmit = () => {
    return (
      !isLoading &&
      formData.fullName.trim() &&
      formData.phone !== "+998" &&
      formData.courseType !== "Course Type" &&
      paymentMethod &&
      (paymentMethod !== "Card" || uploadedFile) &&
      !Object.values(errors).some((error) => error !== "")
    );
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
        <div className="rounded-[20px] p-[2px] bg-gradient-to-r from-[#1FB3F5] to-[#6651FF]">
          <div className="bg-white rounded-[18px] px-5 sm:px-6 md:px-10 lg:px-12 xl:px-[50px] py-[30px] sm:py-6 md:py-8 lg:py-10 xl:py-[60px]">
            <h3 className="text-[#1A1A1A] text-[20px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-medium text-center mb-[30px]">
              Lorem ipsum dolor sit amet consectetur.
            </h3>

            <p className="text-[#4C4C4D] text-[12px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-[400] text-left mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              consectetur adipiscing elit.
            </p>

            {message && (
              <div
                className={`mb-4 p-3 rounded-md text-center ${
                  message.includes("Muvaffaqiyatli")
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-red-100 text-red-700 border border-red-300"
                }`}
              >
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* F.I.Sh Input */}
              <div className="mt-[30px]">
                <label className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium text-[#4C4C4D] mb-2 block">
                  F.I.Sh
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="F.I.Sh"
                    value={formData.fullName}
                    onChange={(e) => handleFullNameChange(e.target.value)}
                    className={`w-full p-[16px] border rounded-[8px] focus:outline-none text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-[#666666] ${
                      errors.fullName
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-400 focus:border-blue-500"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>
              </div>

              {/* Telefon Raqam Input */}
              <div className="mt-[30px]">
                <label className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium text-[#4C4C4D] mb-2 block">
                  Telefon Raqam
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  placeholder="+998 90 123 45 67"
                  className={`w-full p-[16px] border rounded-[8px] focus:outline-none text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-[#666666] bg-white ${
                    errors.phone
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-400 focus:border-blue-500"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
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
                    className={`w-full p-[16px] border rounded-[8px] flex justify-between items-center cursor-pointer bg-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-[#666666] ${
                      errors.courseType ? "border-red-500" : "border-gray-400"
                    }`}
                  >
                    {formData.courseType}
                    <ChevronDown
                      className="w-6 h-6 transition-transform duration-300"
                      style={{
                        transform: formData.open
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    />
                  </div>

                  {formData.open && (
                    <ul className="absolute z-50 w-full mt-1 bg-white rounded-[8px] shadow-lg overflow-hidden border border-gray-200">
                      {["Junior", "Middle", "Senior", "Master"].map(
                        (option, idx) => (
                          <li
                            key={idx}
                            onClick={() => {
                              setFormData({
                                ...formData,
                                courseType: option,
                                open: false,
                              });
                              setErrors({ ...errors, courseType: "" });
                            }}
                            className="px-4 py-2 cursor-pointer transition-all hover:text-white hover:bg-gradient-to-r hover:from-[#1FB3F5] hover:to-[#6651FF]"
                          >
                            {option}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                  {errors.courseType && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.courseType}
                    </p>
                  )}
                </div>
              </div>

              <p className="text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[24px] font-[400] text-[#4C4C4D]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              {/* Payment Methods */}
              <div className="space-y-2">
                <div className="flex gap-9 mt-10">
                  <button
                    type="button"
                    onClick={() => handlePaymentMethodChange("Card")}
                    className="cursor-pointer flex-1 flex flex-col items-center justify-center gap-3.5 py-3 rounded-[8px] transition-all relative group"
                  >
                    <div
                      className={`absolute inset-0 rounded-lg transition-all ${
                        paymentMethod === "Card"
                          ? "bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] p-[2px]"
                          : "border-2 border-gray-200 group-hover:border-0 group-hover:bg-gradient-to-r group-hover:from-[#1FB3F5] group-hover:to-[#6651FF] group-hover:p-[2px]"
                      }`}
                    >
                      <div
                        className={`w-full h-full rounded-lg ${
                          paymentMethod === "Card"
                            ? "bg-gradient-to-b from-[#F0F3FF] to-[#D9ECFF]"
                            : "bg-white"
                        }`}
                      ></div>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-3.5">
                      <img
                        loading="lazy"
                        src={card}
                        alt="Card"
                        className="w-full max-w-[50px] sm:max-w-[90px] md:max-w-[100px] lg:max-w-[106px] h-auto"
                      />
                      <p className="text-[#262626] text-[10px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium">
                        Karta orqali to'lov
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    disabled={true}
                    className="cursor-not-allowed flex-1 flex flex-col items-center justify-center gap-3.5 py-3 rounded-[8px] transition-all relative bg-[#707070] opacity-50"
                  >
                    <div className="absolute inset-0 rounded-lg border-2 border-gray-200 bg-[#707070]"></div>
                    <div className="relative z-10 flex flex-col items-center gap-3.5">
                      <img
                        loading="lazy"
                        src={click}
                        alt="Click"
                        className="w-full max-w-[60px] sm:max-w-[100px] md:max-w-[110px] lg:max-w-[126px] h-auto opacity-70"
                      />
                      <p className="text-white text-[10px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium opacity-70">
                        Click orqali to'lov
                      </p>
                      <LockKeyhole className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white" />
                    </div>
                  </button>
                </div>
                {errors.paymentMethod && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.paymentMethod}
                  </p>
                )}
              </div>

              {isVisible && (
                <div>
                  <div className="rounded-lg p-[2px] bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] mt-[40px]">
                    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 lg:p-[30px] flex flex-col items-start gap-[20px]">
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[22px] font-medium text-[#4C4C4D] mb-3">
                        Karta raqami
                      </p>
                      <div className="bg-gradient-to-b from-[#D9ECFF] to-[#F0F3FF] w-full p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                          <img
                            loading="lazy"
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
                              "ABC Company" MCHJ
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg p-[2px] bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] mt-8">
                    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 lg:p-10">
                      <label className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[22px] font-medium text-[#4C4C4D] mb-6 block">
                        Chekni yuklang *
                      </label>
                      <div className="flex gap-3 items-center bg-gradient-to-b from-[#F0F3FF] to-[#D9ECFF] w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-14 rounded-lg">
                        <label className="flex-1 flex items-center justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 cursor-pointer">
                          <img
                            loading="lazy"
                            src={upload}
                            alt="Upload"
                            className="w-[24px] sm:w-[28px] md:w-[32px] lg:w-[34px] h-[24px] sm:h-[28px] md:h-[32px] lg:h-[34px]"
                          />
                          <span className="text-[10px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-[#262626] font-medium truncate">
                            {uploadedFile ? uploadedFile.name : "Upload file"}
                          </span>
                          <input
                            type="file"
                            className="hidden"
                            onChange={handleFileUpload}
                            accept="image/jpeg,image/jpg,image/png,image/gif,application/pdf"
                          />
                        </label>
                        <div className="border-dashed border-2 border-gray-400 p-2 rounded-[8px] bg-white flex-shrink-0">
                          <button
                            type="button"
                            onClick={() =>
                              document
                                .querySelector('input[type="file"]')
                                .click()
                            }
                            className="px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-[6px] text-[10px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-[400] hover:from-blue-600 hover:to-purple-700 transition-all"
                          >
                            Browse file
                          </button>
                        </div>
                      </div>
                      {errors.file && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.file}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-center sm:justify-end mt-[40px]">
                <button
                  type="submit"
                  disabled={!canSubmit()}
                  className="uppercase w-full max-w-[251px] text-center py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-[6px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-semibold hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Yuborilmoqda..." : "Verify"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterBottom;
