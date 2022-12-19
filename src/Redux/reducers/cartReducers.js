const ADD_CART = "ADD_CART";
const DELETE_CART = "DELETE_CART";
const INCREASE_CART = "INCREASE_CART";
const DECREASE_CART = "DECREASE_CART";

const initialState = {
  itemsCart: [],
  quantity: 1
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return { ...state, itemsCart: [...state.itemsCart, Object.assign(action.payload,initialState.quantity)] };
    case DELETE_CART:
      return { ...state, itemsCart: state.itemsCart.filter((item) => item.id !== action.payload) }

    default:
      return state;
  }
};

export const itemCouner = (state = 1, action) => {
  switch (action.type) {
    case INCREASE_CART:
      return state + 1;
    case DECREASE_CART:
      return state - 1;

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

export const cartIncrease = () => ({
  type: INCREASE_CART,
});
export const cartDecrease = () => ({
  type: DECREASE_CART,
});