import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {buildFindAllParams, type FindAllParams} from "../utils";
import type { ResponseFindAll } from '../interfaces';
import type { Modality, Status } from '../../common/enums';

export type Study = {
    id: number;
    patientId: number;
    studyInstanceUID: string | null;
    studyId: string | null;
    specificCharacterSet: string | null;
    studyDateTime: Date | null;
    modality: Modality | null;
    description: string | null;
    institutionName: string | null;
    manufacturer: string | null;
    manufacturersModelName: string | null;
    stationName: string | null;
    referringPhysiciansName: string | null;
    status: Status;
    path: string | null;
    seriesCount: number | null;
    imagesCount: number | null;
    note: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}

export interface UpdateStudyDto extends Partial<Omit<Study, 'id' | 'patientId' | 'status' | 'path' | 'createdAt' | 'updatedAt' | 'deletedAt'>> {
    id: number;
    reason?: string;
}

export const studyApi = createApi({
    reducerPath: 'studyApi',

    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URI,
        prepareHeaders: (headers ) => {
            const token = JSON.parse(sessionStorage.getItem('access_token') || '');
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),

    tagTypes: ['Studies'],

    endpoints: (builder) => ({
        findAll: builder.query<ResponseFindAll<Study[]>, FindAllParams>({
            query: (body) => `study${buildFindAllParams(body)}`,
            serializeQueryArgs: ({ endpointName, queryArgs }) => {
                return `${endpointName}-${JSON.stringify({
                    sorting: queryArgs?.sorting,
                    search: queryArgs?.search,
                    dateFilter: queryArgs?.dateFilter
                })}`;
            },
            // Always merge incoming data to the cache entry
            merge: (currentCache, newItems, {arg}) => {
                if(arg.pagination?.page === 1) {
                    currentCache.data = newItems.data;
                    return;
                } else {
                    const existingIds = new Set(currentCache.data.map(i => i.id));
                    const filtered = newItems.data.filter(i => !existingIds.has(i.id));

                    currentCache.data.push(...filtered);
                }
            },
            // Refetch when the page arg changes
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
            providesTags: (result) =>
                result
                    ? [
                        ...result.data.map(({ id }) => ({ type: 'Studies' as const, id })),
                        { type: 'Studies', id: 'LIST' },
                    ]
                    : [{ type: 'Studies', id: 'LIST' }],
        }),

        findOne: builder.query<Study, number>({
            query: (id: number) => `studies/${id}`,
        }),

        // create: builder.mutation<Study, CreateStudyDto>({
        //     query: (body) => ({
        //         url: 'studies',
        //         method: 'POST',
        //         body
        //     }),
        //     invalidatesTags: [{type: 'Studies', id: 'LIST'}],
        // }),

        update: builder.mutation<Study, UpdateStudyDto>({
            query(data) {
                const { id, ...body } = data
                return {
                    url: `studies/${id}`,
                    method: 'PATCH',
                    body,
                }
            },
            invalidatesTags: [{type: 'Studies', id: 'LIST'}],
        }),

        remove: builder.mutation<boolean, {id: number, reason: string}>({
            query(data) {
                const { id, reason } = data;
                return {
                    url: `studies/${id}`,
                    method: 'DELETE',
                    body: {reason},
                }
            },
            invalidatesTags: [{type: 'Studies', id: 'LIST'}],
        }),
    }),
})