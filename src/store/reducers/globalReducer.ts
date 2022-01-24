import { HIDE_SIDEBAR, SHOW_SIDEBAR } from "../types";

const initialState = {
  sidebar: {
    isShow: false,
  },
};

const ticketReducer = (
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
    default:
      return state;
  }
};

export default ticketReducer;
