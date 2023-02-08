import { FC } from 'react';

import classes from './Button.module.scss';

interface ButtonProps {
    parentStyles?: string;
    disabled: boolean;
    children: string;
}

const Button: FC<ButtonProps> = ({ parentStyles, disabled, children }) => {
    return (
        <button
            type="button"
            disabled={disabled}
            className={`${classes.button} ${parentStyles}`}
        >
            {children}
        </button>
    );
};

export default Button;
