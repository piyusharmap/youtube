import {
  faBookmark,
  faFileVideo,
  faFireAlt,
  faHouse,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SidebarCompact() {
  return (
    <div className="p-2 sticky top-20 left-0">
      <ul className="p-2 flex flex-col items-start">
        <a
          href="/"
          className="mb-2 p-2 text-lg border-l-2 border-transparent hover:border-redMain cursor-pointer"
        >
          <FontAwesomeIcon className="px-2 text-xl" icon={faHouse} />
        </a>

        <a className="mb-2 p-2 text-lg border-l-2 border-transparent hover:border-redMain cursor-pointer">
          <FontAwesomeIcon className="px-2 text-xl" icon={faFireAlt} />
        </a>

        <a className="mb-2 p-2 text-lg border-l-2 border-transparent hover:border-redMain cursor-pointer">
          <FontAwesomeIcon className="px-2 text-xl" icon={faPlay} />
        </a>

        <a className="mb-2 p-2 text-lg border-l-2 border-transparent hover:border-redMain cursor-pointer">
          <FontAwesomeIcon className="px-2 text-xl" icon={faBookmark} />
        </a>

        <a className="mb-2 p-2 text-lg border-l-2 border-transparent hover:border-redMain cursor-pointer">
          <FontAwesomeIcon className="px-2 text-xl" icon={faFileVideo} />
        </a>
      </ul>
    </div>
  );
}
