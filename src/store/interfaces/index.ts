export interface IResponseData<T> {
    data: T;
    totalPages: number;
    totalItems: number;
    currentPage: number;
};