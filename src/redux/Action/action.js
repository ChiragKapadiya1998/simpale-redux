import {ActionSheetIOS} from 'react-native';
import {
  ADDTONUM,
  REMOVTONUM,
  ADDTOSAGA,
  REMOVETOSAGA,
  // NAMECHANG,
  // DATA_FATCH,
  // ADDUSER,
  // DELETEUSER,
} from './actionTypes';

export const add = (item) => {
  return {
    type: ADDTOSAGA,
  };
};

export const addSaga = (adds) => {
  return {
    type: ADDTONUM,
    payload: adds + 10,
  };
};

export const remove = (item) => ({
  type: REMOVETOSAGA,
});

export const removeSaga = (deletes) => ({
  type: REMOVTONUM,
  payload: deletes - 10,
});

// export const namechang = () => ({
//   type: NAMECHANG,
// });
// export const datafatch = () => ({
//   type: DATA_FATCH,
// });
// export const AddName = (item) => ({
//   type: ADDUSER,
//   payload: item,
// });
// export const deleteUer = (item) => ({
//   type: DELETEUSER,
//   payload: item,
// });
