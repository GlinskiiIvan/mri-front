import React from 'react';
import styles from './Button.module.scss';
import type { IconPath } from '../Icon';
import clsx from 'clsx';
import Icon from '../Icon';
import type { ComponentSize } from '../types';

interface ButtonProps extends React.ComponentProps<'button'> {
    variant: 'primary' | 'secondary' | 'ghost';
    intent?: 'normal' | 'destructive';
    icon?: IconPath;
    size?: ComponentSize;
}

const Button: React.FC<ButtonProps> = ({
    variant,
    intent = 'normal',
    icon,
    size,
    className,
    style,
    children,
    ...props
}) => {
    const classes = clsx(className, styles.wrapper, styles[variant], styles[intent]);

    const inlineStyle: React.CSSProperties = {
        fontSize: `var(--fs-${size})`,
        ...style
    };

    return (
        <button className={classes} style={inlineStyle} {...props}>
            {icon && <Icon name={icon} size='inherit' />}
            {children && children}
        </button>
    );
};

export default Button;