import React from 'react';
import styles from './Table.module.scss';
import clsx from 'clsx';

//Shared
export interface ColumnTable<T> {
    readonly key: keyof T; 
    readonly label: string;
    readonly width?: 'auto' | string;
    readonly sortable: boolean;
}

export interface SortedColumn<T> {
    readonly by: keyof T;
    readonly order: 'asc' | 'desc';
};

export interface Sorting<T> {
    readonly sortedColumn?: SortedColumn<T>;
    readonly onchangeSortedColumn?: (item: SortedColumn<T>) => void;
}

//Th
interface ThProps<T> {
    readonly column: ColumnTable<T>;
    readonly sorting?: Sorting<T>;
}
export const Th = <T,>({
    column,
    sorting
}: ThProps<T>) => {
    const {sortedColumn, onchangeSortedColumn} = sorting || {};

    const isCurrentSorted = (sortedColumn !== undefined) && (sortedColumn.by === column.key);

    const isDesc = isCurrentSorted && sortedColumn.order === "desc";
    const isAsc = isCurrentSorted && sortedColumn.order === "asc";
    const futureSortingOrder = isDesc ? "asc" : "desc";

    const classesTh = clsx({[styles.sortable]: column.sortable});
    const classesOreder = clsx(styles.order, {[styles.DESC]: isDesc, [styles.ASC]: isAsc, [styles.none]: (!isDesc && !isAsc)});

    const sortTableHandler = () => {
        if(!onchangeSortedColumn || !column.sortable) return;
        onchangeSortedColumn({by: column.key, order: futureSortingOrder});
    }

    const {width = 'auto'} = column || {};
    const styleTh: React.CSSProperties = {
        width,
    };

    return (
        <th key={String(column.key)} className={classesTh} style={styleTh} onClick={sortTableHandler}>
            <div>
                <span>{column.label}</span>
                {column.sortable && (<div className={classesOreder}><span></span></div>)}
            </div>
        </th>
    )
}

// THead
interface THeadProps<T> {
    readonly columns: ColumnTable<T>[];
    readonly sorting?: Sorting<T>;
}
export const THead = <T,>({
    columns,
    sorting
}: THeadProps<T>) => {
    return (
        <thead>
            <tr>
                {columns.map(column => (
                    <Th column={column} sorting={sorting} />
                ))}
            </tr>
        </thead>
    )
}

// TBody
interface TBodyProps<T> {
    readonly entries: T[];
    readonly columns: ColumnTable<T>[];
}
export const TBody = <T extends Record<string, React.ReactNode>,>({
    columns,
    entries
}: TBodyProps<T>) => {

    return (
        <tbody>
            {entries.map((entry, i) => (
                <tr key={i}>
                    {columns.map(column => (
                        <td key={String(column.key)}>{entry[column.key]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

// Table

interface IProps extends React.HTMLAttributes<HTMLTableElement> {
    readonly maxHeight?: number;
    readonly fixedColumnWidth?: boolean;
}

const Table: React.FC<IProps> = ({
    maxHeight,
    fixedColumnWidth = false,
    className = '',
    style,
    children,
    ...props
}) => {
    const classesTable = clsx(styles.wrapper, className);
    const styleTable: React.CSSProperties = {
        ...style,
        tableLayout: fixedColumnWidth ? 'fixed' : 'auto',
    };

    return (
        <div style={{maxHeight: maxHeight || 'auto', overflow: 'auto'}}>
            <table className={classesTable} style={styleTable} border={0} {...props}>
                {children}
            </table>
        </div>
    );
};

export default Table;