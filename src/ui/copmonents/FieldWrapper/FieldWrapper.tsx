import React from 'react';
import styles from './FieldWrapper.module.scss';
import type { ValidationInfo } from '../types';
import clsx from 'clsx';

interface FieldWrapperProps extends React.ComponentProps<'div'> {
    validation: ValidationInfo;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({
    validation,
    className,
    children,
    ...props
}) => {
    const classesWrapper = clsx(className, styles.wrapper, validation?.status && styles[validation.status]);

    return (
        <div className={classesWrapper} {...props}>
            {children}
        </div>
    );
};

export default FieldWrapper;