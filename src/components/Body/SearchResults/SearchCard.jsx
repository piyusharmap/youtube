import { formatPublishedAt } from "../../../utils/formatFunctions";

const TypeVideo = ({ info }) => {
  const { snippet } = info;
  return (
    <a
      href={"/watch?v=" + info?.id?.videoId}
      className="p-2 flex items-start gap-4 font-primary"
    >
      <img
        className="rounded-md"
        alt="video thumbnail"
        src={snippet?.thumbnails?.medium?.url}
      />

      <div className="p-2">
        <h1 className="text-xl">{snippet?.title}</h1>
        <p className="py-2">{snippet?.channelTitle}</p>
        <p className="text-sm opacity-80">
          {formatPublishedAt(snippet?.publishTime)}
        </p>
        <p className="py-2 text-sm opacity-80">{snippet?.description}</p>
      </div>
    </a>
  );
};

const TypeChannel = ({ info }) => {
  const { snippet } = info;
  return (
    <div className="p-2 flex items-center gap-4 font-primary">
      <img
        className="rounded-full"
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
