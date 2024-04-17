import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import profileLogo from "../assets/default-blue.png";
import NavbarItems from "./NavbarItems";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";
import NotificationModal from "./NotificationModal";
import { useSelector } from "react-redux";

const TOP_OFFSET = 66;
export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showNotificationPanel, setNotificationPanel] = useState(false);
  const categories = useSelector((store) => store.movie.categories);
  const imageUrl = localStorage.getItem("image");
  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const toggleAccountMenu = () => {
    setShowAccountMenu(!showAccountMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleBar = () => {
    setShowSearchBar(true);
  };
  const handleNotificationPanel = () => {
    setNotificationPanel(!showNotificationPanel);
  };
  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <img className="h-4 lg:h-7" src={logo} alt="logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          {categories.map((category) => {
            return (
              <NavbarItems label={category}/>
            );
          })}
        </div>
        <div
          onClick={toggleMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white fill-current transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            {showSearchBar ? (
              <SearchBar changeBar={setShowSearchBar} />
            ) : (
              <BsSearch onClick={handleBar} />
            )}
          </div>
          <div
            onClick={handleNotificationPanel}
            className="text-gray-200 hover:text-gray-300 cursor-pointer transition"
          >
            <NotificationModal />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src={imageUrl ? imageUrl : profileLogo} alt="Profile Logo" />
            </div>
            <BsChevronDown
              className={`text-white fill-current transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}
