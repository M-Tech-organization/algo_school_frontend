import { useState } from "react";
import { Check, X, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import api from "../../api/axios"; // sizning api.js faylingiz

const CourseTypes = () => {
  const [activeTab, setActiveTab] = useState("junior");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
  });

  const navigate = useNavigate();

  const courses = {
    junior: {
      title: "Lorem ipsum dolor sit",
      fixed_price: "$19",
      price: "$0",
      period: "month",
      features: [
        "Access to selected free courses.",
        "Limited course materials and resources.",
        "Basic community support.",
        "No certification upon completion.",
        "Ad-supported platform.",
      ],
    },
    middle: {
      title: "Professional Package",
      fixed_price: "$39",
      price: "$29",
      period: "month",
      features: [
        "Access to all standard courses.",
        "Full course materials and resources.",
        "Priority community support.",
        "Certification upon completion.",
        "Ad-free experience.",
      ],
    },
    senior: {
      title: "Advanced Learning",
      fixed_price: "$89",
      price: "$59",
      period: "month",
      features: [
        "Access to all courses including advanced.",
        "Premium materials and resources.",
        "1-on-1 mentorship sessions.",
        "Professional certification.",
        "Career guidance and support.",
      ],
    },
    master: {
      title: "Master Package",
      fixed_price: "$99",
      price: "$99",
      period: "month",
      features: [
        "Unlimited access to all courses.",
        "Exclusive master-level content.",
        "Personal mentor assigned.",
        "Industry-recognized certification.",
        "Job placement assistance.",
      ],
    },
  };

  const tabs = [
    { id: "junior", label: "Junior" },
    { id: "middle", label: "Middle" },
    { id: "senior", label: "Senior" },
    { id: "master", label: "Master" },
  ];

  const currentCourse = courses[activeTab];

  // Input o'zgarishini handle qilish
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(""); // Xatolikni tozalash
  };

  // Phone number formatlash (opsional)
  const formatPhoneNumber = (phone) => {
    // Agar telefon raqami +998 bilan boshlanmasa, qo'shish
    if (!phone.startsWith("+998")) {
      return "+998" + phone.replace(/\D/g, "");
    }
    return phone;
  };

  // Form validation
  const validateForm = () => {
    if (!formData.full_name.trim()) {
      setError("Iltimos, to'liq ismingizni kiriting");
      return false;
    }
    if (!formData.phone.trim()) {
      setError("Iltimos, telefon raqamingizni kiriting");
      return false;
    }
    // Telefon raqam uzunligini tekshirish
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length < 9) {
      setError("Telefon raqam noto'g'ri formatda");
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    // form validatsiya
    if (!validateForm()) {
      toast.error("Iltimos, barcha maydonlarni to'g'ri to'ldiring");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await api.post("/register/", {
        full_name: formData.full_name,
        phone: formatPhoneNumber(formData.phone),
        course_type: activeTab.charAt(0).toUpperCase() + activeTab.slice(1),
      });

      console.log("Registration success:", response.data);
      toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
      setSuccess(true);

      // 1.5 sekunddan keyin payment sahifasiga o'tish
      setTimeout(() => {
        navigate("/payment", { state: { userData: response.data } });
      }, 1000);
    } catch (err) {
      console.error("Registration error:", err);
      const errorMessage =
        err.response?.data?.message ||
        "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Modalni ochish
  const handleOpenModal = () => {
    setIsModalOpen(true);
    setFormData({ full_name: "", phone: "" });
    setError("");
    setSuccess(false);
  };

  // Modalni yopish
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ full_name: "", phone: "" });
    setError("");
    setSuccess(false);
  };

  return (
    <div id="course" className="bg-gray-50 py-[100px] px-4">
      {/* React Hot Toast container */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#363636",
            fontSize: "16px",
            fontWeight: "500",
            padding: "16px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            COURSE
          </span>{" "}
          <span className="text-gray-800">TYPES</span>
        </h1>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          {/* Tabs */}
          <div
            className="
  flex bg-[#D9ECFF] gap-2 p-2 rounded-2xl mb-[40px] md:mb-[60px] 
  justify-between 
  max-[375px]:overflow-x-auto 
  max-[375px]:flex-nowrap 
  max-[375px]:scrollbar-hide 
  flex-nowrap
"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-3 md:px-[70px] py-2 md:py-[16px] 
      rounded-[12px] font-semibold text-[12px] md:text-[18px] 
      transition-all ${
        activeTab === tab.id
          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
          : "text-gray-600 hover:text-gray-800 bg-[#D9ECFF]"
      }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 items-center">
            {/* Image block */}
            <div className="bg-gray-200 rounded-2xl max-w-[380px] w-full h-64 md:h-[410px] flex items-center justify-center mx-auto md:mx-0 order-first md:order-last">
              <div className="text-gray-400 text-6xl">📚</div>
            </div>

            {/* Content block */}
            <div>
              <h3 className="text-[28px] md:text-[32px] font-semibold text-[#262626] mb-4">
                {currentCourse.title}
              </h3>
              <div className="flex flex-wrap items-baseline gap-2 mb-6">
                <span className="text-[28px] md:text-[38px] line-through font-semibold text-[#FD5A5A]">
                  {currentCourse.fixed_price}
                </span>
                <span className="text-[20px] md:text-[35px]">/</span>
                <span className="text-[28px] md:text-[38px] font-bold bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] bg-clip-text text-transparent">
                  {currentCourse.price}
                </span>
                <span className="text-[#4C4C4D] text-[14px] md:text-[18px] font-medium">
                  {currentCourse.period}
                </span>
              </div>

              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {currentCourse.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <div className="mt-0.5 bg-[#DCF4FF] p-1 rounded-[4px]">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-[#4C4C4D]" />
                    </div>
                    <span className="text-[#4C4C4D] text-[14px] md:text-[18px] font-[400]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleOpenModal}
                className="relative cursor-pointer my-4 md:my-[40px] w-full max-w-[386px] h-[50px] md:h-[60px] rounded-[10px] text-white font-semibold text-[16px] md:text-[18px] overflow-hidden transition-all duration-300 group"
              >
                <span className="absolute inset-0 rounded-[10px] bg-gradient-to-r from-blue-500 to-purple-600 p-[2px]">
                  <span className="w-full h-full bg-transparent rounded-[8px] flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-[#262626]">
                    GET STARTED
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          {/* Modal orqa fonini hira qilish */}
          <div
            className="absolute inset-0 backdrop-blur-sm bg-white/30"
            onClick={handleCloseModal}
          ></div>

          {/* Modal o'zi */}
          <div className="relative bg-white w-full max-w-[750px] md:h-[510px] rounded-2xl overflow-hidden flex flex-col-reverse md:flex-row shadow-lg z-10">
            {/* Close button top-right */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-50"
              disabled={loading}
            >
              <X className="text-[#4C4C4D]" size={28} />
            </button>

            {/* Left side form */}
            <div className="w-full md:w-1/2 py-6 md:px-10 px-4 flex flex-col justify-center gap-4">
              <h3 className="text-2xl font-semibold">Register for Course</h3>
              <h3 className="text-lg text-gray-500 mb-4">
                Fill in your details
              </h3>

              <div className="flex flex-col">
                <label
                  htmlFor="fullName"
                  className="text-[#4C4C4D] text-[16px] font-medium mb-1"
                >
                  F.I.SH
                </label>
                <input
                  id="fullName"
                  name="full_name"
                  type="text"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-[#F1F1F3] rounded-[8px] focus:outline-none focus:border-blue-400"
                  disabled={loading || success}
                />
              </div>

              <div className="flex flex-col mt-3">
                <label
                  htmlFor="phone"
                  className="text-[#4C4C4D] text-[16px] font-medium mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+998901234567"
                  className="w-full p-3 border border-[#F1F1F3] rounded-[8px] focus:outline-none focus:border-blue-400"
                  disabled={loading || success}
                />
              </div>

              <button
                onClick={handleRegister}
                disabled={loading || success}
                className="w-full text-[16px] md:text-[18px] uppercase mt-4 md:mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-[8px] font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                {loading ? "Loading..." : success ? "Success!" : "Register"}
              </button>
            </div>

            {/* Right side image */}
            <div className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0 se-hide">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.jleFhbOD3BG8h1PeUIGdNAHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Modal Illustration"
                className="w-[250px] md:w-[300px] h-[150px] md:h-[330px] object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseTypes;
