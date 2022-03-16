const initialState = { shopData: [] };

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SHOP":
      return {
        ...state,
        shopData: [...state.shopData, action.payload],
      };
    case "DELETE_SHOP":
      const newData = state.shopData.filter(
        (shop) => +shop.id !== +action.payload.id
      );
      return {
        ...state,
        shopData: newData,
      };

    default:
      return state;
  }
};
