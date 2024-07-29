// components/Tags.js
const tags = ['Fiction', 'Non-Fiction', 'Science', 'Fantasy', 'Biography', 'History', 'Children', 'Mystery', 'Romance', 'Thriller', 'Young Adult', 'Philosophy', 'Self-Help'];

export default function Tags() {
  return (
    <div>
      {tags.map(tag => (
        <button key={tag}>{tag}</button>
      ))}
    </div>
  );
}