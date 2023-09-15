import {
  faGear,
  faPodcast,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TypeCreate = () => {
  return (
    <div className="w-36 p-2 bg-white dark:bg-blackMain absolute top-full right-0 rounded-md shadow-lg">
      <a
        href="/live"
        className="w-full mb-1 p-2 text-lg text-center bg-redMain hover:bg-redMain/80 rounded-md block"
      >
        <FontAwesomeIcon className="mr-2" icon={faPodcast} />
        Go Live
      </a>

      <a className="w-full mb-1 p-2 text-lg text-center bg-redMain hover:bg-redMain/80 rounded-md block">
        <FontAwesomeIcon className="mr-2" icon={faSquarePlus} />
        Create
      </a>
    </div>
  );
};

const TypeNotification = () => {
  return (
    <div className="w-80 bg-white dark:bg-blackMain absolute top-full right-0 rounded-md shadow-lg">
      <h1 className="mb-2 p-4 border-b-2 border-blackMain dark:border-white">
        <FontAwesomeIcon className="mr-2" icon={faGear} />
        Notifications
      </h1>

      <div className="">
        <p className="py-2 px-4 hover:bg-blackMain/50 dark:hover:bg-white/50">
          Piyush Sharma commented: "🌟 Great video!!"
          <span className="w-fit text-sm block opacity-80">12 hours ago</span>
        </p>
        <p className="py-2 px-4 hover:bg-blackMain/50 dark:hover:bg-white/50">
          Your comment got 🤍 from: Malin Rikin
          <span className="w-fit text-sm block opacity-80">1 day ago</span>
        </p>
        <p className="py-2 px-4 hover:bg-blackMain/50 dark:hover:bg-white/50">
          Congratulations, your video has reached 500k views.🎉
          <span className="w-fit text-sm block opacity-80">1 day ago</span>
        </p>
      </div>

      <p className="w-full p-2 text-xs text-right italic opacity-80">
        Report notifications
      </p>
    </div>
  );
};

export default function NotificationBox({ value }) {
  return <>{value === "create" ? <TypeCreate /> : <TypeNotification />}</>;
}
