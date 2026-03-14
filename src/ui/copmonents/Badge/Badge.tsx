import React from 'react';
import { clsx } from 'clsx';
import Icon, { type IconPath } from '../Icon';
import styles from './Badge.module.scss';
import { type ComponentSize, type ComponentStatus, ComponentStatusMap } from '../types';

const BadgeStatus: Record<'default', string> & typeof ComponentStatusMap = {
    ...ComponentStatusMap,
    default: 'primary',
};

interface BadgeProps extends React.ComponentProps<'div'> {
    status: ComponentStatus;
    size: ComponentSize;
    text: string;
    icon?: IconPath;
    action?: React.ReactElement<typeof Icon>;
}

const Badge: React.FC<BadgeProps> = ({
    status = 'default', 
    size = 'md',    
    text,
    icon,
    action,
    className,
    ...props
}) => {
    const classes = clsx(className, styles.wrapper, styles[size]);
    const style = {
        borderColor: `var(--border-${BadgeStatus[status]})`,
        fontSize: `var(--fs-${size})`
    };

    return (
        <div className={classes} style={style} {...props}>
            {icon && <Icon name={icon} color='tertiary' size='inherit' />}
            {text}   
            {action && action}
        </div>
    );
};

export default Badge;