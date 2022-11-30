const ADD_CART = "ADD_CART";
const DELETE_CART = "DELETE_CART";
const initialState = {
  itemsCart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return { ...state, itemsCart: [...state.itemsCart, action.payload] };
    default:
      return state;
  }
};

export const cartHolder = (payload) => ({
  type: ADD_CART,
  payload,
});
