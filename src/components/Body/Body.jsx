import { Outlet } from "react-router-dom";

export default function Body() {

  return (
    <div className="w-full p-2 relative">
      <Outlet />
    </div>
  );
}
