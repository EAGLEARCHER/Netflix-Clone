import React, { useState } from "react";

const TestComponent = () => {
  const [show, setShow] = useState(false);

  const handleNotificationBar = (event) => {
    event.stopPropagation();
    setShow(!show);
  };

  const baseClass =
    "hs-dropdown-menu transition-[opacity,margin] duration-300 hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full";

  return (
    <div className="hs-dropdown relative inline-flex">
      <button
        id="hs-dropdown-default"
        type="button"
        onClick={handleNotificationBar}
        className={`hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ${
          show ? "hs-dropdown-open" : ""
        }`}
        aria-haspopup="true"
        aria-expanded={show}
      >
        Actions
        <svg
          className={`hs-dropdown-open:rotate-180 size-4 ${
            show ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {show && (
        <div
          className={baseClass}
          role="menu"
          aria-labelledby="hs-dropdown-default"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setShow(false);
            }
          }}
        >
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            href="#"
            role="menuitem"
          >
            Newsletter
          </a>
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            href="#"
            role="menuitem"
          >
            Purchases
          </a>
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            href="#"
            role="menuitem"
          >
            Downloads
          </a>
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            href="#"
            role="menuitem"
          >
            Team Account
          </a>
        </div>
      )}
    </div>
  );
};

export default TestComponent;
