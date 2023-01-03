const ADD_CART = "ADD_CART";
const DELETE_CART = "DELETE_CART";
const ADD_QUANTITY = "ADD_QUANTITY";
const REMOVE_QUANTITY = "REMOVE_QUANTITY";
const CLEAR_CART = "CLEAR_CART";

const initialState = {
  itemsCart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const cartReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        itemsCart: [
          ...state.itemsCart,
          Object.assign(payload, (payload.quantity = 1)),
        ],
      };

    case DELETE_CART:
      return {
        ...state,
        itemsCart: state.itemsCart.filter((item) => item.id !== payload.id),
      };

    case ADD_QUANTITY:
      const itemForAdd = state.itemsCart.find((item) => item.id === payload.id);

      if (itemForAdd) {
        return {
          ...state,
          itemsCart: state.itemsCart.map((item) =>
            item.id === payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      }
      return {
        ...state,
        itemsCart: [...state.itemsCart, payload],
      };

    case REMOVE_QUANTITY:
      const itemForRemove = state.itemsCart.find(
        (item) => item.id === payload.id
      );

      if (itemForRemove) {
        return {
          ...state,
          itemsCart: state.itemsCart.map((item) =>
            item.id === payload.id
              ? {
                  ...item,
                  quantity:
                    item.quantity <= 1 ? item.quantity : item.quantity - 1,
                }
              : item
          ),
        };
      }
      return {
        ...state,
        itemsCart: [...state.itemsCart, payload],
      };
    case "CLEAR_CART":
      return {
        ...state,
        itemsCart: [],
      };

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
export const cartQuantityAdd = (payload) => ({
  type: ADD_QUANTITY,
  payload,
});
export const cartQuantityRemove = (payload) => ({
  type: REMOVE_QUANTITY,
  payload,
});

export const cartClear = (payload) => ({
  type: CLEAR_CART,
  payload,
});
