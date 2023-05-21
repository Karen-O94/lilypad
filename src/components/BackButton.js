import { useNavigate } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";

function BackButton() {
  const navigate = useNavigate();
  return (
    <>
      <Button variant="contained" size="large" onClick={() => navigate("/")}>
        Another City?
      </Button>
    </>
  );
}

export default BackButton;
