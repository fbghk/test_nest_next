import SearchBar from '../components/SearchBar';
import Tags from '../components/Tags';

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Bookstore</h1>
      <SearchBar />
      <Tags />
    </div>
  );
}