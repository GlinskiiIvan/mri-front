import React from 'react';
import styles from './Modal.module.scss';
import type { BlockProps } from '../Block';
import Block from '../Block';
import IconButton from '../IconButton';
import clsx from 'clsx';
import { createPortal } from 'react-dom';

interface ModalProps extends BlockProps {
    visible: boolean;
    setVisible: (s: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({
    visible,
    setVisible,
    children,
    ...props
}) => {

    const wrapperRef = React.useRef<HTMLDivElement>(null);

    const classesWrapper = clsx(styles.wrapper, {[styles.open]: visible});

    const onCloseHandler = React.useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    React.useEffect(() => {
        if (!visible) return;

        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        const currentPaddingRight = (getComputedStyle(document.body).paddingRight).replace('px', '');
        

        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${Number(currentPaddingRight) + scrollBarWidth}px`;

        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [visible]);

    React.useEffect(() => {
        if(!visible) return;

        const handleClickOutside = (e: MouseEvent) => {
            if(e.target === wrapperRef.current) {
                onCloseHandler();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onCloseHandler, visible]);

    React.useEffect(() => {
        if(!visible) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onCloseHandler();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onCloseHandler, visible]);

    return createPortal(
        <div ref={wrapperRef} className={classesWrapper}>
            <Block fullWidth className={styles.modal} {...props} 
                actions={<IconButton icon={{name: 'CLOSE', size: 'xl'}} onClick={onCloseHandler } />} >
                <div className={styles.body}>
                    {children}
                </div>
            </Block>
        </div>,
        document.body
    );
};

export default Modal;