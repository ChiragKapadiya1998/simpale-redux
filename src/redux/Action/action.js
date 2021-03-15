import {
  ADDTONUM,
  REMOVTONUM,
  NAMECHANG,
  DATA_FATCH,
  ADDUSER,
  DELETEUSER,
} from './actionTypes';

export const add = () => ({
  type: ADDTONUM,
});

export const remove = () => ({
  type: REMOVTONUM,
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
