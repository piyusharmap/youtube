import {
  formatDuration,
  formatPublishedAt,
  formatViewCount,
} from "../../utils/formatFunctions";

export default function VideoCard({ info }) {
  const snippet = info?.snippet;
  const details = info?.contentDetails;
  const stats = info?.statistics;

  return (
    <div className="font-primary cursor-pointer">
      <div className="relative">
        <img
          className="w-full rounded-md"
          alt="video thumbnail"
          src={snippet?.thumbnails?.medium?.url}
        />
        <p className="m-1 p-1 text-xs bg-blackSecondary rounded-md absolute top-0 right-0">
          {formatDuration(details?.duration)}
        </p>
      </div>

      <h1 className="mt-2 text-lg">{snippet?.title.slice(0, 30) + "..."}</h1>
      <p className="mt-1 text-base opacity-80 hover:opacity-100">
        {snippet?.channelTitle}
      </p>

      <div className="py-1 flex justify-between items-center">
        <p className="text-sm opacity-80">
          {formatViewCount(stats?.viewCount)}
        </p>
        <p className="text-sm opacity-80">
          {formatPublishedAt(snippet?.publishedAt)}
        </p>
      </div>
    </div>
  );
}
