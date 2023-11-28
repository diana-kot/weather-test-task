import { ReactComponent as Arrow } from '../../assets/images/svg/chevron_big_left.svg';

// import Icon from '../Icon/Icon';

import './GoBack.css';

type ButtonIconTypes = 'none' | 'arrow';

interface ButtonInt {
    text: JSX.Element | string;
    type?: any;
    icon?: ButtonIconTypes;
    callback?: () => void;
}

export default function GoBack({ type = 'button', text, icon = 'arrow', callback }: ButtonInt) {
    

    return (
        <button type={type} className={`back-button button`} onClick={callback}>
            {icon === 'arrow' && (
                // <Icon id="Arrow" size={24} className={`back-button__icon`} />
                <Arrow className={`icon-Arrow`} />
            )}
            {text}
        </button>
    );
}
