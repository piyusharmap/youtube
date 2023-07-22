import React from "react";
import { useSelector } from "react-redux";
import store from "../../app/store";
import SidebarExpand from "./SidebarExpand";
import SidebarCompact from "./SidebarCompact";

export default function Sidebar() {
  const sidebarVisibility = useSelector((store) => store.sidebar.visible);

  return sidebarVisibility ? <SidebarExpand /> : <SidebarCompact />;
}
