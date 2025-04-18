export default function Book({ title, description, location, imageURL }) {
  return (
    <div
    // style={{
    //   width: "200px", // Fixed width for consistency
    //   height: "250px", // Slightly taller to better represent a book shape
    //   margin: "40px auto", // Reduced margin and centered horizontally
    //   padding: "20px", // Increased padding for better content spacing
    //   backgroundColor: "#fffdf6", // Off-white background for a paper-like feel
    //   border: "2px solid #333", // Darker border for contrast
    //   borderRadius: "8px", // Rounded corners for a softer look
    //   boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Enhanced shadow for depth
    //   overflow: "scroll", // Prevents content from spilling out
    //   display: "flex", // Flexbox for internal alignment
    //   flexDirection: "column", // Stacks content vertically
    //   justifyContent: "space-between", // Distributes space between content
    //   alignItems: "center", // Centers content horizontally
    //   fontFamily: "'Arial', sans-serif", // Clean, readable font
    //   color: "#333", // Dark text for readability
    //   fontSize: "16px", // Legible font size
    //   lineHeight: "1.5", // Proper line height for readability
    // }}
    >
      <h2>{title}</h2>
      <img
        style={{
          width: "100px",
          height: "100px",
        }}
        src={imageURL}
        alt={title}
      />
      <p>{description}</p>
      <h4>{location}</h4>
    </div>
  );
}
