import {ADDTONUM,REMOVTONUM,NAMECHANG,DATA_FATCH} from '../Action/actionTypes';

const initialState={
     counter:0,
     names:"chirag ",
     name:"chirag",
     username:"Kapadiy",
     email:" chiragkapadiya@gmail.com",
     phone:7698816554,
     street:"surat",
     suite:"yogi",
     city:"surat",
     zipcode:395010,
     website:"ck",
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
                name:state.names="kapadiya",
            }
        case DATA_FATCH:
            return{
                ...state,
                name:state.name="ravi",
                username:state.UserName="kapadiya",
                email:state.Email="ravi@gmail.com",
                phone:state.Phone=7698816554,
                street:state.Street="ahm",
                suite:state.Suite="rajkot",
                city:state.City="pungam",
                zipcode:state.Zipcode=395512,
                website:state.WebSite="ravi kapadiya website"
            }
        default:
           return state;
                
    }

}