import {
  faFireAlt,
  faHouse,
  faPlay,
  faBookmark,
  faFileVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SidebarExpand() {
  return (
    <div className="w-1/5 p-2 sticky top-20 left-0 font-primary">
      <ul className="p-2 flex flex-col items-start border-b-2 border-blackSecondary">
        <a
          href="/"
          className="mb-2 p-2 text-lg border-l-2 border-transparent hover:border-redMain cursor-pointer"
        >
          <FontAwesomeIcon className="mr-2 px-2 text-xl" icon={faHouse} />
          Home
        </a>

        <a className="mb-2 p-2 text-lg border-l-2 border-transparent hover:border-redMain cursor-pointer">
          <FontAwesomeIcon className="mr-2 px-2 text-xl" icon={faFireAlt} />
          Trending
        </a>

        <a className="mb-2 p-2 text-lg border-l-2 border-transparent hover:border-redMain cursor-pointer">
          <FontAwesomeIcon className="mr-2 px-2 text-xl" icon={faPlay} />
          Explore
        </a>

        <a className="mb-2 p-2 text-lg border-l-2 border-transparent hover:border-redMain cursor-pointer">
          <FontAwesomeIcon className="mr-2 px-2 text-xl" icon={faBookmark} />
          Subscriptions
        </a>

        <a className="mb-2 p-2 text-lg border-l-2 border-transparent hover:border-redMain cursor-pointer">
          <FontAwesomeIcon className="mr-2 px-2 text-xl" icon={faFileVideo} />
          Library
        </a>
      </ul>

      <p className="p-2 text-sm opacity-80">&copy; 2023 Youtube Redesign.</p>
    </div>
  );
}
