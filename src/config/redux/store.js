import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./reducer";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { rootSaga } from "./saga";
import createSagaMiddleware from 'redux-saga';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["auth"]
    // blacklist:['auth']
};

const persistedReducer = persistReducer(persistConfig, reducer);
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);


