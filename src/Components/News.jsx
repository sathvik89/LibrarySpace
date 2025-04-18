import React from "react";

export default function News() {
  const todaysNews =
    "Breaking: New advancements in renewable energy technology!";
  const newsWebsiteLink = "https://www.hindustantimes.com";

  return (
    <div>
      <h2>Today's News</h2>
      <p>{todaysNews}</p>
      <p>
        Read more:{" "}
        <a href={newsWebsiteLink} target="_blank" rel="noopener noreferrer">
          Hindustan Times
        </a>
      </p>
    </div>
  );
}
