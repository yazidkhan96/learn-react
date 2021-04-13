import { all } from "@redux-saga/core/effects";
import { authWatcher } from "./auth/saga";
import { userWatcher } from "./user/saga";

const allWatcher = [
    ...authWatcher,
    ...userWatcher
]
// WATCHER
function* rootSaga(){
    yield all(allWatcher) // disini bakal ngewatch si action "loginFetch" jika ada action yg namanya login fetch maka akan menjalankan worker yang namanya loginFetchWorker

}

export {rootSaga};