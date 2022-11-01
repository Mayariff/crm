import React from 'react';
import {Outlet} from 'react-router-dom';
import {Header, SideBar} from "../Components";
import s from './Layout.module.scss'
import {useWidthScreenListener} from "../utils/hooks";


const Layout = () => {

    let screenWidth = useWidthScreenListener()

    return (
        <div className={s.container}>
            <Header/>
            <div className={s.contentContainer}>
                <div className={s.content}>{screenWidth > 768 && <SideBar/>}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};


export default Layout;