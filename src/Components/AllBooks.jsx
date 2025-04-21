// import styles from "../Styles/All.module.css";
// import AllbooksImage1 from "../BookImages/BookAll1.png";
// import AllbooksImage2 from "../BookImages/BookAll2.png";
// import AllbooksImage3 from "../BookImages/BookAll3.png";
// import AllbooksImage4 from "../BookImages/BookAll4.png";
// import AllbooksImage5 from "../BookImages/BookAll5.png";
// import AllbooksImage6 from "../BookImages/BookAll6.png";
// import AllbooksImage7 from "../BookImages/BookAll7.png";
// import AllbooksImage8 from "../BookImages/BookAll8.png";
// import AllbooksImage9 from "../BookImages/BookAll9.png";
// import AllbooksImage10 from "../BookImages/BookAll10.png";

// export default function Allbooks() {
//   // dummybooks
//   const sampleBooks = [
//     {
//       id: 1,
//       image1: AllbooksImage1,
//       title: "The Great Gatsby",
//       description:
//         "A novel by F. Scott Fitzgerald that explores themes of wealth, love, and the American Dream.",
//       genre: "Classic",
//       location: "New York City",
//     },
//     {
//       id: 2,
//       image1: AllbooksImage2,
//       title: "To Kill a Mockingbird",
//       description:
//         "A novel by Harper Lee that deals with racial injustice in the Deep South.",
//       genre: "Fiction",
//       location: "Maycomb, Alabama",
//     },
//     {
//       id: 3,
//       image1: AllbooksImage3,
//       title: "1984",
//       description:
//         "A dystopian novel by George Orwell about totalitarianism and surveillance.",
//       genre: "Science Fiction",
//       location: "London",
//     },
//     {
//       id: 4,
//       image1: AllbooksImage4,
//       title: "Pride and Prejudice",
//       description:
//         "A romantic novel by Jane Austen that follows Elizabeth Bennet's journey to love.",
//       genre: "Romance",
//       location: "Hertfordshire, England",
//     },
//     {
//       id: 5,
//       image1: AllbooksImage5,
//       title: "The Hobbit",
//       description:
//         "A fantasy novel by J.R.R. Tolkien about Bilbo Baggins' adventures.",
//       genre: "Fantasy",
//       location: "Middle-earth",
//     },
//     {
//       id: 6,
//       image1: AllbooksImage6,
//       title: "The Catcher in the Rye",
//       description:
//         "A novel by J.D. Salinger that follows Holden Caulfield's experiences.",
//       genre: "Coming-of-Age",
//       location: "New York City",
//     },
//     {
//       id: 7,
//       image1: AllbooksImage7,
//       title: "Moby Dick",
//       description:
//         "A novel by Herman Melville about Captain Ahab's quest for a white whale.",
//       genre: "Adventure",
//       location: "Nantucket",
//     },
//     {
//       id: 8,
//       image1: AllbooksImage8,
//       title: "Brave New World",
//       description:
//         "A dystopian novel by Aldous Huxley about a futuristic society.",
//       genre: "Science Fiction",
//       location: "London",
//     },
//     {
//       id: 9,
//       image1: AllbooksImage9,
//       title: "The Alchemist",
//       description:
//         "A novel by Paulo Coelho about a shepherd's journey to find treasure.",
//       genre: "Philosophical Fiction",
//       location: "Andalusia, Spain",
//     },
//     {
//       id: 10,
//       image1: AllbooksImage10,
//       title: "War and Peace",
//       description:
//         "An epic novel by Leo Tolstoy about Russian society during the Napoleonic Wars.",
//       genre: "Historical Fiction",
//       location: "Russia",
//     },
//   ];

//   return (
//     <div className={styles.containerAllbook}>
//       <h1 className={styles.headingAll}>All Books</h1>

