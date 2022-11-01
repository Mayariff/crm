import React from "react";
import Layout from "../Layout/Layout";
import AddressPage from "../Pages/AddressPage/AddressPage";
import {Page} from "../Components";
import NewPage from "../Pages/NewsPage/NewPage";
import {useRoutes} from "react-router-dom";

export enum ROUTE {
    START = '/',
    ADDRESS = 'address',
    INDEV = 'in_developing'
}

export type routingType = {
    path: string,
    element: React.ReactElement,
    children?: Array<{
        path: string,
        element: React.ReactElement
    }>
}

export const routingData: Array<routingType> = [
    {
        path: ROUTE.START,
        element: <Layout/>,
        children: [{
            path: ROUTE.START,
            element:  <Page title={'Новости'}   children={ <NewPage />} />,
        },
            {
                path: ROUTE.ADDRESS,
                element: <Page title={'Поиск адресов'}   children={ <AddressPage />} />,
            },
            {
                path: ROUTE.INDEV,
                element: <div>в разработке</div>,
            },
        ]
    },
]

const Routing = () => {
    const routes: React.ReactElement | null = useRoutes(routingData)
    return routes
};

export default Routing;