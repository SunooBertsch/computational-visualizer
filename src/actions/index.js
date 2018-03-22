export const ADD_BLOCK = "add_block";

export const addBlock = index => async dispatch => {
  let newIndex = index + 1;
  console.log(newIndex);
  dispatch({
    type: ADD_BLOCK,
    payload: newIndex
  });
};
