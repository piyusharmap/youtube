import { formatPublishedAt } from "../../../utils/formatFunctions";

import Image from "../../../assets/image_placeholder.png";

export default function SuggestionCard({ info }) {
  return (
    <div className="w-1/4 mb-2 font-primary cursor-pointer">
      <img
        className="w-full rounded-md"
        alt="video thumbnail"
        src={
          info?.snippet?.thumbnails?.medium?.url
            ? info?.snippet?.thumbnails?.medium?.url
            : Image
        }
      />

      <h1 className="mt-1 text-lg">
        {info?.snippet?.title.slice(0, 40) + "..."}
      </h1>

      <p className="text-base opacity-80 hover:opacity-100">
        {info?.snippet?.channelTitle}
      </p>

      <p className="text-sm opacity-80">
        {formatPublishedAt(info?.snippet?.publishedAt)}
      </p>
    </div>
  );
}
