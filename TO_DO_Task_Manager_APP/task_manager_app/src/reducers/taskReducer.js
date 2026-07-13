export const initialState = {
  tasks: [],
  loading: true,
};

export function taskReducer(state, action) {
  switch (action.type) {
    case "SET_TASKS":
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };

    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}