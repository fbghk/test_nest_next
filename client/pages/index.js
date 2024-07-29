import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SearchBar from '../components/SearchBar';
import Tags from '../components/Tags';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bookstore</title>
        <meta name="description" content="A simple bookstore app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Bookstore
        </h1>
        <p className={styles.description}>
          Find your favorite books
        </p>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <div className={styles.tags}>
          <Tags />
        </div>
      </main>
    </div>
  );
}