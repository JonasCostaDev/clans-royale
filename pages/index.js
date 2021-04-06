import axios from 'axios';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ clans }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Clash Royale Clans!
        </h1>

        <div className={styles.grid}>
            <ul>
                {clans?.items?.map((item) => (
                    <li>{item.name} - {item.type} - {item.members}</li>
                ))}
            </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Depois nos ajustaremos...</p>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const myApiKey = 'YOUR_API_KEY'
  const api = axios.create({
    baseURL: 'https://api.clashroyale.com/v1/',
    headers: {
      authorization: `Bearer ${myApiKey}`
    }
  })
  const response = await api.get('/clans?name=Brasil%20Squad');
  return {
    props: {
      clans: response.data,
    },
  }
}

