import styles from "../Styles/Search.module.css";
export default function Search({ value, onChange }) {
  return (
    <div className={styles.mainSearch}>
      <input
        type="text"
        placeholder="🔎  Search for a latest book..."
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
