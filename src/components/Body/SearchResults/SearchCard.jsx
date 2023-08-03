import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { formatPublishedAt } from "../../../utils/formatFunctions";

const TypeVideo = ({ info }) => {
  const { snippet } = info;
  return (
    <a
      href={"/watch?v=" + info?.id?.videoId}
      className="w-full p-2 flex items-start gap-4"
    >
      <img
        className="rounded-md"
        alt="video thumbnail"
        src={snippet?.thumbnails?.medium?.url}
      />

      <div className="p-2">
        <h1 className="text-xl">{snippet?.title}</h1>
        <p className="mt-2">
          {snippet?.channelTitle}
          <FontAwesomeIcon className="ml-2 text-xs" icon={faCircleCheck} />
        </p>
        <p className="mt-1 text-xs opacity-80">
          {formatPublishedAt(snippet?.publishTime)}
        </p>
        <p className="mt-1 text-xs opacity-80">{snippet?.description}</p>
      </div>
    </a>
  );
};

const TypeChannel = ({ info }) => {
  const { snippet } = info;
  return (
    <div className="p-4 flex items-center gap-4">
      <img
        className="h-28 w-28 rounded-full outline outline-2 outline-redMain outline-offset-2"
        alt="video thumbnail"
        src={snippet?.thumbnails?.medium?.url}
      />

      <div className="p-2">
        <h1 className="text-xl">{snippet?.channelTitle}</h1>
        <p className="py-2 text-sm opacity-80">{snippet?.description}</p>
      </div>
    </div>
  );
};

export default function SearchCard({ info }) {
  return (
    <>
      {info?.id?.kind === "youtube#video" ? (
        <TypeVideo info={info} />
      ) : (
        <TypeChannel info={info} />
      )}
    </>
  );
}
