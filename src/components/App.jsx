import React from "react";
import { Provider } from "react-redux";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import store from "../app/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Body/Home";
import VideoShowcase from "./Body/Showcase/VideoShowcase";
import Error from "./Error/Error";
import SearchResults from "./Body/SearchResults/SearchResults";

export default function App() {
  return (
    <Provider store={store}>
      <div className="bg-blackMain text-white transition-all">
        <Header />
        <div className="min-h-screen flex items-start relative">
          <Sidebar />
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
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
  {
    path: "/results",
    element: <SearchResults />,
  },
]);
