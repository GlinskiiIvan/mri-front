import React from 'react';
import styles from './CardInfo.module.scss';

export interface CardInfoOption extends React.ComponentProps<'ul'> {
    key: string;
    value: React.ReactNode;
}

interface CardInfoProps {
    oprions: CardInfoOption[];
}

const CardInfo: React.FC<CardInfoProps> = ({
    oprions,
    ...props
}) => {
    return (
        <ul className={styles.wrapper} {...props}>
            {oprions.map((item) => (
                <li className={styles.option}>
                    <span className={styles.key}>{item.key}:</span>
                    <span className={styles.divider} />
                    <span className={styles.value}>{item.value}</span>
                </li>
            ))}
        </ul>
    );
};

export default CardInfo;