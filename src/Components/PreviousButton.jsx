import { useNavigate } from "react-router-dom";
import styles from "../Styles/PreviousB.module.css";
export default function PreviousButton({ text = "Go back" }) {
  const navigate = useNavigate();
  return (
    <button className={styles.prevbutton} onClick={() => navigate(-1)}>
      {text}
    </button>
  );
}
