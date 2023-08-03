import {
  faHouse,
  faSquareCheck,
  faClapperboard,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SidebarCompact() {
  return (
    <div className="p-2 sticky top-20 left-0">
      <ul className="px-4 flex flex-col items-start">
        <a
          href="/"
          className="mb-4 flex flex-col justify-center items-start border-b-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faHouse} />
          </div>
        </a>

        <a
          href="/"
          className="mb-4 flex flex-col justify-center items-start border-b-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faClapperboard} />
          </div>
        </a>

        <a
          href="/"
          className="mb-4 flex flex-col justify-center items-start border-b-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faSquareCheck} />
          </div>
        </a>

        <a
          href="/"
          className="mb-4 flex flex-col justify-center items-start border-b-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faPhotoFilm} />
          </div>
        </a>
      </ul>
    </div>
  );
}
