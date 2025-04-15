// import React, { useState } from "react";

export default function Home() {
  return <div>This is Home page </div>;
  //   const [searchTerm, setSearchTerm] = useState("");

  //   const latestBooks = [
  //     { id: 1, title: "Book Title 1", author: "Author 1" },
  //     { id: 2, title: "Book Title 2", author: "Author 2" },
  //     { id: 3, title: "Book Title 3", author: "Author 3" },
  //   ];

  //   const handleSeatingCount = () => {
  //     alert("Total seating capacity: 50");
  //   };

  //   const handleTemperatureTimings = () => {
  //     alert("Temperature Timings: 9 AM - 5 PM");
  //   };

  //   return (
  //     <div>
  //       {/* Search Bar */}
  //       <div>
  //         <h2>Search for Books</h2>
  //         <input
  //           type="text"
  //           placeholder="Enter book name..."
  //           value={searchTerm}
  //           onChange={(e) => setSearchTerm(e.target.value)}
  //         />
  //         <p>Searching for: {searchTerm || "Nothing yet"}</p>
  //       </div>

  //       {/* Latest Books Section */}
  //       <div>
  //         <h2>Latest Books</h2>
  //         <ul>
  //           {latestBooks.map((book) => (
  //             <li key={book.id}>
  //               <strong>{book.title}</strong> by {book.author}
  //             </li>
  //           ))}
  //         </ul>
  //       </div>

  //       {/* Buttons */}
  //       <div>
  //         <button onClick={handleSeatingCount}>See Seating Count</button>
  //         <button onClick={handleTemperatureTimings}>
  //           See Temperature Timings
  //         </button>
  //       </div>
  //     </div>
}
