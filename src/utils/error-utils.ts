import {setAppErrorAC, setAppStatusAC} from "../App/App-reducer";
import {put} from "redux-saga/effects";


export function* handleServerNetworkErrorSaga() {
    yield put(setAppErrorAC( 'Some error occurred'))
    yield put(setAppStatusAC('failed'))
}