import Head from 'next/head';
import getConfig from 'next/config';

import styles from '../styles/Home.module.css';
import { gql, useQuery } from '@apollo/client';

const {
  publicRuntimeConfig: { CLIENT_URL_ONLY } = {},
  publicRuntimeConfig: { BOTH_SERVER_CLIENT } = {},
  serverRuntimeConfig: { SERVER_API_URL } = {},
} = getConfig();

console.log('serverRuntimeConfig>>>>  ', CLIENT_URL_ONLY);
console.log('publicRuntimeConfig>>>>  ', BOTH_SERVER_CLIENT);
console.log('SERVER_API_URL>>>>  ', SERVER_API_URL);

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
        <h2>{`CLIENT_URL_ONLY: ${CLIENT_URL_ONLY || ''}`}</h2>
        <h2>{`SERVER_API_URL: ${SERVER_API_URL || ''}`}</h2>
        <h2>{`BOTH_SERVER_CLIENT: ${BOTH_SERVER_CLIENT || ''}`}</h2>
      </main>
    </div>
  );
}
