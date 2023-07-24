import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LiveImage from "../../assets/video_placeholder.webp";
import {
  faBackward,
  faExpand,
  faGear,
  faPause,
  faStop,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

export default function LiveVideo() {
  return (
    <div className="w-3/5 p-2 flex flex-col items-center gap-2">
      <img alt="live video" src={LiveImage} />

      <div className="w-full flex justify-center items-center gap-4">
        <button className="h-8 w-8 flex justify-center items-center hover:opacity-80">
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className="h-8 w-8 flex justify-center items-center hover:opacity-80">
          <FontAwesomeIcon icon={faPause} />
        </button>
        <button className="h-8 w-8 flex justify-center items-center hover:opacity-80">
          <FontAwesomeIcon icon={faStop} />
        </button>
        <button className="h-8 w-8 flex justify-center items-center hover:opacity-80">
          <FontAwesomeIcon icon={faVolumeHigh} />
        </button>
        <button className="h-8 w-8 flex justify-center items-center hover:opacity-80">
          <FontAwesomeIcon icon={faGear} />
        </button>
        <button className="h-8 w-8 flex justify-center items-center hover:opacity-80">
          <FontAwesomeIcon icon={faExpand} />
        </button>
      </div>
    </div>
  );
}
