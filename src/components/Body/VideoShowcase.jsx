import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { closeSidebar } from "../../app/slices/sidebarSlice";
import ReactPlayer from "react-player";
import { API_KEY, VIDEO_INFO_API } from "../../constant";

export default function VideoShowcase() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState({});

  const id = searchParams.get("v");

  useEffect(() => {
    dispatch(closeSidebar());
    getVideoInfo();
  }, []);

  const getVideoInfo = async () => {
    try {
      const data = await fetch(VIDEO_INFO_API + id + "&key=" + API_KEY);
      const json = await data.json();

      setVideoInfo(json);
    } catch (error) {
      console.log(error);
      setVideoInfo({});
    }
  };

  return (
    <div className="min-h-screen flex gap-2">
      <div className="w-2/3 p-2">
        <iframe
          className="h-4/5 w-full"
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          autoPlay={1}
          mute={1}
        ></iframe>

        <div className="mt-4 p-2">Suggestion videos</div>
      </div>

      <div className="p-2">
        <h1>Comments</h1>
      </div>
    </div>
  );
}
