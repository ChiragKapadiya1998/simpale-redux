import {
  ADDTONUM,
  REMOVTONUM,
  NAMECHANG,
  DATA_FATCH,
  ADDUSER,
  DELETEUSER,
} from '../Action/actionTypes';

const initialState = {
  userData: [],

  counter: 0,

  names: 'chirag ',
  name: 'chirag',
  username: 'Kapadiy',
  email: ' chiragkapadiya@gmail.com',
  phone: 7698816554,
  street: 'surat',
  suite: 'yogi',
  city: 'surat',
  zipcode: 395010,
  website: 'ck',
};

export const mainReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADDTONUM:
      return {
        ...state,
        counter: action.payload,
      };
    case REMOVTONUM:
      return {
        ...state,
        counter: action.payload,
      };
    case NAMECHANG:
      return {
        ...state,
        name: (state.names = 'kapadiya'),
      };
    case DATA_FATCH:
      return {
        ...state,
        name: (state.name = 'ravi'),
        username: (state.UserName = 'kapadiya'),
        email: (state.Email = 'ravi@gmail.com'),
        phone: (state.Phone = 7698816554),
        street: (state.Street = 'ahm'),
        suite: (state.Suite = 'rajkot'),
        city: (state.City = 'pungam'),
        zipcode: (state.Zipcode = 395512),
        website: (state.WebSite = 'ravi kapadiya website'),
      };
    case ADDUSER:
      return {
        ...state,
        userData: state.userData.concat({
          key: Math.random(),
          names: action.payload,
        }),
      };
    case DELETEUSER:
      return {
        ...state,
        userData: state.userData.filter(
          (element) => element.key !== action.payload,
        ),
      };
    default:
      return state;
  }
};
