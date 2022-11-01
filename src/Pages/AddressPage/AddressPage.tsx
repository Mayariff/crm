import React, {useState} from 'react';
import {SearchBox} from "../../Components";
import ResultList from "../../Components/ResultList/ResultList";
import {_setAddressAC} from "./Address-sagas";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/commonTypes";
import {DataType} from "../../API/type";


const AddressPage = () => {

    const dispatch = useDispatch()
    const addresses = useSelector<AppRootStateType, DataType[]>(state => state.address)
    const [inputValue, setInputValue] = useState<string>('')
    const changeInput = (value: string) => {
        setInputValue(value)
    }
    const clickBTN = () => {
        dispatch(_setAddressAC(inputValue))
    }

    return (<>
            <h4>Введите интересующий адрес</h4>
            <SearchBox inputValue={inputValue} changeInput={changeInput} clickBTN={clickBTN}/>
            {addresses.length > 0 && <ResultList list={addresses} title={'Адреса'}/>}
        </>
    );
};

export default AddressPage;