import React from 'react';
import styles from './MessageBox.module.scss';
import { type ComponentSize, type ComponentStatus, ComponentStatusMap, type CSSVars } from '../types';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

const MessageBoxStatus: Record<'default', string> & typeof ComponentStatusMap = {
    ...ComponentStatusMap,
    default: 'secondary'
}

interface MessageBoxProps extends Exclude<React.ComponentProps<'div'>, 'children'> {
    messages: string[];
    status?: ComponentStatus;
    size?: ComponentSize;
}

const MessageBox: React.FC<MessageBoxProps> = ({
    messages = [],
    status = 'default',
    size = 'xs',
    className,
    style,
    ...props
}) => {
    const classes = clsx(className, styles.wrapper);

    const inlineStyle: CSSVars = {
        ...style,
        '--text-color': `var(--text-${MessageBoxStatus[status]})`,
        '--fs': `var(--fs-${size})`
    }

    return (
        <div className={classes} style={inlineStyle} {...props}>
            {messages && messages.map((m: string) => (
                <span key={uuidv4()}>{m}</span>
            ))}
        </div>
    );
};

export default MessageBox;