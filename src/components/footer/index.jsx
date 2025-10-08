import footer_logo from "../../assets/footer_logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#084FC7] to-[#7F56D9] rounded-t-lg">
      {/* Main container */}
      <div className="max-w-[1000px] mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between text-white gap-[100px]">
        {/* Logo & Text */}
        <div className="max-w-[310px]">
          <img
            src={footer_logo}
            alt="Logo"
            className="mb-[30px] max-w-[154px] w-full h-auto"
          />
          <p className="text-[16px] font-[400] text-[#FFFFFF] leading-relaxed">
            Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-[50px]">
          {/* Links */}
          <div>
            <h3 className="text-[22px] font-semibold mb-[40px]">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-[16px] font-[400]">
              <li>
                <a
                  href="#"
                  className="
      text-white
      transition-all
      duration-500
      hover:bg-gradient-to-r
      hover:from-[#FFFFFF]
      hover:via-[#8FD9FA]
      hover:to-[#1FB3F5]
      hover:bg-clip-text
      hover:text-transparent
    "
                >
                  Result
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
      text-white
      transition-all
      duration-500
      hover:bg-gradient-to-r
      hover:from-[#FFFFFF]
      hover:via-[#8FD9FA]
      hover:to-[#1FB3F5]
      hover:bg-clip-text
      hover:text-transparent
    "
                >
                  Algo School Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="
      text-white
      transition-all
      duration-500
      hover:bg-gradient-to-r
      hover:from-[#FFFFFF]
      hover:via-[#8FD9FA]
      hover:to-[#1FB3F5]
      hover:bg-clip-text
      hover:text-transparent
    "
                >
                  About Expert
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="
      text-white
      transition-all
      duration-500
      hover:bg-gradient-to-r
      hover:from-[#FFFFFF]
      hover:via-[#8FD9FA]
      hover:to-[#1FB3F5]
      hover:bg-clip-text
      hover:text-transparent
    "
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact with Icons */}
          <div>
            <h3 className="text-[22px] font-semibold mb-[40px]">Contact Us</h3>
            <ul className="flex flex-col gap-3 text-[16px] font-[400]">
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <a
                  href="tel:(209)555-0104"
                  className="
      text-white
      transition-all
      duration-500
      hover:bg-gradient-to-r
      hover:from-[#FFFFFF]
      hover:via-[#8FD9FA]
      hover:to-[#1FB3F5]
      hover:bg-clip-text
      hover:text-transparent
    "
                >
                  (209) 555-0104
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a
                  href="mailto:michelle.rivera@example.com"
                  className="
      text-white
      transition-all
      duration-500
      hover:bg-gradient-to-r
      hover:from-[#FFFFFF]
      hover:via-[#8FD9FA]
      hover:to-[#1FB3F5]
      hover:bg-clip-text
      hover:text-transparent
    "
                >
                  michelle.rivera@example.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} />
                <a
                  href="#"
                  className="
      text-white
      transition-all
      duration-500
      hover:bg-gradient-to-r
      hover:from-[#FFFFFF]
      hover:via-[#8FD9FA]
      hover:to-[#1FB3F5]
      hover:bg-clip-text
      hover:text-transparent
    "
                >
                  2715 Ash Dr. San Jose, South Dakota 83475
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1000px] mt-[40px] px-4 mx-auto border-t-[1px] border-white text-center py-5 text-sm opacity-90">
        <h3 className="text-white text-[16px] font-[500]">
          © 2025 | All Rights Reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
