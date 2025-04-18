import { useNavigate } from "react-router-dom";

export default function PreviousButton({ text = "Go back" }) {
  const navigate = useNavigate();
  return <button onClick={() => navigate(-1)}>{text}</button>;
}
