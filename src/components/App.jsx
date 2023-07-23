import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Body/Home";
import VideoShowcase from "./Body/Showcase/VideoShowcase";
import Error from "./Error/Error";
import SearchResults from "./Body/SearchResults/SearchResults";

export default function App() {
  return (
    <div className="bg-blackMain text-white font-primary cursor-default transition-all">
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
]);
