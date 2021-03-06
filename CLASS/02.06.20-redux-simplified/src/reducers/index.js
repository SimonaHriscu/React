const allReducers = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "CHANGE_NAME":
      return {
        ...state,
        name: "Hriscu",
      };
    default:
      return state;
  }
};
export default allReducers;
