import React from 'react';
import s from './Header.module.scss'
import logo from '../../style/svgIcons/ic_logo.svg'
import personAvatar from '../../style/svgIcons/ic_person.svg'
import ItemSVG from "../ItemSVG/ItemSVG";



const Header = () => {
    return (
        <div className={s.headerContainer}>
            <div className={s.innerContainer}>
            <ItemSVG text={'Wrench CRM'} img={logo} type={'header'} />
            <ItemSVG text={'Имя Фамилия'} img={personAvatar} type={'header'}
                     mobileVersion={true}/>
            </div>
        </div>
    );
};

export default Header;

