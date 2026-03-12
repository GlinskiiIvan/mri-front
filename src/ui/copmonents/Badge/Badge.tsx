import React from 'react';
import { clsx } from 'clsx';
import Icon, { type IconPath } from '../Icon';
import styles from './Badge.module.scss';

type BadgeStatus = 'primary' | 'success' | 'warning' | 'danger' | 'accent';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps extends React.ComponentProps<'div'> {
    status: BadgeStatus;
    size: BadgeSize;
    text: string;
    icon: IconPath;
}

const Badge: React.FC<BadgeProps> = ({
    status, 
    size,
    text,
    icon,
    className,
    ...props
}) => {
    const classes = clsx(className, styles.wrapper);
    return (
        <div className={classes} style={{borderColor: `var(--border-${status})`}}>
            <Icon name={icon} color='tertiary' size='16' />
            {text}   
        </div>
    );
};

export default Badge;