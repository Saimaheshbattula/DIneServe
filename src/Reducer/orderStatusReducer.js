// confirmorderreducer.js
const initialState = [];

const confirmStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ORDER_STATUS':
      return state.map(order =>
        order.orderno === action.payload.orderno
          ? { ...order, status: action.payload.status }
          : order
      );
    default:
      return state;
  }
};

export default confirmStatusReducer;
