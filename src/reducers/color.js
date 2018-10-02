import * as types from './../constants/ActionTypes';
var initialState = '#ff5959';

var color = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_HEX:
      return state = action.color;
    default:
      return state;
  }
};

export default color;
