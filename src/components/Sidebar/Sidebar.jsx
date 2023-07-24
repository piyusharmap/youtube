import { useSelector } from "react-redux";

import SidebarExpand from "./SidebarExpand";
import SidebarCompact from "./SidebarCompact";

export default function Sidebar() {
  const sidebarVisibility = useSelector((store) => store.sidebar.visible);

  return sidebarVisibility ? <SidebarExpand /> : <SidebarCompact />;
}
