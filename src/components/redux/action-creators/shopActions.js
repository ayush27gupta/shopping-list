export const addShop = (data) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_SHOP",
      payload: {
        id: Date.now(),
        ...data,
      },
    });
  };
};

export const deleteShop = (data) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_SHOP",
      payload: data,
    });
  };
};
