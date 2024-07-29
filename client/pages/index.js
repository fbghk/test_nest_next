import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const tags = ['Fiction', 'Non-Fiction', 'Science', 'Fantasy', 'Biography', 'History', 'Children', 'Mystery', 'Romance', 'Thriller', 'Young Adult', 'Philosophy', 'Self-Help'];

  const handleSearch = () => {
    console.log(`Searching for books with query: ${searchQuery}`);
  };

  const handleTagClick = (tag) => {
    console.log(`Searching for books with tag: ${tag}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Bookstore</div>
      <SearchBar query={searchQuery} setQuery={setSearchQuery} onSearch={handleSearch} />
      <div className={styles.tags}>
        {tags.map(tag => (
          <div key={tag} className={styles.tag} onClick={() => handleTagClick(tag)}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;