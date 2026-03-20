import React from 'react';
import styles from './FieldTrigger.module.scss';
import type { ComponentStatus } from '../types';
import clsx from 'clsx';
import Stack from '../Stack';

interface FieldTriggerProps extends React.ComponentProps<'div'> {
    status?: ComponentStatus;
}

const FieldTrigger: React.FC<FieldTriggerProps> = ({
    status,
    className,
    children,
    ...props
}) => {
    const classesWrapper = clsx(className, styles.wrapper, status ? styles[status] : styles.default);

    return (
        <Stack 
            className={classesWrapper} {...props}
            direction='row' gap='sm' justify='flex-start' align='center' >
            {children}
        </Stack>
    );
};

export default FieldTrigger;