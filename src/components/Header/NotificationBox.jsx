import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faTowerBroadcast, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TypeCreate = () => {
  return (
    <div className="w-48 p-2 font-primary bg-blackSecondary absolute top-full right-0 rounded-md shadow-xl cursor-pointer">
      <h1 className="mb-1 p-2 text-lg border-[1px] border-transparent hover:border-redMain rounded-md">
        <FontAwesomeIcon className="mr-2 tex-sm" icon={faTowerBroadcast} />
        Go Live
      </h1>
      <h1 className="mb-1 p-2 text-lg border-[1px] border-transparent hover:border-redMain rounded-md">
        <FontAwesomeIcon className="mr-2 tex-sm" icon={faUpload} />
        Upload Video
      </h1>
    </div>
  );
};

const TypeNotification = () => {
  return (
    <div className="w-96 p-2 font-primary bg-blackSecondary absolute top-full right-0 rounded-md shadow-xl cursor-pointer">
      <h1 className="mb-2 p-2 border-b-[1px]">Notifications</h1>
      <p className="mb-1 p-2 hover:shadow-lg">
        <FontAwesomeIcon icon={faCircle} /> Robert Pham commented:
        <span className="text-lg"> "Great video, thanks!"</span>
      </p>
      <p className="mb-1 p-2 hover:shadow-lg">
        <FontAwesomeIcon icon={faCircle} /> You got reply from:
        <span className="text-lg"> Primrose Kibler</span>{" "}
      </p>
    </div>
  );
};

export default function NotificationBox({ value }) {
  return <>{value === "create" ? <TypeCreate /> : <TypeNotification />}</>;
}
