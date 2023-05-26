import { useNavigate } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const CustomButton = styled(Button)({
  backgroundColor: "#42b883",
  "&:hover": {
    backgroundColor: "#347474",
  },
  borderColor: "#FF7e67",
  borderWidth: "4px",
  borderStyle: "solid",
});

function BackButton() {
  const navigate = useNavigate();
  return (
    <>
      <CustomButton
        variant="contained"
        size="large"
        onClick={() => navigate("/")}
      >
        Another City?
      </CustomButton>
    </>
  );
}

export default BackButton;
