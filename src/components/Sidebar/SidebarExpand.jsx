import { faBookmark, faFileVideo } from "@fortawesome/free-regular-svg-icons";
import { faFireAlt, faHouse, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SidebarExpand() {
  return (
    <div className="w-1/5 p-2 sticky top-20 left-0 font-primary">
      <ul className="p-2 flex flex-col items-start">
        <a className="mb-2 p-2 text-lg border-l-2 border-transparent hover:border-redMain cursor-pointer">
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
    </div>
  );
}
