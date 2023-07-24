import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LiveImage from "../../assets/live_placeholder.webp";
import {
  faBackward,
  faExpand,
  faGear,
  faPause,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

export default function LiveVideo() {
  return (
    <div className="w-3/5 p-2 flex flex-col items-center gap-2">
      <div className="p-2">
        <img className="rounded-lg" alt="live video" src={LiveImage} />

        <div className="mt-2 w-full bg-blackSecondary flex justify-evenly items-center gap-4 rounded-full">
          <button className="h-8 w-8 flex justify-center items-center hover:bg-blackMain rounded-full">
            <FontAwesomeIcon icon={faBackward} />
          </button>

          <button className="h-8 w-8 flex justify-center items-center hover:bg-blackMain rounded-full">
            <FontAwesomeIcon icon={faPause} />
          </button>

          <button className="h-8 w-8 flex justify-center items-center hover:bg-blackMain rounded-full">
            <FontAwesomeIcon icon={faVolumeHigh} />
          </button>

          <button className="h-8 w-8 flex justify-center items-center hover:bg-blackMain rounded-full">
            <FontAwesomeIcon icon={faGear} />
          </button>

          <button className="h-8 w-8 flex justify-center items-center hover:bg-blackMain rounded-full">
            <FontAwesomeIcon icon={faExpand} />
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="p-2 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 bg-blue-600 rounded-full"></div>

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

          <button className="h-fit py-2 px-4 text-base bg-blackSecondary hover:bg-blackMain rounded-full">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
