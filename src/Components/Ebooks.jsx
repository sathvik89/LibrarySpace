import { useState } from "react";

export default function Ebook() {
  const [searchQuery, setSearchQuery] = useState("");

  const digitalBooks = [
    {
      id: 1,
      name: "The Art of Computer Programming",
      description:
        "A comprehensive monograph written by Donald Knuth that covers many kinds of programming algorithms.",
      link: "https://example.com/the-art-of-computer-programming",
    },
    {
      id: 2,
      name: "Clean Code",
      description:
        "A handbook of agile software craftsmanship by Robert C. Martin.",
      link: "https://example.com/clean-code",
    },
    {
      id: 3,
      name: "Introduction to Algorithms",
      description:
        "A book by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein, widely used as a textbook for algorithms courses.",
      link: "https://example.com/introduction-to-algorithms",
    },
    {
      id: 4,
      name: "You Don't Know JS",
      description:
        "A series of books diving deep into the core mechanisms of the JavaScript language.",
      link: "https://example.com/you-dont-know-js",
    },
  ];

  // Filter books based on the search
  const filteredBooks = digitalBooks.filter((book) =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>E-books Available</h1>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a book..."
      />

      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <div key={book.id} style={styles.bookCard}>
            <h2 style={styles.bookTitle}>{book.name}</h2>
            <p style={styles.bookDescription}>{book.description}</p>
            <a href={book.link} style={styles.bookLink}>
              Download PDF
            </a>
          </div>
        ))
      ) : (
        <p style={styles.noResultsMessage}>
          Sorry, no book with title "{searchQuery}" is available.
        </p>
      )}
    </div>
  );
}

// Styles for the UI
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "30px",
  },
  bookCard: {
    backgroundColor: "#fff",
    margin: "15px auto",
    padding: "20px",
    maxWidth: "600px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  bookTitle: {
    fontSize: "1.5em",
    color: "#555",
    marginBottom: "10px",
  },
  bookDescription: {
    fontSize: "1em",
    color: "#777",
    marginBottom: "15px",
  },
  bookLink: {
    display: "inline-block",
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "1em",
  },
  noResultsMessage: {
    textAlign: "center",
    color: "#d9534f",
    fontSize: "1.2em",
    marginTop: "20px",
  },
};
