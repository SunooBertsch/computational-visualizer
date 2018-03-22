import { ADD_BLOCK } from "../actions";

export default function(state = { index: 1 }, action) {
  switch (action.type) {
    case ADD_BLOCK:
      return {
        ...state,
        index: action.payload
      };
    default:
      return state;
  }
}
