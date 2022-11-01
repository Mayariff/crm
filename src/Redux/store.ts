import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {all} from 'redux-saga/effects';
import {appReducer} from "../App/App-reducer";
import {addressReducer} from "../Pages/AddressPage/Address-reducer";
import {tasksWatcherSaga} from "../Pages/AddressPage/Address-sagas";

export const rootReducer = combineReducers(
    {
        app: appReducer,
        address: addressReducer
    }
)

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

//store.subscribe()
sagaMiddleware.run(rootWatcher)

//watcher -сага, управляющая воркер-саги
function* rootWatcher() {
    //работающая  сага
    yield  all([
        tasksWatcherSaga()
    ])
}
