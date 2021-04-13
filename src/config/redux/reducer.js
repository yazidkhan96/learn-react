import { combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import {mainReducer} from "./main/reducer";
import { userReducer } from "./user/reducer";
export const reducer = combineReducers({
    main: mainReducer,
    baru: mainReducer,
    auth: authReducer,
    user: userReducer,
});


