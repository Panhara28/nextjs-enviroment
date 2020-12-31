import { ApolloClient, InMemoryCache } from '@apollo/client';
import getConfig from 'next/config';

const {
  serverRuntimeConfig: { API_FROM_SERVER } = {},
  publicRuntimeConfig: { API_FROM_CLIENT_SERVER  } = {}
} = getConfig();

export const client = new ApolloClient({
  uri: API_FROM_SERVER || API_FROM_CLIENT_SERVER,
  cache: new InMemoryCache()
});