import React from "react";
import profileLogo from "../assets/default-blue.png";
import { useDispatch, useSelector } from "react-redux";
import { clearStore } from "../state_manager/user/userSlice";

export default function AccountMenu({ visible }) {
  const imageUrl = useSelector((store) => store.user.image);
  const username = useSelector((store) => store.user.username);
  if (!visible) {
    return null;
  }
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(clearStore("LoggedOut"));
  };
  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 item-center w-full">
          <img
            src={imageUrl ? imageUrl : profileLogo}
            alt=""
            className="w-8 rounded-md"
          />
          <p className="text-white text-sm group-hover/item:underline">
            {username ? username : "Guest"}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={handleSignOut}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
}
