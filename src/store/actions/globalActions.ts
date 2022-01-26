import {
  SHOW_SIDEBAR,
  HIDE_SIDEBAR,
  SHOW_FILTER_PANEL,
  HIDE_FILTER_PANEL,
} from "../types";

const showSidebarAction = () => ({ type: SHOW_SIDEBAR });

const hideSidebarAction = () => ({ type: HIDE_SIDEBAR });

const showFilterPanelAction = () => ({ type: SHOW_FILTER_PANEL });

const hideFilterPanelAction = () => ({ type: HIDE_FILTER_PANEL });

export {
  showSidebarAction,
  hideSidebarAction,
  showFilterPanelAction,
  hideFilterPanelAction,
};
