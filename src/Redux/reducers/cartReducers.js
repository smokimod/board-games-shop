const ADD_CART = "ADD_CART";
const DELETE_CART = "DELETE_CART";
const initialState = {
  itemsCart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return { ...state, itemsCart: [...state.itemsCart, action.payload] };
      case DELETE_CART:
        return {...state,  itemsCart: state.itemsCart.filter((item)=>item.id !== action.payload)}
    default:
      return state;
  }
};

export const cartHolder = (payload) => ({
  type: ADD_CART,
  payload,
});
export const cartDeleter = (payload) => ({
  type: DELETE_CART,
  payload,
});

