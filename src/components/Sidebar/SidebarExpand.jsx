import {
  faHouse,
  faSquareCheck,
  faGear,
  faCirclePlay,
  faClapperboard,
  faPlay,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function SidebarExpand() {
  // For future use: URL Path -> window.location.pathname

  const [theme, setTheme] = useState("dark")

  useEffect(()=>{
    const htmlElement = document.querySelector("html")
    htmlElement.classList.remove("light", "dark") 
    htmlElement.classList.add(theme)
  }, [theme])

  const handleThemeToggle = () => {
    if(theme === "light"){
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
  }

  return (
    <div className="w-fit p-2 sticky top-20 left-0">
      <ul className="px-4 flex flex-col items-start border-b-2 border-blackSecondary">
        <a
          href="/"
          className="mb-4 flex justify-start items-center gap-2 border-l-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faHouse} />
          </div>
          <p>Home</p>
        </a>

        <a
          href="/"
          className="w-full mb-4 flex items-center gap-2 border-l-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faClapperboard} />
          </div>
          <p>Shorts</p>
        </a>

        <a
          href="/"
          className="w-full mb-4 flex items-center gap-2 border-l-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faSquareCheck} />
          </div>
          <p>Subscriptions</p>
        </a>

        <a
          href="/"
          className="w-full mb-4 flex items-center gap-2 border-l-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faPhotoFilm} />
          </div>
          <p>Library</p>
        </a>
      </ul>

      <ul className="py-2 px-4 flex flex-col items-start  border-b-2 border-blackSecondary cursor-pointer">
        <div className="w-full mb-4 flex justify-start items-center gap-2 border-l-2 border-transparent hover:border-redMain">
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faGear} />
          </div>
          <button 
            onClick={() => handleThemeToggle()}
          >
            Appearance: {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        </div>

        <div className="w-full mb-4 flex items-center gap-2 border-l-2 border-transparent hover:border-redMain">
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg text-redMain" icon={faPlay} />
          </div>
          <p>YT Premium</p>
        </div>

        <div className="w-full mb-4 flex items-center gap-2 border-l-2 border-transparent hover:border-redMain">
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon
              className="text-lg text-redMain"
              icon={faCirclePlay}
            />
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
