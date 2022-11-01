import s from "./ItemSVG.module.scss";
import React from "react";
import {useWidthScreenListener} from "../../utils/hooks";
import {ReactComponent} from "*.svg";

export type propsType = {
    text: string,
    img: string | typeof ReactComponent,
    type: 'header' | 'sideBar' | 'button'
    mobileVersion?: boolean
}
export const ItemSVG = ({text, img, type, mobileVersion}: propsType) => {

    let screenWidth = useWidthScreenListener()

    const imgStyle = type === 'header' ? `${s.img} ${s.headerImg}` /*: (type=== "sideBar"?`${s.img} ${s.sideBarImg}`*/ :s.img
    const textStyle = type === 'header' ? `${s.text} ${s.headerText}` : (type=== "button"?`${s.text} ${s.btnText}`:s.text)


    return (
        <div className={s.itemContainer}>

            {typeof img==='string' ? <img src={img as string} className={imgStyle} alt={text}/> :<img/>}
            {mobileVersion ? screenWidth > 560 &&
                <span className={textStyle}>{text}</span>: <span className={textStyle}>{text}</span>}
        </div>
    );

}

export default ItemSVG;