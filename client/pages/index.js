import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const tags = ['#전기', '#영어', '#예술', '#기독교', '#향수', '#청소', '#소설', '#인공지능', '#육아', '#자연', '#요리', '#학습', '#야구', '#감성', '#여행', '#미스터리', '#추억', '#긴장감'];

  const handleSearch = () => {
    console.log(`Searching for books with query: ${searchQuery}`);
  };

  const handleTagClick = (tag) => {
    console.log(`Searching for books with tag: ${tag}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>#Books</div>
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