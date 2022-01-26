import {
  HIDE_SIDEBAR,
  SHOW_SIDEBAR,
  SHOW_FILTER_PANEL,
  HIDE_FILTER_PANEL,
} from "../types";

const initialState = {
  sidebar: {
    isShow: false,
  },
  ticketFilterPanel: {
    isShow: false,
  },
};

const globalReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return {
        ...state,
        sidebar: { isShow: true },
      };
    case HIDE_SIDEBAR:
      return {
        ...state,
        sidebar: { isShow: false },
      };
    case SHOW_FILTER_PANEL:
      return {
        ...state,
        ticketFilterPanel: { isShow: true },
      };
    case HIDE_FILTER_PANEL:
      return {
        ...state,
        ticketFilterPanel: { isShow: false },
      };
    default:
      return state;
  }
};

export default globalReducer;
