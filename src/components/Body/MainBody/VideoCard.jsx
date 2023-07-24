import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import {
  formatDuration,
  formatPublishedAt,
  formatCount,
} from "../../../utils/formatFunctions";
import Image from "../../../assets/image_placeholder.webp";

export default function VideoCard({ info }) {
  const snippet = info?.snippet;
  const details = info?.contentDetails;
  const stats = info?.statistics;

  return (
    <div className="cursor-pointer">
      <div className="relative">
        <img
          className="w-full rounded-md"
          alt="video thumbnail"
          src={
            snippet?.thumbnails?.medium?.url
              ? snippet?.thumbnails?.medium?.url
              : Image
          }
        />
        <p className="m-1 p-1 text-xs bg-blackSecondary/80 rounded-md absolute bottom-0 right-0">
          {formatDuration(details?.duration)}
        </p>
      </div>

      <h1 className="mt-1">{snippet?.title.slice(0, 45) + "..."}</h1>

      <p className="opacity-80 hover:opacity-100">
        {snippet?.channelTitle}
        <FontAwesomeIcon className="ml-2 text-xs" icon={faCircleCheck} />
      </p>

      <div className="flex items-center gap-4">
        <p className="text-sm opacity-80">
          {formatCount(stats?.viewCount) + " views"}
        </p>
        <p className="text-sm opacity-80">
          {formatPublishedAt(snippet?.publishedAt)}
        </p>
      </div>
    </div>
  );
}
