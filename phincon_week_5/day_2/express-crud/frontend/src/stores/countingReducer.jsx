const initialState = 1;
const countingReducer = (state, action) => {
  if (action.type === "INCREASE") {
    if (state < 10) return state + 1;
  } else if (action.type === "DECREASE") {
    if (state > 1) return state - 1;
  } else if (action.type === "RESET") {
    return 0;
  }
  return state;
};

export { countingReducer, initialState };
