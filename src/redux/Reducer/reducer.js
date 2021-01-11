import {ADDTONUM,REMOVTONUM,NAMECHANG} from '../Action/actionTypes';

const initialState={
     counter:0,
     name:"chirag",
}
export const mainReducers = (state=initialState,action) =>{
    switch(action.type){
        case ADDTONUM :
            return {
                ...state,
                counter:state.counter+10,
            }
        case REMOVTONUM:
            return{
                ...state,
                counter:state.counter-10,
            }
        case NAMECHANG:
            return{
                ...state,
                name:state.name="kapadiya",
            }
        default:
           return state;
                
    }

}