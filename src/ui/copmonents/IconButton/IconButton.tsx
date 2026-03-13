import React from 'react';
import type { IconPath, IconSize } from '../Icon';
import clsx from 'clsx';
import Icon from '../Icon';
import styles from './IconButton.module.scss';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: IconPath;
  size?: IconSize;
}

const IconButton: React.FC<IconButtonProps> = ({
    name,
    size = '16',
    className,
    ...props
}) => {
    const classes = clsx(className, styles.wrapper);

    return (
        <button className={classes} {...props}>
            <Icon name={name} size={size} />
        </button>
    );
};

export default IconButton;