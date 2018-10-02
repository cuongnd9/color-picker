import * as types from './../constants/ActionTypes';

export const getHex = color => {
  return {
    type: types.GET_HEX,
    color
  };
};
