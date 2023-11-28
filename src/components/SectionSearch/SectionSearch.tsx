import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import InputSearch from '../../UI/InputSuarch/InputSearch';
import SearchPreview from './SearchPreview/SearchPreview';

import { useDebounce } from 'hook/useDebounce';

import { useAppDispatch } from 'redux/store';
import { selectCitiesData } from 'redux/cities/selectors';
import { fetchCities } from 'redux/cities/asyncActions';
import { resetItems } from 'redux/cities/slice';

import './SectionSearch.css';

export default function SectionSearch() {
    const dispatch = useAppDispatch();

    const { items, status } = useSelector(selectCitiesData);

    const [inputValue, setInputValue] = useState<string>('');
    const [isOpen, setOpen] = useState<boolean>(true);

    const inputClckHandler = () => {
        setOpen(true);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };

    const getCities = useDebounce(() => {
        dispatch(
            fetchCities({
                inputValue,
            }),
        );
    }, 500);

    useEffect(() => {
        if (inputValue.length >= 3) {
            getCities();
        }
    }, [inputValue, inputValue.length]);

    useEffect(() => {
        return () => {
            dispatch(resetItems());
        };
    }, [inputValue]);

    useEffect(() => {
        return () => {
            dispatch(resetItems());
        };
    }, []);

    return (
        <section className="section-search">
            <div className="container">
                <div className="section-search__content">
                    <form className="section-search__form" onSubmit={handleSubmit}>
                        <InputSearch
                            placeholder="Укажите город"
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                            inputClckHandler={inputClckHandler}
                        />

                        {items?.length >= 1 && inputValue !== '' && inputValue.length > 2 && isOpen ? (
                            <SearchPreview
                                items={items}
                                setInputValue={setInputValue}
                                inputValue={inputValue}
                                setOpen={setOpen}
                            />
                        ) : null}
                    </form>
                    <div className="search-preview__item-error">
                        {items?.length === 0 && inputValue.length >= 3 && status === 'completed' ? (
                            <p className="search-preview__item-name">Ничего не найдено</p>
                        ) : null}
                    </div>

                    {/* {inputValue.length >= 3 && status === 'error' && <p className="error-text">Что-то пошло не так</p>} */}
                </div>
            </div>
        </section>
    );
}
