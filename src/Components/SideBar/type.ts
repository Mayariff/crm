import React from "react";
import {ROUTE} from "../../App/Routing";
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

export type itemType = {
    id: string,
    title: string,
    link?: string,
    img: string,
    isActive?: boolean
    isOpen?: boolean
    children?: Array<itemType>
}


export  const  data: Array<itemType> = [
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

    ]


export const MenuContext= React.createContext(data)
