import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { closeSidebar } from "../../app/slices/sidebarSlice";
import LiveVideo from "./LiveVideo";
import LiveChat from "./LiveChat";

export default function Live() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="w-full p-2 flex justify-center items-start gap-2">
      <LiveVideo />
      <LiveChat />
    </div>
  );
}
