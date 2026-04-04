 import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 import {IQueryGetAll} from "../../interfaces/query.interface";
 import {getQueryArgs} from "../../utils/getQueryArgs";
import { IResponseData } from '../../interfaces';

export interface IReagent {
    id: number;
    name: string;
    unit_measurement: string;
    quantity_total: number;
    reorder_threshold: number;
}

interface ICreateReagentBody {
    name: string;
    unit_measurement: string;
    quantity_added: number;
    reorder_threshold: number;
}

interface IUpdateReagentBody {
    id: number;
    name?: string;
    unit_measurement?: string;
    reorder_threshold?: number;
}

interface IAddStockBody {
    id: number;
    quantity_added: number;
}

export const reagentsAPI = createApi({
    reducerPath: 'reagentsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_REACT_APP_API_LAB_URI,
        prepareHeaders: (headers ) => {
            const token = JSON.parse(sessionStorage.getItem('tokens'))?.access_token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes: ['Reagents'],
    endpoints: (builder) => ({
        getAll: builder.query<IResponseData<IReagent[]>, IQueryGetAll>({
            query: (body) => `reagents${getQueryArgs(body)}`,
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            // Always merge incoming data to the cache entry
            merge: (currentCache, newItems, otherArgs) => {
                // currentCache.push(...newItems);
                return newItems
            },
            // Refetch when the page arg changes
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
            providesTags: (result) =>
                result
                    ? [
                        ...result.data.map(({ id }) => ({ type: 'Reagents' as const, id })),
                        { type: 'Reagents', id: 'LIST' },
                    ]
                    : [{ type: 'Reagents', id: 'LIST' }],
        }),

        getOne: builder.query<IReagent, number>({
            query: (id: number) => `reagents/${id}`,
        }),

        getAnalyzesForReagent: builder.query<{id: number; name: string}[], number>({
            query: (id: number) => `reagents/analyzes/${id}`,
        }),

        create: builder.mutation<any, ICreateReagentBody>({
            query: (body) => ({
                url: 'reagents',
                method: 'POST',
                body
            }),
            invalidatesTags: [{type: 'Reagents', id: 'LIST'}],
        }),

        update: builder.mutation<any, IUpdateReagentBody>({
            query(data) {
                const { id, ...body } = data
                return {
                    url: `reagents/${id}`,
                    method: 'PATCH',
                    body,
                }
            },
            invalidatesTags: [{type: 'Reagents', id: 'LIST'}],
        }),

        remove: builder.mutation<any, { id: number, reason: string }>({
            query(data) {
                const { id, reason } = data;
                return {
                    url: `reagents/${id}`,
                    method: 'DELETE',
                    body: { reason }
                }
            },
            invalidatesTags: [{type: 'Reagents', id: 'LIST'}],
        }),

        addStock: builder.mutation<any, IAddStockBody>({
            query: (body) => {
                const { id, ...rest } = body;
                return {
                    url: `reagents/add-stock/${id}`,
                    method: 'POST',
                    body: rest
                }
            },
            invalidatesTags: [{type: 'Reagents', id: 'LIST'}],
        }),
    }),
})