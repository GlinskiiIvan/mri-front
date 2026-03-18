import React from 'react';
import styles from './Table.module.scss';
import clsx from 'clsx';
import type { CSSVars } from '../types';

//Shared
export interface ColumnTable<T, K extends keyof T = keyof T> {
    readonly key: K; 
    readonly label: string;
    readonly width?: 'auto' | string;
    readonly sortable: boolean;
    readonly render?: (value: T) => React.ReactNode;
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
                    <Th key={String(column.key)} column={column} sorting={sorting} />
                ))}
            </tr>
        </thead>
    )
}

// TBody
type RowSelect<T> = {
    readonly select?: {
        readonly selectedRow: T | undefined;
        readonly onChange: (row: T | undefined) => void;
    }
    readonly rowClick?: undefined;
};

type RowClick<T> = {
    readonly select?: undefined
    readonly rowClick?: (row: T) => void;
};

type TBodyProps<T> = {
    readonly data: T[];
    readonly columns: ColumnTable<T>[];
    readonly rowKey: keyof T;
    
} & (RowSelect<T> | RowClick<T>);
export const TBody = <T extends Record<string, unknown>,>({
    columns,
    data,
    rowKey,
    select,
    rowClick
}: TBodyProps<T>) => {
    
    const isSelectable = select !== undefined;
    const isClickable = rowClick !== undefined;
    const isInteractive = isSelectable || isClickable; 

    const tabIndex = isInteractive ? 0 : undefined;
    const role = isInteractive ? 'button' : 'row';

    const styleTr: CSSVars = {
        '--cursor-tr': isInteractive ? 'pointer' : 'default',
    }

    const isEqual = (row: T) => {
        if(!isSelectable) return;
        const selectedRow = select.selectedRow;
        if(!selectedRow) return;

        return row[rowKey] === selectedRow[rowKey];
    }

    const onClickHandler = (row: T) => {
        if(!isInteractive) return;

        if(isSelectable) {
            if(isEqual(row)) {
                select.onChange(undefined);
            } else {
                select.onChange(row);
            }
        }
        if(isClickable) {
            rowClick(row);
        }
    }

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLTableRowElement>, row: T) => {
        if(e.key === 'Enter' || e.key === ' ') {
            onClickHandler(row);
        }
    }

    return (
        <tbody>
            {data.map((row) => (
                <tr
                    key={String(row[rowKey])} tabIndex={tabIndex} role={role}
                    className={clsx({[styles.selected]: isEqual(row)})} style={styleTr}
                    onClick={() => onClickHandler(row)} 
                    onKeyDown={(e) => onKeyDownHandler(e, row)}>
                    {columns.map(column => (
                        <td key={String(column.key)}>
                            {column?.render 
                                ? column.render(row)
                                : row[column.key] as React.ReactNode
                            }
                        </td>
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