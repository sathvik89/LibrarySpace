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
      title: "Atomic Habits",
      description:
        "A book by James Clear that explores how small, incremental changes can lead to remarkable results and help build good habits while breaking bad ones.",
      genre: "Self-Improvement",
      location: "Section K, Shelf 2, Row 3",
    },
    {
      id: 2,
      image1: AllbooksImage2,
      title: "The Alchemist",
      description:
        "A novel by Paulo Coelho that follows a shepherd named Santiago on his journey to find treasure, discovering the true meaning of life and personal legend along the way.",
      genre: "Philosophical Fiction",
      location: "Section L, Shelf 4, Row 7",
    },
    {
      id: 3,
      image1: AllbooksImage3,
      title: "Indian Burial Ground",
      description:
        "A chilling novel by Stephen King that delves into the dark and supernatural consequences of disturbing an ancient Native American burial site, exploring themes of grief, loss, and the unknown.",
      genre: "Horror",
      location: "Section M, Shelf 6, Row 2",
    },
    {
      id: 4,
      image1: AllbooksImage4,
      title: "Made to Stick",
      description:
        "A book by Chip Heath and Dan Heath that explores why some ideas survive and others die, offering insights into crafting messages that are memorable, impactful, and effective.",
      genre: "Business & Communication",
      location: "Section N, Shelf 3, Row 8",
    },
    {
      id: 5,
      image1: AllbooksImage5,
      title: "The Intelligent Investor",
      description:
        "A classic investment guide by Benjamin Graham that teaches the principles of value investing, emphasizing long-term strategies, risk management, and disciplined decision-making.",
      genre: "Finance & Investment",
      location: "Section O, Shelf 5, Row 4",
    },
    {
      id: 6,
      image1: AllbooksImage6,
      title: "Growing a Business",
      description:
        "A book by Paul Hawken that provides practical advice and insights on how to nurture and expand a business, focusing on creativity, sustainability, and adaptability.",
      genre: "Business & Entrepreneurship",
      location: "Section P, Shelf 1, Row 6",
    },
    {
      id: 7,
      image1: AllbooksImage7,
      title: "Good to Great",
      description:
        "A book by Jim Collins that explores why some companies make the leap from good to great while others do not, identifying key factors like leadership, culture, and disciplined action.",
      genre: "Business & Management",
      location: "Section Q, Shelf 2, Row 9",
    },
    {
      id: 8,
      image1: AllbooksImage8,
      title: "Steve Jobs",
      description:
        "A biography by Walter Isaacson that chronicles the life of Apple co-founder Steve Jobs, exploring his innovative vision, leadership style, and the impact he had on technology and design.",
      genre: "Biography & Technology",
      location: "Section R, Shelf 3, Row 4",
    },
    {
      id: 9,
      image1: AllbooksImage9,
      title: "Sapiens",
      description:
        "A book by Yuval Noah Harari that explores the history of humankind, from the emergence of Homo sapiens to the modern era, examining how biology, culture, and technology have shaped human societies.",
      genre: "History & Anthropology",
      location: "Section S, Shelf 4, Row 2",
    },
    {
      id: 10,
      image1: AllbooksImage10,
      title: "The Handmaid's Tale",
      description:
        "A dystopian novel by Margaret Atwood that depicts a totalitarian society where women are stripped of their rights and assigned roles, exploring themes of oppression, power, and resistance.",
      genre: "Dystopian Fiction",
      location: "Section T, Shelf 5, Row 7",
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
