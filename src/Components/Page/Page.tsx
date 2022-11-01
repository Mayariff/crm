import React from 'react';
import s from "./Page.module.scss";


type propsType = {
    children: React.ReactNode|JSX.Element|JSX.Element[]
    title?: string
}



const Page = ({children, title}: propsType) => {
    return (
        <div className={s.container}>
            {title && <h1 className={s.title}>{title}</h1>}
            <div className={s.contentBlock}>
                {children}
            </div>
        </div>
    );
};

export default Page;