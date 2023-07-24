import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import {
  formatDuration,
  formatPublishedAt,
  formatCount,
} from "../../../utils/formatFunctions";
import Image from "../../../assets/video_placeholder.webp";

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

      <h1 className="mt-1">{snippet?.title}</h1>

      <p className="mt-2 text-sm opacity-80 hover:opacity-100">
        {snippet?.channelTitle}
        <FontAwesomeIcon className="ml-2 text-xs" icon={faCircleCheck} />
      </p>

      <div className="text-sm flex items-center gap-4 opacity-80">
        <p>{formatCount(stats?.viewCount) + " views"}</p>
        <p>|</p>
        <p>{formatPublishedAt(snippet?.publishedAt)}</p>
      </div>
    </div>
  );
}
