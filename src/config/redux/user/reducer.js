import * as actionType from './type'
const userInitialState = {
   userPayload:undefined,
   userError:undefined,
   userRespons:undefined,
   userLoading:false,
}
const userDeleteInitialState = {
    userDeletePayload:undefined,
    userDeleteError:undefined,
    userDeleteRespons:undefined,
    userDeleteLoading:false,
 }
const initialState = {
    ...userInitialState,
    ...userDeleteInitialState,
    action:"",
    users: []
}

export const userReducer = (state = initialState,action) => {
   switch (action.type) {
       //#region user
       case actionType.userFetch: 
       return {
           ...state,
           userPayload: action.payload,
           userLoading:true,
           action: action.type
       };
       case actionType.userSuccess: 
       return {
           ...state,
           userRespons: action.payload,
           userLoading:false,
           action: action.type
       };
       case actionType.userUpdate: 
       return {
           ...state,
           users: action.payload,
           userLoading:false,
           action: action.type
       };
       case actionType.userFailed: 
       return {
           ...state,
           userError: action.payload,
           userLoading:false,
           action: action.type
       };
       case actionType.userReset: 
       return {
           ...state,
          ...userInitialState,
           action: action.type
       };
       //# end region

       //# region delete
       case actionType.userDeleteFetch: 
       return {
           ...state,
           userDeletePayload: action.payload,
           userDeleteLoading:true,
           action: action.type
       };
       case actionType.userDeleteSuccess: 
       return {
           ...state,
           userDeleteRespons: action.payload,
           userDeleteLoading:false,
           action: action.type
       };
       case actionType.userDeleteFailed: 
       return {
           ...state,
           userDeleteError: action.payload,
           userDeleteLoading:false,
           action: action.type
       };
       case actionType.userDeleteReset: 
       return {
           ...state,
          ...userDeleteInitialState,
           action: action.type
       };
       default:
       break;
       
   }
   return state;
}

 