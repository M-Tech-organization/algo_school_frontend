import footer_logo from "../../assets/footer_logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#084FC7] to-[#7F56D9] rounded-t-lg">
      {/* Main container */}
      <div className="max-w-[1000px] mx-auto px-4 py-10 flex flex-col md:flex-row items-start md:items-center justify-between text-white gap-10 md:gap-[100px]">
        {/* Logo & Text */}
        <div className="max-w-[310px] w-full md:w-auto mb-6 md:mb-0">
          <img
            src={footer_logo}
            alt="Logo"
            className="mb-4 md:mb-6 max-w-[150px] w-full h-auto"
          />
          <p className="text-[14px] sm:text-[16px] leading-relaxed">
            Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10 md:gap-[38px] w-full">
          {/* Links */}
          <div className="flex-1 min-w-[140px]">
            <h3 className="text-[18px] sm:text-[22px] font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 text-[14px] sm:text-[16px]">
              {["Result", "Algo School Info", "About Expert", "FAQ"].map(
                (link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:via-[#8FD9FA] hover:to-[#1FB3F5] hover:bg-clip-text hover:text-transparent"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="flex-1 w-full md:min-w-[380px]">
            <h3 className="text-[18px] sm:text-[22px] font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3 text-[14px] sm:text-[16px]">
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone size={24} className="flex-shrink-0" />
                <a
                  href="tel:(209)555-0104"
                  className="text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:via-[#8FD9FA] hover:to-[#1FB3F5] hover:bg-clip-text hover:text-transparent break-words"
                >
                  (209) 555-0104
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail size={24} className="flex-shrink-0" />
                <a
                  href="mailto:michelle.rivera@example.com"
                  className="text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:via-[#8FD9FA] hover:to-[#1FB3F5] hover:bg-clip-text hover:text-transparent break-words"
                >
                  michelle.rivera@example.com
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <MapPin size={24} className="flex-shrink-0" />
                <a
                  href="#"
                  className="text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:via-[#8FD9FA] hover:to-[#1FB3F5] hover:bg-clip-text hover:text-transparent break-words"
                >
                  2715 Ash Dr. San Jose, South Dakota 83475
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1000px] mt-6 px-4 mx-auto border-t-[1px] border-white text-center py-4 text-sm opacity-90">
        <h3 className="text-white text-[14px] sm:text-[16px] font-[500]">
          © 2025 | All Rights Reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
