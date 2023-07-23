import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TypeCreate = () => {
  return (
    <div className="w-36 p-2 bg-blackSecondary absolute top-full right-0 rounded-md shadow-lg">
      <button className="w-full mb-1 p-2 text-lg bg-redMain/80 hover:bg-redMain rounded-md">
        Go Live
      </button>

      <button className="w-full mb-1 p-2 text-lg bg-redMain/80 hover:bg-redMain rounded-md">
        Create
      </button>
    </div>
  );
};

const TypeNotification = () => {
  return (
    <div className="w-96 bg-blackSecondary absolute top-full right-0 rounded-md shadow-lg">
      <h1 className="mb-2 p-2 border-b-2 border-blackMain">
        <FontAwesomeIcon className="mr-2" icon={faGear} />
        Notifications
      </h1>
      <div className="">
        <p className="py-2 px-4 hover:bg-blackMain">
          Robert Pham commented: "🌟 Great video!!"
          <span className="w-fit text-sm block opacity-80">12 hours ago</span>
        </p>
        <p className="py-2 px-4 hover:bg-blackMain/80">
          Your comment got 🤍 from: Malin Rikin
          <span className="w-fit text-sm block opacity-80">1 day ago</span>
        </p>
        <p className="py-2 px-4 hover:bg-blackMain/80">
          Your video reach 100k views🎉
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
