import * as actionType from './type'
const loginInitialState = {
   loginPayload:undefined,
   loginError:undefined,
   loginRespons:undefined,
   loginLoading:false,
}

const initialState = {
    token: "",
    ...loginInitialState,
    action:""
}

export const authReducer = (state = initialState,action) => {
   switch (action.type) {
       case actionType.updateToken: 
       console.log('action token',action)

       return {
           ...state,
           token: action.payload,
       };
       //#region Login
       case actionType.loginFetch: 
       console.log('action fetch',action)
       return {
           ...state,
           loginPayload: action.payload,
           loginLoading:true,
           action: action.type
       };
       case actionType.loginSuccess: 
       console.log('action success',action)
       return {
           ...state,
           loginRespons: action.payload,
           loginLoading:false,
           action: action.type
       };
       case actionType.loginFailed: 
       return {
           ...state,
           loginError: action.payload,
           loginLoading:false,
           action: action.type
       };
       case actionType.loginReset: 
       return {
           ...state,
          ...loginInitialState,
           action: action.type
       };
       //# end region
       default:
       break;
       
   }
   return state;
}

 