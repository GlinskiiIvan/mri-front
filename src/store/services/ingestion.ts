import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const ingestionApi = createApi({
    reducerPath: 'ingestionApi',

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

    tagTypes: ['Ingestion'],

    endpoints: (builder) => ({
        uploadStudy: builder.mutation<Boolean, FormData>({
            query: (body) => ({
                url: 'ingestion/upload/study',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Ingestion', id: 'LIST'}],
        }),
    }),
})