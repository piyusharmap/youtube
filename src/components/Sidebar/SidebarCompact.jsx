import {
  faHouse,
  faFire,
  faSquareCheck,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SidebarCompact() {
  return (
    <div className="p-2 sticky top-20 left-0">
      <ul className="py-2 px-4 flex flex-col items-start">
        <a
          href="/"
          className="mb-4 h-8 w-8 flex justify-center items-center border-b-2 border-transparent hover:border-redMain"
        >
          <FontAwesomeIcon className="text-lg" icon={faHouse} />
        </a>

        <a
          href="#"
          className="mb-4 h-8 w-8 flex justify-center items-center border-b-2 border-transparent hover:border-redMain"
        >
          <FontAwesomeIcon className="text-lg" icon={faFire} />
        </a>

        <a
          href="#"
          className="mb-4 h-8 w-8 flex justify-center items-center border-b-2 border-transparent hover:border-redMain"
        >
          <FontAwesomeIcon className="text-lg" icon={faSquareCheck} />
        </a>

        <a
          href="#"
          className="mb-4 h-8 w-8 flex justify-center items-center border-b-2 border-transparent hover:border-redMain"
        >
          <FontAwesomeIcon className="text-lg" icon={faVideo} />
        </a>
      </ul>
    </div>
  );
}
