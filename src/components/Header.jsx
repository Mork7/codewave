import { useState } from "react";
import InfinertyLogo from "../assets/images/infinerty-logo-micro.png";

export default function TopToolbar({ onToolbarButtonClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (buttonId) => {
    onToolbarButtonClick(buttonId);
    setIsOpen(false);
  };

  const buttonClasses =
    "block px-3 py-2 rounded-md text-base font-medium text-black hover:ring-2 hover:ring-black hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white md:ml-4";

  return (
    <nav className="mb-6">
      <div className="max-w-7xl mx-auto px-4 h-28 flex items-center justify-between">
        <img className="w-36" src={InfinertyLogo} alt="" />
        <div className="flex items-center"></div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <button
              className={buttonClasses}
              onClick={() => handleButtonClick("home")}
            >
              Home
            </button>
            <button
              className={buttonClasses}
              onClick={() => handleButtonClick("about")}
            >
              About
            </button>
            <button
              className={buttonClasses}
              onClick={() => handleButtonClick("projects")}
            >
              Projects
            </button>
            <button
              className={buttonClasses}
              onClick={() => handleButtonClick("contact")}
            >
              Contact
            </button>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="mr-1 bg-slate-400 inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            {/* For screen readers */}
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            className={`${buttonClasses} + w-24`}
            onClick={() => handleButtonClick("home")}
          >
            Home
          </button>
          <button
            className={`${buttonClasses} + w-24`}
            onClick={() => handleButtonClick("about")}
          >
            About
          </button>
          <button
            className={`${buttonClasses} + w-24`}
            onClick={() => handleButtonClick("projects")}
          >
            Projects
          </button>
          <button
            className={`${buttonClasses} + w-24`}
            onClick={() => handleButtonClick("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
