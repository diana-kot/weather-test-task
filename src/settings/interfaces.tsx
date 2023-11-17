import { Dispatch, SetStateAction } from 'react';


export interface IInputSearch {
    placeholder: string;
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
    inputClckHandler?: () => void;
}

export interface MainLayoutInt {
    children: JSX.Element;
    enableFooter?: boolean;
    gradient?: boolean;
}



