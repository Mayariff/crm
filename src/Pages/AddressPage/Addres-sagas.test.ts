import {DataType} from "../../API/type";
import {setAddressWorkerSaga} from "./Address-sagas";
import {call, put} from "redux-saga/effects";
import {setAppErrorAC, setAppStatusAC} from "../../App/App-reducer";
import {addressAPI} from "../../API/api";
import {setAddressAC} from "./Address-reducer";

let setAddressData: DataType[]

beforeEach(() => {
    setAddressData = [
        {
            value: 'г Москва, Москва-Товарная МЦД',
            unrestricted_value: 'г Москва, Москва-Товарная МЦД',
            data: null
        },
        {
            value: 'Нижегородская обл, Лукояновский р-н, поселок Новая Москва',
            unrestricted_value: '607814, Нижегородская обл, Лукояновский р-н, поселок Новая Москва',
            data: {
                area: "Лукояновский",
                area_fias_id: "eb787249-c038-44d7-8d87-e2977244dea2",
                area_kladr_id: "5202900000000",
                area_type: "р-н",
                area_type_full: "район",
                area_with_type: "Лукояновский р-н"
            }
        }
    ]

})
test('setAddressWorkerSaga success flow', () => {
    let setAddress = {type: 'ADDRESSES/SET-ADDRESSES', value: 'Москва'};
    const gen = setAddressWorkerSaga(setAddress)
    expect(gen.next().value).toEqual(put(setAppStatusAC('loading')))
    expect(gen.next(setAddressData).value).toEqual(call(addressAPI.findAddress, setAddress.value))
    expect(gen.next(setAddressData).value).toEqual(put(setAddressAC(setAddressData)))
    expect(gen.next().value).toEqual(put(setAppStatusAC('succeeded')))
    expect(gen.next().done).toEqual(true)
})

test('setAddressWorkerSaga unsuccess flow', () => {
    let setAddress = {type: 'ADDRESSES/SET-ADDRESSES', value: 'Москва'};
    const gen = setAddressWorkerSaga(setAddress)
    expect(gen.next().value).toEqual(put(setAppStatusAC('loading')))
    expect(gen.next().value).toEqual(call(addressAPI.findAddress, setAddress.value))
    expect(gen.throw( "Some error occurred").value).toEqual(put(setAppErrorAC("Some error occurred")))
    expect(gen.next().value).toEqual(put(setAppStatusAC('failed')))
})
