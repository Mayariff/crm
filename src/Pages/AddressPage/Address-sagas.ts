import {call, put, takeEvery} from "redux-saga/effects";
import {setAppStatusAC} from "../../App/App-reducer";
import {DataType} from "../../API/type";
import {addressAPI} from "../../API/api";
import {setAddressAC} from "./Address-reducer";
import {handleServerNetworkErrorSaga} from "../../utils/error-utils";

export const _setAddressAC = (value: string) => ({type: 'ADDRESSES/SET-ADDRESSES', value})

export function* setAddressWorkerSaga(action: ReturnType<typeof _setAddressAC>) {
    yield put(setAppStatusAC('loading'))
    try {
        const res: DataType[] = yield call(addressAPI.findAddress, action.value)
        yield put(setAddressAC(res))
        yield put(setAppStatusAC('succeeded'))
    } catch (error) {
        yield* handleServerNetworkErrorSaga()
    }
}

export function* tasksWatcherSaga() {
    yield  takeEvery('ADDRESSES/SET-ADDRESSES', setAddressWorkerSaga);
}