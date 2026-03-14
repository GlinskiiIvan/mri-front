import React from 'react';
import styles from './CheckBox.module.scss';
import clsx from 'clsx';
import type { ComponentStatus, CSSVars } from '../types';
import Icon from '../Icon';
import Label from '../Label';
import MessageBox from '../MessageBox';

interface CheckBoxProps extends React.ComponentProps<'div'> {
    label: string;
    status?: ComponentStatus;
    messages?: string[];
    value: boolean;
    changeValue: React.Dispatch<React.SetStateAction<boolean>>;
    disabled?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({
    label,
    status = 'default',
    messages = [],
    value,
    changeValue,
    className,
    style,
    disabled = false,
    ...props
}) => {

    const classes = clsx(className, styles.wrapper);
    const classesSquare = clsx(styles.square);

    const inlineStyle: CSSVars = {
        ...style,
        ...(disabled && {pointerEvents: 'none'})
    };

    const changeValueHandler = () => {
        changeValue(prev => !prev);
    }

    const inputId = React.useId();

    return (
        <div className={classes} style={inlineStyle} {...props}>
            <label htmlFor={inputId} className={styles.main}>
                <input
                    id={inputId}
                    type="checkbox"
                    checked={value}
                    onChange={changeValueHandler}
                    disabled={disabled}
                    className={styles.input} />
                <span className={classesSquare}>
                    <Icon name='CHECK' className={styles.check} color={disabled ? 'disabled' : 'inverse'} size='inherit' />
                </span>
                <Label>{label}</Label>
            </label>
            <MessageBox status={status} messages={messages} />
        </div>
    );
};

export default CheckBox;