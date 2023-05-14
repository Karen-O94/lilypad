import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/")}>Another City?</button>
    </>
  );
}

export default BackButton;
