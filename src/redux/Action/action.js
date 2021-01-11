import {ADDTONUM,REMOVTONUM,NAMECHANG} from './actionTypes';

export const add = () => ({
    type : ADDTONUM,
});

export const remove = () => ({
    type : REMOVTONUM,
});
export const namechang = () =>({
    type :NAMECHANG,
})