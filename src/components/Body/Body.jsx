import React from "react";
import VideosContainer from "./VideosContainer";
import Channels from "./Channels";
import { Outlet } from "react-router-dom";

export default function Body() {
  return (
    <div className="w-full p-2 relative">
      <Outlet />
      {/* <Channels />
      <VideosContainer /> */}
    </div>
  );
}
