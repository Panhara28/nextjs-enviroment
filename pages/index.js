import Head from 'next/head';
import getConfig from 'next/config';

import styles from '../styles/Home.module.css';
import { gql, useQuery } from '@apollo/client';

// const {
//   publicRuntimeConfig: { API_FROM_CLIENT } = {},
//   publicRuntimeConfig: { API_FROM_CLIENT_SERVER } = {},
//   serverRuntimeConfig: { API_FROM_SERVER } = {},
// } = getConfig();

// console.log('API_FROM_CLIENT_ONLY >>>>  ', API_FROM_CLIENT);
// console.log('API_FROM_CLIENT_SERVER >>>>  ', API_FROM_CLIENT_SERVER);
// console.log('API_FROM_SERVER_ONLY >>>>  ', API_FROM_SERVER);

export default function Home() {
  const { data, loading } = useQuery(gql`
    query tagList{
      tagList{
        data{
          id
        }
      }
    }
  `)

  if(loading) return <div>Loading...</div>
  console.log(data);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <h2>{`API_FROM_CLIENT_ONLY: ${API_FROM_CLIENT || ''}`}</h2>
        <h2>{`API_FROM_CLIENT_SERVER: ${API_FROM_CLIENT_SERVER || ''}`}</h2>
        <h2>{`API_FROM_SERVER_ONLY: ${API_FROM_SERVER || ''}`}</h2> */}
      </main>
    </div>
  );
}
