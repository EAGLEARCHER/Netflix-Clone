import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ changeBar }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleBar = () => {
    setIsExpanded(false);
    setTimeout(()=>{},20000)
    changeBar(false);
  };

  useEffect(() => {
    setIsExpanded(true);
  }, []);

  const baseClass = "relative transition-all ease-in-out duration-500";
  const expanded = "w-80";
  const collapsed = "w-20";

  const containerClass = `${baseClass} ${isExpanded ? expanded : collapsed}`;

  return (
    <div className={containerClass}>
      <BsSearch className="absolute fa fa-search text-gray-400 top-5 left-4" />
      <input
        type="text"
        className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none text-gray-800"
        name=""
      />
      <span className="absolute top-4 right-5 border-l pl-4">
        <IoMdClose
          className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"
          onClick={handleBar}
        />
      </span>
    </div>
  );
};

export default SearchBar;
