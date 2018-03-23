export const ADD_BLOCK = "add_block";

export const addBlock = index => async dispatch => {
  console.log("addBlock ran, index is ", index);
  let newIndex = index + 1;
  console.log(newIndex);
  setTimeout(
    dispatch({
      type: ADD_BLOCK,
      payload: newIndex
    }),
    100
  );
};
