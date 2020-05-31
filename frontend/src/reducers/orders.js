import {
  GET_ORDERS,
  DELETE_ORDER,
  ADD_ORDER,
  CLEAR_ORDERS,
} from "../actions/types.js";

const initialState = {
  orders: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case CLEAR_ORDERS:
      return {
        ...state,
        orders: [],
      };
    default:
      return state;
  }
}
