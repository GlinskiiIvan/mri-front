export interface QueryfindAll {
    sorting?: {
        by: string;
        order: string;
    }
    dateFilter?: {
        dateFrom?: string;
        dateTo?: string;
    }
    search?: {
        field: string;
        value: string;
    };
    pagination?: {
        pageSize: number;
        page?: number;
    }
}

export interface ResponseFindAll<T> {
    data: T;
    totalPages: number;
    totalItems: number;
    currentPage: number;
};