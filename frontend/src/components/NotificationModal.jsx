import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsBell } from "react-icons/bs";

// Function to concatenate class names
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// List of menu items
const menuItems = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, omnis",
  "Quas! Neque adipisci saepe architecto. Aliquid non voluptatibus laudantium",
  "Ut officia nobis nemo praesentium sunt temporibus recusandae. Alias,",
  "Itaque consectetur.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, omnis",
  "Quas! Neque adipisci saepe architecto. Aliquid non voluptatibus laudantium",
  "Ut officia nobis nemo praesentium sunt temporibus recusandae. Alias,",
  "Itaque consectetur.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, omnis",
  "Quas! Neque adipisci saepe architecto. Aliquid non voluptatibus laudantium",
  "Ut officia nobis nemo praesentium sunt temporibus recusandae. Alias,",
  "Itaque consectetur.",
];

export default function NotificationModal() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="text-white inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 border-none">
          <BsBell />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-80 h-80 overflow-y-auto hide-scroll-bar origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-gray-900">
          {menuItems.map((item, index) => (
            <div className="py-1">
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    className={classNames(
                      active ? "bg-zinc-900 text-white" : "text-white",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {item}
                  </a>
                )}
              </Menu.Item>
            </div>
          ))}
          <div className="py-1"></div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
