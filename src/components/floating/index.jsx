import { useState } from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { Headset, X } from "lucide-react";

const FloatingMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed flex flex-col items-end gap-3 z-50 bottom-8 right-8">
      <div className="flex flex-col items-center z-50">
        {/* Social / Chat Icons */}
        <div className="flex flex-col items-center gap-3 mb-4">
          {["telegram", "facebook", "instagram", "phone", "chat"].map(
            (item, index) => {
              const hrefs = {
                telegram: "https://t.me/yourtelegram",
                facebook: "https://facebook.com/yourfacebook",
                instagram: "https://instagram.com/yourinstagram",
                phone: "tel:+998901234567",
                chat: "https://t.me/yourtelegramchat",
              };
              const colors = {
                telegram: "bg-blue-500 hover:bg-blue-600",
                facebook: "bg-blue-700 hover:bg-blue-800",
                instagram: "bg-pink-500 hover:bg-pink-600",
                phone: "bg-green-500 hover:bg-green-600",
                chat: "bg-gradient-to-r from-[#1FB3F5] to-[#6651FF] hover:opacity-90",
              };
              const Icons = {
                telegram: FaTelegramPlane,
                facebook: FaFacebookF,
                instagram: FaInstagram,
                phone: FaPhoneAlt,
                chat: IoMdChatboxes,
              };
              const Icon = Icons[item];

              return (
                <a
                  key={item}
                  href={hrefs[item]}
                  target={item === "phone" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={`Go to ${item}`} // ✅ qo‘shildi
                  title={`Go to ${item}`} // ✅ SEO uchun ham foydali
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-white shadow-lg transition-all duration-500 
    ${colors[item]} 
    ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Icon size={22} />
                </a>
              );
            }
          )}
        </div>

        {/* Main Floating Button */}
        <div className="relative w-[64px] h-[64px]">
          {/* Tolqin animatsiyasi (faqat open === false bo'lsa) */}
          {!open && (
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] opacity-30 animate-ping"></span>
          )}

          <button
            aria-label="FloatingBtn"
            onClick={() => setOpen(!open)}
            className={`cursor-pointer relative w-[64px] h-[64px] flex items-center justify-center rounded-full shadow-lg transition-transform duration-300
              ${
                open
                  ? "bg-[#F0F0F0]"
                  : "bg-gradient-to-r from-[#6651FF] to-[#1FB3F5] text-white"
              }
            `}
          >
            {open ? <X size={35} /> : <Headset size={35} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;
