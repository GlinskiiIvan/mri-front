import React from 'react';
import styles from './Select.module.scss';
import FieldLayout from '../FieldLayout';
import FieldWrapper from '../FieldWrapper';
import type { ValidationInfo } from '../types';
import type { IconPath } from '../Icon';
import clsx from 'clsx';
import Icon from '../Icon';

interface SelectProps<T, V = T> extends React.ComponentProps<'div'> {
    label: string;
    placeholder?: string;
    validation?: ValidationInfo;
    disabled?: boolean;

    options: T[];
    value: V | undefined;
    onChangeValue: (value: V | undefined) => void;

    getKey?: (item: T) => React.Key;
    getValue?: (item: T) => React.ReactNode;
    getReturnValue?: (item: T) => V;

    decorativeIcon?: IconPath;
}

const Select = <T, V = T>({
    options = [],
    getKey,
    getValue,
    getReturnValue,
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
}: SelectProps<T, V>) => {

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
        const returnValue = getReturnValue
            ? getReturnValue(item)
            : (item as unknown as V);

        if(value === returnValue) {
            onChangeValue(undefined);
        } else {
            onChangeValue(returnValue);
        }
        setIsOpen(false);
    }

    return (
        <FieldLayout 
            {...props} className={classesLayout}
            label={{text: label, position: 'top'}} 
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
        </FieldLayout>
    );
};

export default Select;