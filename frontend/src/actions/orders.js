import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_ORDERS, DELETE_ORDER, ADD_ORDER } from "./types";

// GET ORDERS
export const getOrders = () => (dispatch, getState) => {
  axios
    .get("/orders/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ORDERS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE ORDER
export const deleteOrder = (id) => (dispatch, getState) => {
  axios
    .delete(`/orders/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteOrder: "Order Deleted" }));
      dispatch({
        type: DELETE_ORDER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD ORDER
export const addOrder = (order) => (dispatch, getState) => {
  axios
    .post("/orders/", order, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addOrder: "Order Added" }));
      dispatch({
        type: ADD_ORDER,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
