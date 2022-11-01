import React from 'react';
import s from './ResultList.module.scss'
import {DataType} from "../../API/type";

type propsType = {
    list: Array<DataType>
    title?: string
}

const ResultList = ({list, title}: propsType) => {
    return (
        <div className={s.container}>
            {title && <h3 className={s.title}>{title}</h3>}
            {list.map(i => <div key={`${i} ${Math.random() * (1000000 + 1)}`} className={s.item}>{i.value}</div>)}
        </div>
    );
};

export default ResultList;