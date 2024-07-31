// import React, { useState } from 'react';
// import SearchBar from '../components/SearchBar';
// import styles from '../styles/Home.module.css';

// const Home = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const tags = ['#전기', '#영어', '#예술', '#기독교', '#향수', '#청소', '#소설', '#인공지능', '#육아', '#자연', '#요리', '#학습', '#야구', '#감성', '#여행', '#미스터리', '#추억', '#긴장감'];

//   const handleSearch = () => {
//     console.log(`Searching for books with query: ${searchQuery}`);
//   };

//   const handleTagClick = (tag) => {
//     console.log(`Searching for books with tag: ${tag}`);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.logo}>#Books</div>
//       <SearchBar query={searchQuery} setQuery={setSearchQuery} onSearch={handleSearch} />
//       <div className={styles.tags}>
//         {tags.map(tag => (
//           <div key={tag} className={styles.tag} onClick={() => handleTagClick(tag)}>
//             {tag}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import SearchBar from '@/components/SearchBar';
import Tags from '@/components/Tags';

export default function Home() {
  const [books, setBooks] = useState([]);
  const tags = ['fiction', 'non-fiction', 'history', 'science', 'technology', 'fantasy', 'romance', 'thriller', 'mystery', 'biography', 'self-help', 'education', 'children'];

  const handleTagClick = async (tag) => {
    const response = await fetch(`http://localhost:3001/books/tag/${tag}`);
    const data = await response.json();
    setBooks(data);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Bookstore</title>
        <meta name="description" content="A simple bookstore app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.authButtons}>
          <Link href="/signin">
            <a className={styles.signIn}>#Sign In</a>
          </Link>
          <Link href="/signup">
            <a className={styles.signUp}>#Sign Up</a>
          </Link>
        </div>
        <h1 className={styles.title}>Welcome to Bookstore</h1>
        <p className={styles.description}>Find your favorite books</p>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <Tags tags={tags} onTagClick={handleTagClick} />
        <div className={styles.bookList}>
          {books.map(book => (
            <div key={book.id} className={styles.bookItem}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}