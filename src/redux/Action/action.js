import {
  ADDTONUM,
  REMOVTONUM,
  NAMECHANG,
  DATA_FATCH,
  ADDUSER,
  DELETEUSER,
} from './actionTypes';

export const add = (item) => {
  return {
    type: ADDTONUM,
    count: item + 10,
  };
};
// export const add = (item) => {
//   return (dispatch) => {
//     return dispatch({type: ADDTONUM, payload: item});
//   };
// };

export const remove = (item) => ({
  type: REMOVTONUM,
  count: item - 10,
});
export const namechang = () => ({
  type: NAMECHANG,
});
export const datafatch = () => ({
  type: DATA_FATCH,
});
export const AddName = (item) => ({
  type: ADDUSER,
  payload: item,
});
export const deleteUer = (item) => ({
  type: DELETEUSER,
  payload: item,
});
