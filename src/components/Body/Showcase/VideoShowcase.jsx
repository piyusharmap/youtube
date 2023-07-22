import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { closeSidebar } from "../../../app/slices/sidebarSlice";
import { API_KEY, CHANNEL_INFO_API, VIDEO_INFO_API } from "../../../constant";
import { formatCount, formatPublishedAt } from "../../../utils/formatFunctions";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import CommentsBox from "./CommentsBox";

export default function VideoShowcase() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState({});
  const [channelInfo, setChannelInfo] = useState({});
  const [showDiscription, setShowDescription] = useState(false);

  const id = searchParams.get("v");

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(closeSidebar());
    getVideoInfo();
  }, []);

  const getVideoInfo = async () => {
    try {
      const videoData = await fetch(VIDEO_INFO_API + id + "&key=" + API_KEY);
      const videoJson = await videoData.json();

      const channelData = await fetch(
        CHANNEL_INFO_API +
          videoJson?.items[0]?.snippet?.channelId +
          "&key=" +
          API_KEY
      );
      const channelJson = await channelData.json();

      setVideoInfo(videoJson?.items[0]);
      setChannelInfo(channelJson?.items[0]);
    } catch (error) {
      console.log(error);
      setVideoInfo({});
      setChannelInfo({});
    }
  };

  return (
    <div className="min-h-screen flex gap-2 font-primary">
      <div className="w-2/3 p-2 flex flex-col items-center">
        <iframe
          className="h-[500px] w-full"
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1"}
          title="YouTube video player"
        ></iframe>

        <div className="w-full">
          <h1 className="py-2 text-xl">{videoInfo?.snippet?.title}</h1>

          <div className="p-2 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                className="h-12 w-12 rounded-full"
                alt="channel profile"
                src={channelInfo?.snippet?.thumbnails?.default?.url}
              />
              <div className="flex flex-col">
                <a
                  target="_blank"
                  href={
                    "https://youtube.com/" + channelInfo?.snippet?.customUrl
                  }
                >
                  {channelInfo?.snippet?.title}
                </a>
                <p className="text-sm opacity-80">
                  {formatCount(channelInfo?.statistics?.subscriberCount)}
                  subscribers
                </p>
              </div>
            </div>

            <div className="w-fit p-1 flex items-center border-[1px] border-blackSecondary rounded-full">
              <button className="group py-1 px-2">
                <FontAwesomeIcon
                  className="px-1 group-hover:text-redMain"
                  icon={faCircleUp}
                />
                {formatCount(videoInfo?.statistics?.likeCount)}
              </button>

              <button className="group py-1 px-2 border-l-[1px] border-blackSecondary">
                <FontAwesomeIcon
                  className="px-1 group-hover:text-redMain"
                  icon={faCircleDown}
                />
              </button>
            </div>

            <button className="h-fit py-2 px-4 text-base bg-blackSecondary hover:bg-redMain rounded-full">
              Subscribe
            </button>

            <button className="h-fit py-2 px-4 text-base bg-blackSecondary hover:bg-blackSecondary/80 hover:text-white rounded-full">
              Share
            </button>
          </div>
        </div>

        <div className="w-full p-2">
          <div className="flex items-center gap-2 opacity-80">
            <p className="p-2">
              {formatCount(videoInfo?.statistics?.viewCount)} views
            </p>
            <p>|</p>
            <p className="p-2">
              {formatPublishedAt(videoInfo?.snippet?.publishedAt)}
            </p>
            <p>|</p>
            <button
              onClick={() => setShowDescription(!showDiscription)}
              className="py-2 px-4"
            >
              Show Description
              {showDiscription ? (
                <FontAwesomeIcon className="text-xs ml-2" icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon
                  className="text-xs ml-2"
                  icon={faChevronDown}
                />
              )}
            </button>
          </div>

          {showDiscription && (
            <div className="mt-4 py-2 px-4 bg-blackSecondary rounded-md">
              {videoInfo?.snippet?.description
                .split("\n")
                .map((paragraph, index) => (
                  <p className="mt-1 text-base" key={index}>
                    {paragraph}
                  </p>
                ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex-grow p-2">
        <div className="mt-2">
          <CommentsBox />
        </div>
      </div>
    </div>
  );
}
