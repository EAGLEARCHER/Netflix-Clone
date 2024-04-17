import React from "react";

export default function NavbarItems({ label }) {
  const goToCategory = (category) => {
    console.log(`Going to ${category}`);
    if (category === "Home") {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
    if (category === "Series") {
      window.scroll({
        top: 1050,
        left: 0,
        behavior: "smooth",
      });
    } else if (category === "New & Popular") {
      window.scroll({
        top: 1350,
        left: 0,
        behavior: "smooth",
      });
    } else if (category === "My List") {
      window.scroll({
        top: 1650,
        left: 0,
        behavior: "smooth",
      });
    } else if (category === "Browse by Languages") {
      window.scroll({
        top: 1950,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="text-white cursor-pointer hover:text-gray-300 transition"
      // Pass a function reference to the onClick attribute
      onClick={() => goToCategory(label)}
    >
      {label}
    </div>
  );
}
