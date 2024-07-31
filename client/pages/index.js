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


// import Head from 'next/head';
// import Link from 'next/link';
// import styles from '@/styles/Home.module.css';
// import SearchBar from '@/components/SearchBar';
// import Tags from '@/components/Tags';

// const StyledLink = ({ href, children, className }) => (
//   <Link href={href} passHref>
//     <span className={className}>{children}</span>
//   </Link>
// );

// export default function Home({ tags, books, handleTagClick }) {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Bookstore</title>
//         <meta name="description" content="A simple bookstore app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <div className={styles.authButtons}>
//           <StyledLink href="/signin" className={styles.signIn}>#Sign In</StyledLink>
//           <StyledLink href="/signup" className={styles.signUp}>#Sign Up</StyledLink>
//         </div>
//         <h1 className={styles.title}>Welcome to Bookstore</h1>
//         <p className={styles.description}>Find your favorite books</p>
//         <div className={styles.searchBar}>
//           <SearchBar />
//         </div>
//         <Tags tags={tags} onTagClick={handleTagClick} />
//         <div className={styles.bookList}>
//           {books.map(book => (
//             <div key={book.id} className={styles.bookItem}>
//               <h3>{book.title}</h3>
//               <p>{book.author}</p>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import SearchBar from '@/components/SearchBar';
import Tags from '@/components/Tags';

const StyledLink = ({ href, children, className }) => (
  <Link href={href} passHref>
    <span className={className}>{children}</span>
  </Link>
);

export default function Home({ tags = [], books = [], handleTagClick }) {
  // books가 정의되지 않은 경우 빈 배열을 기본값으로 설정
  books = books || [];

  return (
    <div className={styles.container}>
      <Head>
        <title>Bookstore</title>
        <meta name="description" content="A simple bookstore app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.authButtons}>
          <StyledLink href="/signin" className={styles.signIn}>#Sign In</StyledLink>
          <StyledLink href="/signup" className={styles.signUp}>#Sign Up</StyledLink>
        </div>
        <h1 className={styles.title}>Welcome to Bookstore</h1>
        <p className={styles.description}>Find your favorite books</p>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <Tags tags={tags} onTagClick={handleTagClick} />
        <div className={styles.bookList}>
          {books.map((book) => (
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