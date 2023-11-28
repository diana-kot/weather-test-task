import { Routes, Route } from 'react-router-dom';

import { routerPath } from '../constants/routerPath';

import Cities from 'pages/Cities/Cities';
import DetailCity from 'pages/DetailCity/DetailCity';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export default function RouterConfig() {
    const routesConfig = [
        {
            path: routerPath.INDEX,
            element: <Cities />,
        },
        {
            path: routerPath.CITIES,
            element: <Cities />,
        },
        {
            path: routerPath.CITY,
            element: <DetailCity />,
        },
        {
            path: routerPath.ERROR,
            element: <NotFoundPage />,
        },
    ];

    return (
        <Routes>
            {routesConfig.map((route, index) => {
                return <Route key={index} path={route.path} element={route.element} />;
            })}
        </Routes>
    );
}
