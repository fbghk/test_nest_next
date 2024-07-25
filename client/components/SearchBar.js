import { useState } from 'react';
import axios from 'axios';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const response = await axios.get(`/api/books?query=${query}`);
    console.log(response.data);
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for books..." 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}