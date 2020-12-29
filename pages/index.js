import Head from 'next/head';
import getConfig from 'next/config';

import styles from '../styles/Home.module.css';
import { gql, useQuery } from '@apollo/client';

const {
  serverRuntimeConfig: { BASE_URL_ONLY } = {},
  serverRuntimeConfig: { SERVER_API_URL } = {},
  publicRuntimeConfig: { BASE_URL_BOTH } = {},
} = getConfig();

console.log('serverRuntimeConfig>>>>  ', BASE_URL_ONLY);
console.log('publicRuntimeConfig>>>>  ', BASE_URL_BOTH);
console.log('SERVER_API_URL>>>>  ', SERVER_API_URL);

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
        <h2>{`BASE_URL_ONLY: ${BASE_URL_ONLY || ''}`}</h2>
        <h2>{`BASE_URL_BOTH: ${BASE_URL_BOTH || ''}`}</h2>
        <h2>{`API_URL: ${API_URL || ''}`}</h2>
      </main>
    </div>
  );
}
