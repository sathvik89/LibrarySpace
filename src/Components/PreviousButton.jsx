import { useNavigate } from "react-router-dom";

export default function PreviousButton() {
  const navigate = useNavigate();
  return <button onClick={() => navigate(-1)}>Previous page</button>;
}
