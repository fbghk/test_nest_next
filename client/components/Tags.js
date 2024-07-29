import axios from 'axios';

const tags = ['Fiction', 'Non-Fiction', 'Science', 'Fantasy', 'Biography', 'History', 'Children', 'Mystery', 'Romance', 'Thriller', 'Young Adult', 'Philosophy', 'Self-Help'];

export default function Tags() {
  const handleTagClick = async (tag) => {
    const response = await axios.get(`/api/books/tags?tag=${tag}`);
    console.log(response.data);
  };

  return (
    <div>
      {tags.map(tag => (
        <button key={tag} onClick={() => handleTagClick(tag)}>{tag}</button>
      ))}
    </div>
  );
}