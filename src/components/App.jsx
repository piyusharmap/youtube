import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import Home from "./Body/Home";
import Error from "./Error/Error";
import Live from "./Live/Live";
import VideoShowcase from "./Body/Showcase/VideoShowcase";
import SearchResults from "./Body/SearchResults/SearchResults";

export default function App() {
  return (
    <div className="hidden lg:block bg-blackMain text-white font-primary cursor-default">
      <Header />
      <div className="min-h-screen flex items-start relative">
        <Sidebar />
        <RouterProvider router={appRouter} />
      </div>
    </div>
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
  {
    path: "/live",
    element: <Live />,
  },
]);
