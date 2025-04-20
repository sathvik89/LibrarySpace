import styles from "../Styles/All.module.css";
export default function Allbooks() {
  // dummybooks
  const sampleBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      description:
        "A novel by F. Scott Fitzgerald that explores themes of wealth, love, and the American Dream.",
      genre: "Classic",
      location: "New York City",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      description:
        "A novel by Harper Lee that deals with racial injustice in the Deep South.",
      genre: "Fiction",
      location: "Maycomb, Alabama",
    },
    {
      id: 3,
      title: "1984",
      description:
        "A dystopian novel by George Orwell about totalitarianism and surveillance.",
      genre: "Science Fiction",
      location: "London",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      description:
        "A romantic novel by Jane Austen that follows Elizabeth Bennet's journey to love.",
      genre: "Romance",
      location: "Hertfordshire, England",
    },
    {
      id: 5,
      title: "The Hobbit",
      description:
        "A fantasy novel by J.R.R. Tolkien about Bilbo Baggins' adventures.",
      genre: "Fantasy",
      location: "Middle-earth",
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      description:
        "A novel by J.D. Salinger that follows Holden Caulfield's experiences.",
      genre: "Coming-of-Age",
      location: "New York City",
    },
    {
      id: 7,
      title: "Moby Dick",
      description:
        "A novel by Herman Melville about Captain Ahab's quest for a white whale.",
      genre: "Adventure",
      location: "Nantucket",
    },
    {
      id: 8,
      title: "Brave New World",
      description:
        "A dystopian novel by Aldous Huxley about a futuristic society.",
      genre: "Science Fiction",
      location: "London",
    },
    {
      id: 9,
      title: "The Alchemist",
      description:
        "A novel by Paulo Coelho about a shepherd's journey to find treasure.",
      genre: "Philosophical Fiction",
      location: "Andalusia, Spain",
    },
    {
      id: 10,
      title: "War and Peace",
      description:
        "An epic novel by Leo Tolstoy about Russian society during the Napoleonic Wars.",
      genre: "Historical Fiction",
      location: "Russia",
    },
  ];

  return (
    <div className={styles.containerAllbook}>
      <h1 className={styles.headingAll}>All Books</h1>

      {sampleBooks.map((book) => (
        <div key={book.id} className={styles.bookCard}>
          <h2 className={styles.bookTitle}>{book.title}</h2>
          <p className={styles.bookDescription}>{book.description}</p>
          <p className={styles.bookDetails}>
            <strong>Genre:</strong> {book.genre} | <strong>Location:</strong>{" "}
            {book.location}
          </p>
        </div>
      ))}
    </div>
  );
}
