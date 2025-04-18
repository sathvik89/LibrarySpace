import React from "react";

export default function LibraryTimings() {
  const weekdayTimings = "9 AM to 11 PM";
  const sundayTimings = "9 AM to 5 PM";

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Library Timings</h2>
      <p>The library is open every day of the week. Here are the timings:</p>
      <ul style={{ marginLeft: "20px" }}>
        <li>
          <strong>Monday to Saturday:</strong> {weekdayTimings}
        </li>
        <li>
          <strong>Sunday:</strong> {sundayTimings}
        </li>
      </ul>
      <p>
        Please plan your visit accordingly. We look forward to seeing you at the
        library!
      </p>
    </div>
  );
}
