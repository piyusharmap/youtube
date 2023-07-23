import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSquarePlus,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import Searchbar from "./Searchbar";
import Logo from "../../assets/youtube_logo.svg";
import { toggleSidebar } from "../../app/slices/sidebarSlice";
import { useState } from "react";
import NotificationBox from "./NotificationBox";

export default function Header() {
  const dispatch = useDispatch();
  const [showCreate, setShowCreate] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const toggleCreate = () => {
    setShowCreate(!showCreate);
    setShowNotification(false);
  };

  const toggleNotification = () => {
    setShowNotification(!showNotification);
    setShowCreate(false);
  };

  return (
    <div className="py-2 px-6 flex justify-between items-center gap-4 bg-blackMain sticky top-0 left-0 z-20">
      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center gap-2">
          <button
            className="group mr-4"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FontAwesomeIcon
              className="p-2 text-lg group-hover:text-redMain"
              icon={faBars}
            />
          </button>

          <img className="w-8 hover:opacity-80" alt="youtube logo" src={Logo} />

          <a href="/" className="font-secondary text-3xl">
            Youtube
            <span className="ml-1 text-sm opacity-80">IN</span>
          </a>
        </div>

        <div className="ml-4">
          <Searchbar />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="p-2 flex items-center gap-2 relative">
          <FontAwesomeIcon
            className={`p-2 text-lg border-b-[2px] ${
              showCreate ? "border-redMain" : "border-transparent"
            } hover:border-redMain cursor-pointer`}
            icon={faSquarePlus}
            id="create"
            onClick={() => toggleCreate()}
          />

          <FontAwesomeIcon
            className={`p-2 text-lg border-b-[2px] ${
              showNotification ? "border-redMain" : "border-transparent"
            } hover:border-redMain cursor-pointer`}
            icon={faBell}
            id="notification"
            onClick={() => toggleNotification()}
          />

          {showCreate && <NotificationBox value={"create"} />}
          {showNotification && <NotificationBox value={"notification"} />}
        </div>

        <div className="h-10 w-10 p-1 flex justify-center items-center rounded-full border-[1px] border-transparent hover:border-redMain">
          <FontAwesomeIcon className="text-xl" icon={faUser} />
        </div>
      </div>
    </div>
  );
}
