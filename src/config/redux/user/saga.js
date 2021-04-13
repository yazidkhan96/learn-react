import axios from "axios";
import { call, put, select, takeLatest } from 'redux-saga/effects'
import { tokenSelector } from "../auth/selector";
import { userDeleteFailed, userDeleteSuccess, userFailed, userSuccess, userUpdate } from "./action";
import * as actionType from './type'
// WORKER
function* userFetchWorker() {
    try {
        const accessToken = yield select(tokenSelector)
        const res = yield call(axios.get, "https://tokoonline.glitch.me/users", { // call sama dengan await
          headers:{
            Authorization: `Bearer ${accessToken}`
          },
        })
        yield put(userSuccess(res.data.data)) // jika tidak membawa payload langsung saja ()
        yield put(userUpdate(res.data.data))
    } catch (error) { 
        yield put(userFailed(error))
    }
}

// WORKER Delete user
function* userDeleteFetchWorker(action) {
  try {
      const accessToken = yield select(tokenSelector)
      const res = yield call(axios.delete, `https://tokoonline.glitch.me/users/${action.payload.id}`, { // call sama dengan await
        headers:{
          Authorization: `Bearer ${accessToken}`
        },
      })
      yield put(userDeleteSuccess(res.data.data)) // jika tidak membawa payload langsung saja ()
  } catch (error) { 
      yield put(userDeleteFailed(error))
  }
}

// WATCHER
export const userWatcher = [
    takeLatest(actionType.userFetch,userFetchWorker),
    takeLatest(actionType.userDeleteFetch,userDeleteFetchWorker)
    // takeLatest(actionType.loginFetch,loginFetchWorker) Jika mempunyai lebih dari satu worker tinggal dipisah dengan koma
]