//       {sampleBooks.map((book) => (
//         <div key={book.id} className={styles.bookCard}>
//           <div className={styles.bookimages}>
//             <img src={book.image1} alt="" />
//           </div>
//           <div className={styles}>
//             <h2 className={styles.bookTitle}>{book.title}</h2>
//             <p className={styles.bookDescription}>{book.description}</p>
//             <p className={styles.bookDetails}>
//               <strong>Genre:</strong> {book.genre} | <strong>Location:</strong>{" "}
//               {book.location}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import styles from "../Styles/All.module.css";
import AllbooksImage1 from "../BookImages/BookAll1.png";
import AllbooksImage2 from "../BookImages/BookAll2.png";
import AllbooksImage3 from "../BookImages/BookAll3.png";
import AllbooksImage4 from "../BookImages/BookAll4.png";
import AllbooksImage5 from "../BookImages/BookAll5.png";
import AllbooksImage6 from "../BookImages/BookAll6.png";
import AllbooksImage7 from "../BookImages/BookAll7.png";
import AllbooksImage8 from "../BookImages/BookAll8.png";
import AllbooksImage9 from "../BookImages/BookAll9.png";
import AllbooksImage10 from "../BookImages/BookAll10.png";

export default function Allbooks() {
  // Dummy books data
  const sampleBooks = [
    {
      id: 1,
      image1: AllbooksImage1,
      title: "The Great Gatsby",
      description:
        "A novel by F. Scott Fitzgerald that explores themes of wealth, love, and the American Dream.",
      genre: "Classic",
      location: "Section A, Shelf 3, Row 5",
    },
    {
      id: 2,
      image1: AllbooksImage2,
      title: "To Kill a Mockingbird",
      description:
        "A novel by Harper Lee that deals with racial injustice in the Deep South.",
      genre: "Fiction",
      location: "Section B, Shelf 2, Row 7",
    },
    {
      id: 3,
      image1: AllbooksImage3,
      title: "1984",
      description:
        "A dystopian novel by George Orwell about totalitarianism and surveillance.",
      genre: "Science Fiction",
      location: "Section C, Shelf 4, Row 2",
    },
    {
      id: 4,
      image1: AllbooksImage4,
      title: "Pride and Prejudice",
      description:
        "A romantic novel by Jane Austen that follows Elizabeth Bennet's journey to love.",
      genre: "Romance",
      location: "Section D, Shelf 1, Row 9",
    },
    {
      id: 5,
      image1: AllbooksImage5,
      title: "The Hobbit",
      description:
        "A fantasy novel by J.R.R. Tolkien about Bilbo Baggins' adventures.",
      genre: "Fantasy",
      location: "Section E, Shelf 5, Row 4",
    },
    {
      id: 6,
      image1: AllbooksImage6,
      title: "The Catcher in the Rye",
      description:
        "A novel by J.D. Salinger that follows Holden Caulfield's experiences.",
      genre: "Coming-of-Age",
      location: "Section F, Shelf 3, Row 1",
    },
    {
      id: 7,
      image1: AllbooksImage7,
      title: "Moby Dick",
      description:
        "A novel by Herman Melville about Captain Ahab's quest for a white whale.",
      genre: "Adventure",
      location: "Section G, Shelf 2, Row 6",
    },
    {
      id: 8,
      image1: AllbooksImage8,
      title: "Brave New World",
      description:
        "A dystopian novel by Aldous Huxley about a futuristic society.",
      genre: "Science Fiction",
      location: "Section H, Shelf 4, Row 3",
    },
    {
      id: 9,
      image1: AllbooksImage9,
      title: "The Alchemist",
      description:
        "A novel by Paulo Coelho about a shepherd's journey to find treasure.",
      genre: "Philosophical Fiction",
      location: "Section I, Shelf 1, Row 8",
    },
    {
      id: 10,
      image1: AllbooksImage10,
      title: "War and Peace",
      description:
        "An epic novel by Leo Tolstoy about Russian society during the Napoleonic Wars.",
      genre: "Historical Fiction",
      location: "Section J, Shelf 5, Row 5",
    },
  ];

  return (
    <div className={styles.containerAllbook}>
      <h1 className={styles.headingAll}>All Books</h1>

      {sampleBooks.map((book) => (
        <div key={book.id} className={styles.bookCard}>
          <div className={styles.bookimages}>
            <img src={book.image1} alt="" />
          </div>
          <div className={styles.bookdesci}>
            <h2 className={styles.bookTitle}>{book.title}</h2>
            <p className={styles.bookDescription}>{book.description}</p>
            <p className={styles.bookDetails}>
              <strong>Genre:</strong> {book.genre} | <strong>Location:</strong>{" "}
              {book.location}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
