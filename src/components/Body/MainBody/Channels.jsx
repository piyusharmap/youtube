import {
  faBasketball,
  faBook,
  faFilm,
  faFire,
  faGamepad,
  faMusic,
  faNewspaper,
  faShoppingBag,
  faUser,
  faVest,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Channels() {
  return (
    <div className="p-1 flex flex-wrap justify-center items-center gap-4 cursor-default">
      <div className="py-1 px-2 flex items-center  border-2 border-redMain rounded-full bg-white dark:bg-blackMain hover:bg-blackMain dark:hover:bg-white hover:text-white dark:hover:text-blackMain hover:border-blackMain dark:hover:border-white">
        <div className="h-8 w-8 flex justify-center items-center">
          <FontAwesomeIcon icon={faFire} />
        </div>
        <p className="pr-2 text-sm">Trending</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-white dark:bg-blackMain rounded-full hover:bg-blackMain dark:hover:bg-white hover:text-white dark:hover:text-blackMain">
        <div className="h-8 w-8 flex justify-center items-center">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <p className="pr-2 text-sm">For You</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-white dark:bg-blackMain rounded-full hover:bg-blackMain dark:hover:bg-white hover:text-white dark:hover:text-blackMain">
        <div className="h-8 w-8 flex justify-center items-center">
          <FontAwesomeIcon icon={faMusic} />
        </div>
        <p className="pr-2 text-sm">Music</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-white dark:bg-blackMain rounded-full hover:bg-blackMain dark:hover:bg-white hover:text-white dark:hover:text-blackMain">
        <div className="h-8 w-8 flex justify-center items-center">
          <FontAwesomeIcon icon={faFilm} />
        </div>
        <p className="pr-2 text-sm">Movies</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-white dark:bg-blackMain rounded-full hover:bg-blackMain dark:hover:bg-white hover:text-white dark:hover:text-blackMain">
        <div className="h-8 w-8 flex justify-center items-center">
          <FontAwesomeIcon icon={faGamepad} />
        </div>
        <p className="pr-2 text-sm">Gaming</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-white dark:bg-blackMain rounded-full hover:bg-blackMain dark:hover:bg-white hover:text-white dark:hover:text-blackMain">
        <div className="h-8 w-8 flex justify-center items-center">
          <FontAwesomeIcon icon={faBasketball} />
        </div>
        <p className="pr-2 text-sm">Sports</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-white dark:bg-blackMain rounded-full hover:bg-blackMain dark:hover:bg-white hover:text-white dark:hover:text-blackMain">
        <div className="h-8 w-8 flex justify-center items-center">
          <FontAwesomeIcon icon={faNewspaper} />
        </div>
        <p className="pr-2 text-sm">News</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-white dark:bg-blackMain rounded-full hover:bg-blackMain dark:hover:bg-white hover:text-white dark:hover:text-blackMain">
        <div className="h-8 w-8 flex justify-center items-center">
          <FontAwesomeIcon icon={faVest} />
        </div>
        <p className="pr-2 text-sm">Fashion & Beauty</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-white dark:bg-blackMain rounded-full hover:bg-blackMain dark:hover:bg-white hover:text-white dark:hover:text-blackMain">
        <div className="h-8 w-8 flex justify-center items-center">
          <FontAwesomeIcon icon={faBook} />
        </div>
        <p className="pr-2 text-sm">Learning</p>
      </div>

      <div className="py-1 px-2 flex items-center bg-white dark:bg-blackMain rounded-full hover:bg-blackMain dark:hover:bg-white hover:text-white dark:hover:text-blackMain">
        <div className="h-8 w-8 flex justify-center items-center">
          <FontAwesomeIcon icon={faShoppingBag} />
        </div>
        <p className="pr-2 text-sm">Shopping</p>
      </div>
    </div>
  );
}
