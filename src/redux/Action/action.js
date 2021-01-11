import {ADDTONUM,REMOVTONUM,NAMECHANG,DATA_FATCH} from './actionTypes';

export const add = () => ({
    type : ADDTONUM,
});

export const remove = () => ({
    type : REMOVTONUM,
});
export const namechang = () =>({
    type :NAMECHANG,
})
export const datafatch = () =>({
    type:DATA_FATCH
})
