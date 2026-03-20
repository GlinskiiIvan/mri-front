import React from 'react';
import styles from './TextField.module.scss';
import FormField from '../FormField';
import type { CSSVars, ValidationInfo } from '../types';
import Icon, { type IconPath } from '../Icon';
import clsx from 'clsx';
import IconButton from '../IconButton';
import FieldWrapper from '../FieldWrapper';

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
    validation = {
        status: 'default',
        messages: []
    },
    decorativeIcon,
    actionIcon,
    className,
    style,
    ...props
}) => {
    const inputId = React.useId();
    const inputRef = React.useRef<HTMLInputElement>(null);

    const isActionIcon = typeof actionIcon === 'object' && actionIcon !== null && 'name' in actionIcon;

    const classesLayout = clsx(className, styles.fieldLayot);
    const classesWrapper = clsx(styles.wrapper, validation?.status && styles[validation.status]);
    const actionIconClasses = clsx(styles.actionIcon, {[styles.visible]: isActionIcon && actionIcon.visible});

    const inlineStyle: CSSVars = {
        ...style,
    };

    const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        onChangeValue(e.target.value);
    }

    const onClickActionHandler = (action: () => void) => {
        action();
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    }

    return (
        <FormField 
            className={classesLayout} style={inlineStyle}
            label={{text: label, direction: 'column'}} 
            validation={validation} disabled={disabled}
            htmlFor={inputId} {...props} >
            <FieldWrapper validation={validation} className={classesWrapper} >
                {decorativeIcon && <Icon name={decorativeIcon} />}
                <input 
                    ref={inputRef}
                    id={inputId} type="text" placeholder={placeholder}
                    className={styles.input} disabled={disabled}
                    value={value} onChange={changeValueHandler} />
                {React.isValidElement(actionIcon) && actionIcon}
                {isActionIcon && <IconButton 
                                    className={actionIconClasses} disabled={disabled}
                                    name={actionIcon.name} onClick={() => onClickActionHandler(actionIcon.onClick)}
                                    tabIndex={!actionIcon.visible ? -1 : 0} />}
            </FieldWrapper>
        </FormField>
    );
};

export default TextField;