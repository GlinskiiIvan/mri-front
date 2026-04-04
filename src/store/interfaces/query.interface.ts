export interface IQueryGetAll {
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