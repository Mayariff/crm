import React, {useState} from 'react';
import s from './SideBar.module.scss'
import SideBarItem from "./SideBarItem/SideBarItem";
import {itemType} from "./type";
import homeSVG from "../../style/svgIcons/ic_menu_home.svg";
import loupeSVG from "../../style/svgIcons/loupe.svg";
import tableSVG from "../../style/svgIcons/table.svg";
import calendarSVG from "../../style/svgIcons/calendar.svg";
import geoSVG from "../../style/svgIcons/geotag.svg";
import widgetSVG from "../../style/svgIcons/TV.svg";
import settingsSVG from "../../style/svgIcons/settings.svg";
import userSVG from "../../style/svgIcons/user.svg";
import financeSVG from "../../style/svgIcons/finance.svg";
import exitSVG from "../../style/svgIcons/exit.svg";
import {ROUTE} from "../../App/Routing";


const SideBar = () => {

        const data: Array<itemType> = [
            {
                id: '1',
                title: 'Главная',
                link: ROUTE.START,
                img: homeSVG,
                isActive: false
            },
            {
                id: '2',
                title: 'Поиск адресов',
                link: ROUTE.ADDRESS,
                img: loupeSVG,
                isActive: false
            },
            {
                id: '3',
                title: 'Таблицы',
                img: tableSVG,
                isActive: false
            },
            {
                id: '4',
                title: 'Календарь',
                img: calendarSVG,
                isActive: false
            },
            {
                id: '5',
                title: 'Карты',
                img: geoSVG,
                isActive: false
            },
            {
                id: '6',
                title: 'Виджеты',
                img: widgetSVG,
                isActive: false
            },
            {
                id: '7',
                title: 'Настройки',
                img: settingsSVG,
                isOpen: false,
                children: [
                    {
                        id: '71',
                        title: 'Настройки профиля',
                        img: userSVG,
                        isActive: false
                    },
                    {
                        id: '72',
                        title: 'Управление финансами',
                        img: financeSVG,
                        isActive: false
                    },
                ]
            },
            {
                id: '8',
                title: 'Выход',
                img: exitSVG,
                isActive: false
            },

            /*{
                id: 'f1',
                title: 'Главная',
                link: ROUTE.START,
                img: homeSVG,
                isActive: false
            },
            {
                id: 'f2',
                title: 'Поиск адресов',
                link: ROUTE.ADDRESS,
                img: loupeSVG,
                isActive: false
            },
            {
                id: 'f3',
                title: 'Таблицы',
                img: tableSVG,
                isActive: false
            },
            {
                id: 'f4',
                title: 'Календарь',
                img: calendarSVG,
                isActive: false
            },
            {
                id: 'f5',
                title: 'Карты',
                img: geoSVG,
                isActive: false
            },
            {
                id: 'f6',
                title: 'Виджеты',
                img: widgetSVG,
                isActive: false
            },
            {
                id: 'f7',
                title: 'Настройки',
                img: settingsSVG,
                isOpen: false,
                children: [
                    {
                        id: 'f71',
                        title: 'Настройки профиля',
                        img: userSVG,
                        isActive: false
                    },
                    {
                        id: 'f72',
                        title: 'Управление финансами',
                        img: financeSVG,
                        isActive: false
                    },
                ]
            },
            {
                id: 'f8',
                title: 'Выход',
                img: exitSVG,
                isActive: false
            },*/

        ]
        const [items, setItems] = useState<Array<itemType>>(data)

        const onClickHandler = (value: string) => {
            setItems(items => items.map((i, index, arr) => {
                    if (i.children) {
                        return i.id === value ? {...i, isOpen: !i.isOpen} :
                            {
                                ...i,
                                children: i.children.map(i => i.id === value ? {...i, isActive: true} : {...i, isActive: false})
                            }
                    } else {
                        return i.id === value ? {...i, isActive: true} : {...i, isActive: false}
                    }
                }
            ))
        }


        return (
            <aside className={s.sideBarContainer}>
                <h3 className={s.title}>Меню</h3>
                <ol className={s.itemsList}>
                    {items.map(i => <React.Fragment key={i.id}>
                        <SideBarItem item={i}
                                     key={i.id}
                                     changeStatus={onClickHandler}/>
                        {i.isOpen && i.children && i.children.length > 0 &&
                            <ol className={s.childrenList}>
                                {i.children.map(i => <SideBarItem item={i}
                                                                  key={i.id}
                                                                  changeStatus={onClickHandler}/>)
                                }
                            </ol>
                        }
                    </React.Fragment>)}
                </ol>
            </aside>
        );
    }
;

export default SideBar;