import React from 'react';
import Icons from '../../assets/sprite.svg';

interface IconInt {
    className?: string;
    id: string;
    size?: number;
    color?: string;
    onClick?: any;
}

export default function Icon({ id, size, color, onClick }: IconInt) {
    return (
        <svg onClick={onClick} className={`icon icon-${id}`} fill={color} width={size} height={size}>
            <use xlinkHref={`${Icons}#icon-${id}`} />
        </svg>
    );
}
