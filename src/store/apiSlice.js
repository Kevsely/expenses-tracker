import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseURL = "http://localhost:8080"

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseURL}), 
    endpoints: builder => ({
        // get categories
        getCategories: builder.query({
            // get: 'http://localhost:8080/api/categories'
            query: () => '/api/categories',
            providesTags: ["categories"]
        }),
        
        // get labels
        getLabels: builder.query({
            // get: 'http://localhost:8080/api/labels'
            query: () => "/api/labels",
            providesTags: ["transactions"]
        }),
        
        // add new transaction
        addTransaction: builder.mutation({
            // post: 'http://localhost:8080/api/transactions'
            query: (initialTransaction) => ({
                url: '/api/transactions',
                method: "POST",
                body: initialTransaction
            }),
            invalidatesTags: ['transactions']
        }),
        
        // delete record 
        deleteTransaction: builder.mutation({
            // delete: 'http://localhost:8080/api/transactions'
            query: recordId => ({
                url: "/api/transactions",
                method: "DELETE", 
                body: recordId
            }),
            invalidatesTags: ['transactions']
        })
    })
})

export default apiSlice;