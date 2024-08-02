import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BookList = () => {
  const router = useRouter();
  const { tag } = router.query;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (tag) {
      fetchBooksByTag(tag);
    }
  }, [tag]);

  const fetchBooksByTag = async (tag) => {
    try {
      const res = await fetch(`/api/books?tag=${encodeURIComponent(tag)}`);
      const data = await res.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div>
      <h1>Books related to `{tag}`</h1>
      <div>
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;