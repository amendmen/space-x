import * as actionTypes from "../actions/actionTypes";


const initialState = {
  items: [],
  current: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHIPMENTS_SET_LIST:     
      return { ...state,  items: action.value };
    case actionTypes.SHIPMENTS_SET_CURRENT:
      const id = action.value;
      const newCurrent = state.items.find(item => item.id == id) || {}
      return { ...state,  current: newCurrent };   
  }
  return state;
};

export default reducer;
