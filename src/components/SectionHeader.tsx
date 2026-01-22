import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function SectionHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="p-5 container mx-auto">
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <div className="logo_name flex gap-1 items-center flex-shrink-0">
            <a href="/" className="flex gap-2 items-center">
              <div className="logo w-[40px] h-[40px] cursor-pointer bg-[#1313EC] flex items-center justify-center rounded-md">
                <svg
                  width="25"
                  height="28"
                  viewBox="0 0 25 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.12111 19.8333L2.28778 14L8.12111 8.16665L9.50653 9.55206L5.03431 14.0243L9.48223 18.4722L8.12111 19.8333ZM15.8989 19.8333L14.5135 18.4479L18.9857 13.9757L14.5378 9.52776L15.8989 8.16665L21.7322 14L15.8989 19.8333Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="ml-2 font-bold text-[18px] text-[#fff] hidden sm:inline">
                Ahmed Mahmoud
              </span>
              <span className="ml-2 font-bold text-[16px] text-[#fff] sm:hidden">
                Ahmed
              </span>
            </a>
          </div>

          {/* Navigation */}
          <Navbar />
        </div>
      </div>
    </div>
  );
}
