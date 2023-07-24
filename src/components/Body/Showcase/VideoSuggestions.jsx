import { useEffect, useState } from "react";

import { API_KEY, SIMILAR_VIDEOS_API } from "../../../constant";
import SuggestionCard from "./SuggestionCard";

export default function VideoSuggestions({ id }) {
  const [videoSuggestions, setVideoSuggestions] = useState([]);

  useEffect(() => {
    getSimilarVideos();
  }, []);

  const getSimilarVideos = async () => {
    try {
      const data = await fetch(SIMILAR_VIDEOS_API + id + "&key=" + API_KEY);
      const json = await data.json();

      setVideoSuggestions(json?.items);
    } catch (error) {
      console.log(error);
      setVideoSuggestions(null);
    }
  };

  return (
    <div className="p-2 flex flex-wrap justify-between items-start gap-2">
      {videoSuggestions &&
        videoSuggestions.map((video) => {
          {
            return <SuggestionCard key={video?.id?.videoId} info={video} />;
          }
        })}
    </div>
  );
}
