import { useEffect, useState } from "react";

import { API_KEY, VIDEO_LIST_API } from "../../../constant";
import SuggestionCard from "./SuggestionCard";
import VideosContainerShimmer from "../MainBody/VideosContainerShimmer";

export default function VideoSuggestions({ id }) {
  const [videoSuggestions, setVideoSuggestions] = useState([]);

  useEffect(() => {
    getSimilarVideos();
  }, []);

  const getSimilarVideos = async () => {
    try {
      const data = await fetch(VIDEO_LIST_API + API_KEY);
      const json = await data.json();

      setVideoSuggestions(json?.items.slice(0, 18));
    } catch (error) {
      console.log(error);
      setVideoSuggestions(null);
    }
  };

  if (!videoSuggestions) return <VideosContainerShimmer />;

  return (
    <div className="p-2 flex flex-wrap justify-between items-start gap-2">
      {videoSuggestions &&
        videoSuggestions.map((video) => {
          {
            return (
              <a
                className="w-[30%] mb-2 cursor-pointer"
                key={video?.id}
                href={"/watch?v=" + video.id}
              >
                <SuggestionCard info={video} />
              </a>
            );
          }
        })}
    </div>
  );
}
