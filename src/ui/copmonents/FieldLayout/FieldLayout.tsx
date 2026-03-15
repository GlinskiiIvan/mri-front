import React from 'react';
import styles from './FieldLayout.module.scss';
import type { ComponentStatus, CSSVars } from '../types';
import clsx from 'clsx';
import Label from '../Label';
import MessageBox from '../MessageBox';

interface FieldLayoutProps extends React.ComponentProps<'div'> {
    status?: ComponentStatus;
    messages?: string[];
    disabled?: boolean;
    htmlFor?: string;
    label?: {
        text: string;
        position: 'top' | 'right';
    }
}

const FieldLayout: React.FC<FieldLayoutProps> = ({
    label,
    status = 'default',
    messages = [],
    className,
    style,
    disabled = false,
    htmlFor,
    children,
    ...props
}) => {
    const classes = clsx(className, styles.wrapper);
    const classesLabel = clsx(styles.label, label && styles[label.position]);

    const inlineStyle: CSSVars = {
        ...style,
        ...(disabled && {pointerEvents: 'none'})
    };

    const isTop = label && (label.position === 'top');
    const isRight = label && (label.position === 'right');

    const LabelText = () => (<Label className={styles.labelText}>{label?.text}</Label>);

    return (
        <div className={classes} style={inlineStyle} {...props}>
            <label htmlFor={htmlFor} className={classesLabel}>
                {(isTop) && LabelText()}
                {children}
                {(isRight) && LabelText()}
            </label>
            <MessageBox status={status} messages={messages} className={styles.msgBox} />
        </div>
    );
};

export default FieldLayout;