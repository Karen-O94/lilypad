import { useState } from "react";
import "./Translation.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// imports use state, css stylesheet and mui components

function Translation({ props }) {
  const { language } = props;
  let fromLang = "en";
  let toLang = language;

  const [phrase, setPhrase] = useState("Enter your text to translate");
  const [translatedText, setTranslatedText] = useState(
    "Your translation will appear here"
  );

  // Gets translated phrase based on user input
  const translateRequest = async (phraseToTranslate) => {
    let queryText = encodeURIComponent(phraseToTranslate);
    let queryURL = `http://localhost:5000/translate?source=${fromLang}&target=${toLang}&q=${queryText}`;

    const response = await fetch(queryURL, {
      method: "POST",
    });
    let data = await response.json();
    let translatedContent = data.translatedText;

    return translatedContent;
  };

  return (
    <div className="translation-container">
      <h3>TRANSLATE YOUR OWN PHRASES</h3>
      <Box
        className="text-input"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="text_to_translate"
          type="text"
          onChange={(e) => setPhrase(e.currentTarget.value)}
          placeholder="Enter your text to translate"
          size={30}
          variant="outlined"
        />
      </Box>
      <Button
        style={{
          backgroundColor: "#5A815C",
        }}
        id="submit_button"
        onClick={() =>
          translateRequest(phrase).then((text) => setTranslatedText(text))
        }
        variant="contained"
      >
        Translate
      </Button>

      <p id="translated_text" type="text" size={30}>
        {translatedText}
      </p>
    </div>
  );
}

export default Translation;
