import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {buildFindAllParams, type FindAllParams} from "../utils";
import type { Gender } from '../../common/enums';
import type { ResponseFindAll } from '../interfaces';

export interface CreatePatientDto {
    readonly doctorId: number;
    readonly fullName: string;
    readonly birthDate: string;
    readonly gender: Gender;
    readonly phone: string;
    readonly email?: string;
    readonly note?: string;
}

export interface UpdatePatientDto extends Partial<CreatePatientDto> {
    id: number;
    reason?: string;
}

export type Patient = {
    id: number,
    doctorId: number,
    isPublic: boolean,
    fullName: string,
    birthDate: string,
    gender: Gender,
    phone: string,
    email: string | null,
    note: string | null,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
}

export const patientApi = createApi({
    reducerPath: 'patientApi',

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

    tagTypes: ['Patients'],

    endpoints: (builder) => ({
        findAll: builder.query<ResponseFindAll<Patient[]>, FindAllParams>({
            query: (body) => `patients${buildFindAllParams(body)}`,
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
                        ...result.data.map(({ id }) => ({ type: 'Patients' as const, id })),
                        { type: 'Patients', id: 'LIST' },
                    ]
                    : [{ type: 'Patients', id: 'LIST' }],
        }),

        findOne: builder.query<Patient, number>({
            query: (id: number) => `patients/${id}`,
        }),

        create: builder.mutation<Patient, CreatePatientDto>({
            query: (body) => ({
                url: 'patients',
                method: 'POST',
                body
            }),
            invalidatesTags: [{type: 'Patients', id: 'LIST'}],
        }),

        update: builder.mutation<Patient, UpdatePatientDto>({
            query(data) {
                const { id, ...body } = data
                return {
                    url: `patients/${id}`,
                    method: 'PATCH',
                    body,
                }
            },
            invalidatesTags: [{type: 'Patients', id: 'LIST'}],
        }),

        remove: builder.mutation<boolean, {id: number, reason: string}>({
            query(data) {
                const { id, reason } = data;
                return {
                    url: `patients/${id}`,
                    method: 'DELETE',
                    body: {reason},
                }
            },
            invalidatesTags: [{type: 'Patients', id: 'LIST'}],
        }),
    }),
})