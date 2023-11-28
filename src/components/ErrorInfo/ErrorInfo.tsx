import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routerPath } from 'constants/routerPath';

import GoBack from '../../UI/GoBack/GoBack';

export default function ErrorInfo() {
    const navigate = useNavigate();
    return (
        <div className="content__error-info error-text">
            <h2>404 😕</h2>
            <p>Попробуйте еще раз</p>
            <GoBack icon={'none'} text={'Вернуться на главную страницу'} callback={() => navigate(routerPath.CITIES)} />
        </div>
    );
}
