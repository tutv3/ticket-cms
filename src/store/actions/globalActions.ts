import { SHOW_SIDEBAR, HIDE_SIDEBAR } from "../types";

const showSidebarAction = () => ({ type: SHOW_SIDEBAR });

const hideSidebarAction = () => ({ type: HIDE_SIDEBAR });

export { showSidebarAction, hideSidebarAction };
