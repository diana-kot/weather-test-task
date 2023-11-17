import React from 'react';

import Icon from '../../UI/Icon/Icon';

import './ManualText.css';

export default function ManualText() {
    return (
        <div className="manual">
            <div className="manual-text manual-text__top">
                <Icon id="Arrow1" size={38} />

                <p>
                    Начните вводить город, <br></br>
                    например, <span className="manual-text__span">Ижевск</span>
                </p>
            </div>
            <div className="manual-text manual-text__bottom">
                <p>
                    Используйте значок «закладки», <br></br> чтобы закрепить город на главной
                </p>
                <Icon id="Bookmark2" size={40} />
            </div>
        </div>
    );
}
