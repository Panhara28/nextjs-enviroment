import { ApolloClient, InMemoryCache } from '@apollo/client';
import getConfig from 'next/config';

const {
  serverRuntimeConfig: { BASE_URL_ONLY } = {},
  serverRuntimeConfig: { SERVER_API_URL } = {},
  publicRuntimeConfig: { BASE_URL_BOTH } = {},
  publicRuntimeConfig: { BOTH_API_URL } = {},
} = getConfig();

export const client = new ApolloClient({
  uri: BOTH_API_URL || SERVER_API_URL,
  cache: new InMemoryCache()
});