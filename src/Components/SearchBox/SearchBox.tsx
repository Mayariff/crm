import React, {ChangeEventHandler, FocusEventHandler, MouseEventHandler, useState} from 'react';
import s from './SearchBox.module.scss'
import ItemSVG from "../ItemSVG/ItemSVG";
import loupeSVG from "../../style/svgIcons/btnLoupe.svg";


type propsType = {
    inputValue: string
    changeInput: (value: string) => void
    clickBTN: () => void
}

const SearchBox = ({inputValue, changeInput, clickBTN}: propsType) => {

    const [inputWasInFocus, setInputWasInFocus] = useState<boolean>(false)
    const onClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => clickBTN()
    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => changeInput(e.currentTarget.value)
    const onFocusHandler: FocusEventHandler<HTMLInputElement> = (e) => setInputWasInFocus(true)


    const bisableBTNcondition = inputValue.length < 3 && inputWasInFocus

    return (
        <div className={s.container}>
            <input value={inputValue}
                   onChange={onChangeHandler}
                   onFocus={onFocusHandler}
                   className={s.input}
                   placeholder={'Введите текст'}
                   disabled={false}/>
            <button onClick={onClickHandler}
                    className={s.button}
                    disabled={bisableBTNcondition}>
                <ItemSVG text={'Поиск'} img={loupeSVG} type={'button'}/>
            </button>
        </div>
    );
};

export default SearchBox;