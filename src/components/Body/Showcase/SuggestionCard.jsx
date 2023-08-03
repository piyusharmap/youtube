import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { formatPublishedAt } from "../../../utils/formatFunctions";
import Image from "../../../assets/video_placeholder.webp";

export default function SuggestionCard({ info }) {
  return (
    <div className="mb-2">
      <img
        className="w-full rounded-md"
        alt="video thumbnail"
        src={
          info?.snippet?.thumbnails?.medium?.url
            ? info?.snippet?.thumbnails?.medium?.url
            : Image
        }
      />

      <h1 className="mt-2">{info?.snippet?.title.slice(0, 40) + "..."}</h1>

      <p className="text-sm hover:opacity-100">
        {info?.snippet?.channelTitle}
        <FontAwesomeIcon className="ml-2 text-xs" icon={faCircleCheck} />
      </p>

      <p className="text-xs opacity-80">
        {formatPublishedAt(info?.snippet?.publishedAt)}
      </p>
    </div>
  );
}
