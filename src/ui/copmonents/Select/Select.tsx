import React from 'react';
import styles from './Select.module.scss';
import FormField from '../FormField';
import FieldWrapper from '../FieldWrapper';
import type { ValidationInfo } from '../types';
import type { IconPath } from '../Icon';
import clsx from 'clsx';
import Icon from '../Icon';

interface SelectProps<T> extends React.ComponentProps<'div'> {
    label: string;
    placeholder?: string;
    validation?: ValidationInfo;
    disabled?: boolean;

    options: T[];
    value: T | undefined;
    onChangeValue: (value: T | undefined) => void;

    getKey?: (item: T) => React.Key;
    getValue?: (item: T) => React.ReactNode;

    decorativeIcon?: IconPath;
}

const Select = <T,>({
    options = [],
    getKey,
    getValue,
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
    className,
    ...props
}: SelectProps<T>) => {

    const [isOpen, setIsOpen] = React.useState(false);
    
    const classesLayout = clsx(className, styles.fieldLayot);
    const classesWrapper = clsx(styles.wrapper);
    const classesList = clsx(styles.list, {[styles.open]: isOpen});

    const isObject = (item: unknown) => (item !== undefined) && (typeof item === 'object');
    const isGetters = (getValue !== undefined) && (getKey !== undefined);

    const valueIsObject = isObject(value) && isGetters;

    const onClickTrigger = () => {
        setIsOpen(prev => !prev);
    }

    const onChangeValueHandler = (item: T) => {
        if(value === item) {
            onChangeValue(undefined);
        } else {
            onChangeValue(item);
        }
        setIsOpen(false);
    }

    return (
        <FormField 
            {...props} className={classesLayout}
            label={{text: label, direction: 'column'}} 
            validation={validation} disabled={disabled} >
            <FieldWrapper validation={validation} className={classesWrapper} >
                {decorativeIcon && <Icon name={decorativeIcon} />}
                <button className={styles.trigger} onClick={onClickTrigger} >
                    {value === undefined
                        ? (<span>{placeholder}</span>)
                        : valueIsObject
                        ? getValue(value as T)
                        : (value as React.ReactNode) }

                </button>
                <Icon name='ARROWDOWN' />
            </FieldWrapper>
            <ul className={classesList}>
                {options && options.map((item) => {
                    let display: React.ReactNode | string | number;
                    let key: React.Key;

                    if((item !== undefined) && isGetters && (typeof item === 'object')) {
                        display = getValue(item);
                        key = getKey(item);
                    } else {
                        display = item as string | number;
                        key = item as string | number;
                    }

                    const selected = valueIsObject ? (key === getKey(value as T)) : key === value;

                    const classesOption = clsx({[styles.selected]: selected});

                    return (
                        <button key={String(key)} className={classesOption} onClick={() => onChangeValueHandler(item)}>
                            {display}
                            <Icon name='CHECK' />
                        </button>
                    )
                })}
            </ul>
        </FormField>
    );
};

export default Select;