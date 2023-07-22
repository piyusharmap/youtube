import React from "react";
import { Provider } from "react-redux";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import store from "../app/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Channels from "./Body/Channels";
import VideosContainer from "./Body/VideosContainer";
import Home from "./Body/Home";
import VideoShowcase from "./Body/VideoShowcase";

export default function App() {
  return (
    <Provider store={store}>
      <div className="bg-blackMain text-white">
        <Header />
        <div className="min-h-screen flex items-start relative">
          <Sidebar />
          <RouterProvider router={appRouter} />
          {/* <Body /> */}
        </div>
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <h1>Error screen</h1>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/watch",
        element: <VideoShowcase />,
      },
    ],
  },
]);
