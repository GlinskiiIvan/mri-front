import React from 'react';
import styles from './TextField.module.scss';
import FieldLayout from '../FieldLayout';
import type { CSSVars, ValidationInfo } from '../types';
import Icon, { type IconPath } from '../Icon';
import clsx from 'clsx';
import IconButton from '../IconButton';

interface ActionIcon {
    name: IconPath;
    onClick: () => void;
    visible?: boolean
}

interface TextFieldProps extends React.ComponentProps<'div'> {
    label: string;
    placeholder?: string;
    validation?: ValidationInfo;
    disabled?: boolean;

    value: string;
    onChangeValue: React.Dispatch<React.SetStateAction<string>>;

    decorativeIcon?: IconPath;
    actionIcon?: ActionIcon | React.ReactNode;
} 

const TextField: React.FC<TextFieldProps> = ({
    value,
    placeholder = '',
    onChangeValue,
    disabled = false,
    label,
    validation,
    decorativeIcon,
    actionIcon,
    className,
    style,
    ...props
}) => {
    const inputId = React.useId();
    const inputRef = React.useRef<HTMLInputElement>(null);

    const isActionIcon = typeof actionIcon === 'object' && actionIcon !== null && 'name' in actionIcon;

    const classes = clsx(className, styles.fieldLayot);
    const actionIconClasses = clsx(styles.actionIcon, {[styles.visible]: isActionIcon && actionIcon.visible});

    const inlineStyle: CSSVars = {
        ...style,
    };

    const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        onChangeValue(e.target.value);
    }

    const onClickActionHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, action: () => void) => {
        // e.preventDefault();
        // e.stopPropagation();
        action();
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    }

    return (
        <FieldLayout 
            className={classes} style={inlineStyle}
            label={{text: label, position: 'top'}} 
            validation={validation} disabled={disabled}
            htmlFor={inputId} {...props} >
            <div className={styles.wrapper}>
                {decorativeIcon && <Icon name={decorativeIcon} />}
                <input 
                    ref={inputRef}
                    id={inputId} type="text" placeholder={placeholder}
                    className={styles.input} disabled={disabled}
                    value={value} onChange={changeValueHandler} />
                {React.isValidElement(actionIcon) && actionIcon}
                {isActionIcon && <IconButton 
                                    className={actionIconClasses} disabled={disabled}
                                    name={actionIcon.name} onClick={(e) => onClickActionHandler(e, actionIcon.onClick)}
                                    tabIndex={!actionIcon.visible ? -1 : 0} />}
            </div>
        </FieldLayout>
    );
};

export default TextField;