import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import {
  formatDuration,
  formatPublishedAt,
  formatCount,
} from "../../../utils/formatFunctions";
import Image from "../../../assets/video_placeholder.webp";
import { useRef, useState } from "react";

export default function VideoCard({ info }) {
  const snippet = info?.snippet;
  const details = info?.contentDetails;
  const stats = info?.statistics;
  const [showPreview, setShowPreview] = useState(false);
  const timeoutRef = useRef();

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setShowPreview(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setShowPreview(false);
  };

  return (
    <div className="group cursor-pointer">
      <div className="relative">
        <div
          className="relative overflow-hidden rounded-xl"
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          <img
            className="w-full hover:scale-105 transition-all"
            alt="video thumbnail"
            src={
              snippet?.thumbnails?.medium?.url
                ? snippet?.thumbnails?.medium?.url
                : Image
            }
          />
          {showPreview && (
            <div className="w-full h-full absolute top-0 left-0">
              <iframe
                className="w-full h-full"
                src={
                  "https://www.youtube.com/embed/" + info?.id + "?autoplay=1"
                }
                title="YouTube video player"
              ></iframe>
            </div>
          )}
        </div>
        <p className="m-1 p-1 text-xs bg-blackSecondary/80 rounded-md absolute bottom-0 right-0">
          {formatDuration(details?.duration)}
        </p>
      </div>

      <h1 className="mt-1">{snippet?.title}</h1>

      <p className="mt-2 text-sm opacity-80 hover:opacity-100">
        {snippet?.channelTitle}
        <FontAwesomeIcon className="ml-2 text-xs" icon={faCircleCheck} />
      </p>

      <div className="text-sm flex items-center gap-2 opacity-80">
        <p>{formatCount(stats?.viewCount) + " views"}</p>
        <p>•</p>
        <p>{formatPublishedAt(snippet?.publishedAt)}</p>
      </div>
    </div>
  );
}
