import Head from 'next/head';
import getConfig from 'next/config';

import styles from '../styles/Home.module.css';
import { gql, useQuery } from '@apollo/client';

const {
  publicRuntimeConfig: { CLIENT_URL_ONLY } = {},
  publicRuntimeConfig: { BOTH_SERVER_CLIENT } = {},
  publicRuntimeConfig: { API_FROM_CLIENT } = {},
  publicRuntimeConfig: { API_FROM_CLIENT_SERVER } = {},
  serverRuntimeConfig: { SERVER_API_URL } = {},
  serverRuntimeConfig: { API_FROM_SERVER } = {},
} = getConfig();
console.log('publicRuntimeConfig >>>>  ', API_FROM_CLIENT);
console.log('publicRuntimeConfig >>>>  ', CLIENT_URL_ONLY);
console.log('serverRuntimeConfig >>>>  ', SERVER_API_URL);
console.log('serverRuntimeConfig >>>>  ', API_FROM_SERVER);
console.log('publicRuntimeConfig + serverRuntimeConfig>>>>  ', BOTH_SERVER_CLIENT);
console.log('publicRuntimeConfig + serverRuntimeConfig >>>>  ', API_FROM_CLIENT_SERVER);

export default function Home() {
//   const { data, loading } = useQuery(gql`
//     query tagList{
//       tagList{
//         data{
//           id
//         }
//       }
//     }
//   `)

//   if(loading) return <div>Loading...</div>
//   console.log(data);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>{`API_FROM_CLIENT: ${API_FROM_CLIENT || ''}`}</h2>
        <h2>{`CLIENT_URL_ONLY: ${CLIENT_URL_ONLY || ''}`}</h2>
        <h2>{`SERVER_API_URL: ${SERVER_API_URL || ''}`}</h2>
        <h2>{`API_FROM_SERVER: ${API_FROM_SERVER || ''}`}</h2>
        <h2>{`API_FROM_CLIENT_SERVER: ${API_FROM_CLIENT_SERVER || ''}`}</h2>
        <h2>{`BOTH_SERVER_CLIENT: ${BOTH_SERVER_CLIENT || ''}`}</h2>
      </main>
    </div>
  );
}
