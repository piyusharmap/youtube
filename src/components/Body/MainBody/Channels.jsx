import { faNewspaper, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBasketShopping,
  faBasketball,
  faBook,
  faFilm,
  faGamepad,
  faMusic,
  faVest,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Channels() {
  return (
    <div className="p-1 font-primary flex flex-wrap items-center gap-4 bg-blackMain cursor-default">
      <div className="py-1 px-2 flex items-center bg-blackSecondary rounded-md cursor-po hover:bg-blackMain">
        <FontAwesomeIcon className="p-2 text-lg" icon={faUser} />
        <p className="p-2 text-sm">For You</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-blackSecondary rounded-md cursor-po hover:bg-blackMain">
        <FontAwesomeIcon className="p-2 text-lg" icon={faMusic} />
        <p className="p-2 text-sm">Music</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-blackSecondary rounded-md cursor-po hover:bg-blackMain">
        <FontAwesomeIcon className="p-2 text-lg" icon={faFilm} />
        <p className="p-2 text-sm">Movies</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-blackSecondary rounded-md cursor-po hover:bg-blackMain">
        <FontAwesomeIcon className="p-2 text-lg" icon={faGamepad} />
        <p className="p-2 text-sm">Gaming</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-blackSecondary rounded-md cursor-po hover:bg-blackMain">
        <FontAwesomeIcon className="p-2 text-lg" icon={faBasketball} />
        <p className="p-2 text-sm">Sports</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-blackSecondary rounded-md cursor-po hover:bg-blackMain">
        <FontAwesomeIcon className="p-2 text-lg" icon={faNewspaper} />
        <p className="p-2 text-sm">News</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-blackSecondary rounded-md cursor-po hover:bg-blackMain">
        <FontAwesomeIcon className="p-2 text-lg" icon={faVest} />
        <p className="p-2 text-sm">Fashion</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-blackSecondary rounded-md cursor-po hover:bg-blackMain">
        <FontAwesomeIcon className="p-2 text-lg" icon={faBook} />
        <p className="p-2 text-sm">Learning</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-blackSecondary rounded-md cursor-po hover:bg-blackMain">
        <FontAwesomeIcon className="p-2 text-lg" icon={faBasketShopping} />
        <p className="p-2 text-sm">Shopping</p>
      </div>
    </div>
  );
}
