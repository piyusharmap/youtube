import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faUser } from "@fortawesome/free-solid-svg-icons";

export default function LiveVideo() {
  return (
    <div className="w-4/5 p-2 flex flex-col items-center gap-2">
      <div className="h-[500px] w-full  flex justify-center items-center relative overflow-hidden">
        <h1 className="text-center text-9xl animate-pulse">
          Stream starting soon...
        </h1>
        <div className="h-full w-full backdrop-blur-sm absolute"></div>
      </div>

      <div className="w-full">
        <div className="p-2 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 flex justify-center items-center border-2 border-blue-600 rounded-full">
              <FontAwesomeIcon className="text-xl" icon={faUser} />
            </div>

            <div className="flex flex-col">
              <p>Piyush Sharma</p>
              <p className="text-sm opacity-80">4.8M subscribers</p>
            </div>
          </div>

          <div className="w-fit py-2 px-4 flex items-center border-[1px] border-redMain rounded-full">
            <p>44k watching</p>
          </div>

          <button className="h-fit py-2 px-4 text-base bg-blackSecondary hover:bg-redMain rounded-full">
            Subscribe
          </button>

          <button className="h-fit py-2 px-4 text-base bg-blackSecondary hover:bg-blackSecondary/80 rounded-full">
            <FontAwesomeIcon className="mr-2 text-sm" icon={faShare} />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
