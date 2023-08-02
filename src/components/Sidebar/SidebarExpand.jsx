import {
  faHouse,
  faFire,
  faSquareCheck,
  faVideo,
  faGear,
  faCirclePlay,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SidebarExpand() {
  // For future use: URL Path -> window.location.pathname
  return (
    <div className="w-1/5 p-2 sticky top-20 left-0">
      <ul className="py-2 px-4 flex flex-col items-start  border-b-2 border-blackSecondary">
        <a
          href="/"
          className="w-full mb-4 flex justify-start items-center gap-2 border-l-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faHouse} />
          </div>
          <p>Home</p>
        </a>

        <a
          href="#"
          className="w-full mb-4 flex items-center gap-2 border-l-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faFire} />
          </div>
          <p>Trending</p>
        </a>

        <a
          href="#"
          className="w-full mb-4 flex items-center gap-2 border-l-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faSquareCheck} />
          </div>
          <p>Subscriptions</p>
        </a>

        <a
          href="#"
          className="w-full mb-4 flex items-center gap-2 border-l-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faVideo} />
          </div>
          <p>Library</p>
        </a>
      </ul>

      <ul className="py-2 px-4 flex flex-col items-start  border-b-2 border-blackSecondary cursor-pointer">
        <div
          href="/"
          className="w-full mb-4 flex justify-start items-center gap-2 border-l-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faGear} />
          </div>
          <p>Settings</p>
        </div>

        <div
          href="#"
          className="w-full mb-4 flex items-center gap-2 border-l-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faCertificate} />
          </div>
          <p>YT Premium</p>
        </div>

        <div
          href="#"
          className="w-full mb-4 flex items-center gap-2 border-l-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faCirclePlay} />
          </div>
          <p>YT Music</p>
        </div>
      </ul>

      <p className="p-2 text-sm opacity-80">
        &copy; 2023 Youtube Redesign by Devsigner
      </p>
    </div>
  );
}
