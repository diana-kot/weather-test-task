import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Dispatch, SetStateAction } from 'react';

import { routerPath } from 'constants/routerPath';

import { useOutsideClick } from 'hook/useOutsideClick';

import { ICity } from 'redux/cities/types';

import './SearchPreview.css';

type Preview = {
    items: Array<ICity>;
    setInputValue: Dispatch<SetStateAction<string>>;
    setOpen: Dispatch<SetStateAction<boolean>>;
    inputValue: string;
};

const Hightlight = (filter: any, str: any) => {
  
    if (!filter) return str;
    const regexp = new RegExp(filter, 'ig');
    const matchValue = str.match(regexp);

    if (matchValue) {
        return str.split(regexp).map((s: any, index: number, array: any) => {
            if (index < array.length - 1) {
                const c = matchValue.shift();
                return (
                    <>
                        {s}
                        <span className={'name-color'}>{c}</span>
                    </>
                );
            }
            return s;
        });
    }
    return str;
};


export default function SearchPreview({ items, setInputValue, setOpen, inputValue }: Preview) {
    const dropDownRef = useOutsideClick(() => {
        setOpen(false);
    });

    const itemClickHandler = (name: string) => {
        setInputValue(name);
        setOpen((prev) => !prev);
    };

    return (
        <>
            <div ref={dropDownRef}>
                <ul className="search-preview__list">
                   
                    {items &&
                        items.length > 0 &&
                        items.map((item) => (
                            <li
                                key={item.id}
                                className="search-preview__item"
                                onClick={() => itemClickHandler(item.name)}
                            >
                                <Link  key={item.name} to={`${routerPath.CITIES}/${item.name}`} className="search-preview__link">
                                    <p className="search-preview__item-name">{Hightlight(inputValue, item.name)}</p>
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    );
}
