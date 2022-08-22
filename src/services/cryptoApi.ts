import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "12c0e6721bmsh41eec9c2cd3710ap1d904ajsn07356989e434",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query<any, number>({
      query: (limit) => createRequest(`/coins?limit=${limit}`),
    }),
    getCryptoCoinBySymbol: builder.query<any, any>({
      query: (uuid) => createRequest(`/coin/${uuid}`),
    }),
    getCryptoCoinHistory: builder.query<any, any>({
      query: ({ uuid, timePeriod }) =>
        createRequest(`/coin/${uuid}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoCoinBySymbolQuery,
  useGetCryptoCoinHistoryQuery,
} = cryptoApi;
