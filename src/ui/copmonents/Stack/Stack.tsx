import React from 'react';
import styles from './Stack.module.scss';
import type { CSSVars } from '../types';
import clsx from 'clsx';

interface StackProps extends React.ComponentProps<'div'> {
    direction?: React.CSSProperties['flexDirection'];
    justify?: React.CSSProperties['justifyContent'];
    align?: React.CSSProperties['alignItems'];
}

const Stack: React.FC<StackProps> = ({
    direction = 'column',
    justify = 'flex-start',
    align = 'center',
    className,
    style,
    children,
    ...props
}) => {

    const classesStack = clsx(styles.stack, className);

    const styleStack: CSSVars = {
        '--flex-direction-stack': direction,
        '--justify-content-stack': justify,
        '--align-items-stack': align,
        ...style,
    };
    
    return (
        <div className={classesStack} style={styleStack} {...props}>
            {children}
        </div>
    );
};

export default Stack;