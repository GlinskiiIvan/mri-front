import React from 'react';
import styles from './Block.module.scss';
import type { IconPath } from '../Icon';
import clsx from 'clsx';
import Icon from '../Icon';

interface BlockProps extends React.ComponentProps<'div'> {
    title?: string;
    decorativeIcon?: IconPath;
    actions?: React.ReactNode;
}

const Block: React.FC<BlockProps> = ({
    title,
    decorativeIcon,
    actions,
    className,
    children,
    ...props
}) => {
    const classesWrapper = clsx(className, styles.wrapper);

    return (
        <div className={classesWrapper} {...props}>
            {(title || decorativeIcon || actions) && (
                <div className={styles.header}>
                    <div className={styles.title}>
                        {decorativeIcon && <Icon name={decorativeIcon} size='inherit' />}
                        {title && <h6>{title}</h6>}
                    </div>
                    {actions && actions}
                </div>
            )}
            <div className={styles.body}>
                {children}
            </div>
        </div>
    );
};

export default Block;