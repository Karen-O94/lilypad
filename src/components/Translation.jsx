import { useState } from "react";

function Translation(props) {
    const {language} = props;
    let fromLang = 'en';
    let toLang = language

    const [phrase, setPhrase] = useState("Enter your text to translate")
    const [translatedText, setTranslatedText] = useState("Your translation will appear here")

    
    // Gets translated phrase based on user input
    const translateRequest = async (phraseToTranslate) => {
        let queryText = encodeURIComponent(phraseToTranslate);
        let queryURL = `http://localhost:5000/translate?source=${fromLang}&target=${toLang}&q=${queryText}`;

        // console.log(queryURL)

        const response = await fetch(queryURL, {
            method: 'POST'
        });
        let data = await response.json();
        let translatedContent = data.translatedText;

        console.log(translatedContent);
        return translatedContent;
        
    }

    return (
        <div>
            <h1>Translate your own phrases here!</h1>
            <p><input id="text_to_translate" type="text" onChange={ (e) => setPhrase(e.currentTarget.value) } placeholder="Enter your text to translate" size={30} autoFocus></input></p>
            <button id="submit_button" onClick={ () => translateRequest(phrase).then((text) => setTranslatedText(text)) }>Translate!</button>
            <br></br>
            <p id="translated_text" type="text"  size={30}> {translatedText} </p>
        </div>
    );



}

export default Translation;