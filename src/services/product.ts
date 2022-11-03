// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IProduct, IMenu } from "../types";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-json-server.typicode.com/benirvingplt/products",
  }),
  endpoints: (builder) => ({
    getMenu: builder.query<IMenu[], void>({
      query: () => `menu`,
    }),
    getAllProducts: builder.query<IProduct[], void>({
      query: () => `products`,
    }),
    getProductById: builder.query<IProduct, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProductsQuery,
  useGetMenuQuery,
  useGetProductByIdQuery,
} = productApi;
