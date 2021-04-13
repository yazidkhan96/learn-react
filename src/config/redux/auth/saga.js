import axios from "axios";
import { call, put, takeLatest } from 'redux-saga/effects'
import { updateToken,loginFailed,loginSuccess } from "./action";
import * as actionType from './type'
// WORKER
function* loginFetchWorker(action) {
    try {
        const res = yield call(axios.post, "http://tokoonline.glitch.me/login", { // call sama dengan await
            email: action.payload.email, // ini payload
            password: action.payload.password // ini payload
        })
        yield put(loginSuccess(res.data)) // jika tidak membawa payload langsung saja ()
        yield put(updateToken(res.data.accessToken)); // put itu sama dengan dispatch action 
    } catch (error) { 
        yield put(loginFailed(error))
    }
}


// WATCHER
export const authWatcher = [
    takeLatest(actionType.loginFetch,loginFetchWorker),
    // takeLatest(actionType.loginFetch,loginFetchWorker) Jika mempunyai lebih dari satu worker tinggal dipisah dengan koma
]
