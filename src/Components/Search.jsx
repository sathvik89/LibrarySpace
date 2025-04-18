export default function Search({ value, onChange }) {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Search for a latest book..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "1em",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}
