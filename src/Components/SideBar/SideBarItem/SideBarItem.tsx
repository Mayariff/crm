import React, {MouseEventHandler} from 'react';
import ItemSVG from "../../ItemSVG/ItemSVG";
import s from './SideBarItem.module.scss'
import {NavLink} from "react-router-dom";
import polygonSVG from '../../../style/svgIcons/Polygon.svg'
import {itemType} from "../type";
import {ROUTE} from "../../../App/Routing";


type propsType = {
    item: itemType
    changeStatus: (value: string) => void
}


const SideBarItem = ({item, changeStatus}: propsType) => {

    const path = item.link ? item.link : ROUTE.INDEV
    const itemStyle = item.isActive ? `${s.container} ${s.active}` : s.container

    // стили для кнопки стрелки
    const buttonStyle = item.isOpen ? `${s.button} ${s.open}` : s.button
    const image = {backgroundImage: `url(${polygonSVG})`}

    //нажатие на пункт меню
    const onClickHandler: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> = (e) => {
        changeStatus(e.currentTarget.id)
    }


    return (
        <li className={itemStyle}>
            <NavLink to={path} className={s.navText} onClick={onClickHandler} id={item.id}>
                <ItemSVG text={item.title} img={item.img} type={'sideBar'}/>
            </NavLink>
            {item.children &&
                <button className={buttonStyle} style={image} onClick={onClickHandler} id={item.id}> </button>}
        </li>

    );
};

export default SideBarItem;