import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import VideoCard from "./VideoCard";
import VideosContainerShimmer from "./VideosContainerShimmer";
import { API_KEY, VIDEO_LIST_API } from "../../../constant";

export default function VideosContainer() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(VIDEO_LIST_API + API_KEY);
      const json = await data.json();

      setVideoList(json?.items);
    } catch (error) {
      console.log(error);
      setVideoList([]);
    }
  };

  if (videoList.length === 0 || !videoList) return <VideosContainerShimmer />;

  return (
    <div className="py-2 flex flex-wrap justify-between items-start">
      {videoList.map((video) => {
        return (
          <Link
            key={video.id}
            to={"/watch?v=" + video.id}
            className="w-[30%] m-1 p-2 mb-8"
          >
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
}
