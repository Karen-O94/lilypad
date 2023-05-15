function Translate() {
    let fromLang = 'en';
    let toLang = 'de';
    translateRequest();


    // Gets translated phrases based on user input
    async function translateRequest(){
        let transText = document.getElementById('text_to_translate').value;
        let queryText = encodeURIComponent(transText);
        let queryURL = `http://localhost:5000/translate?source=${fromLang}&target=${toLang}&q=${queryText}`;

        console.log(queryURL)

        const response = await fetch(queryURL, {
            method: 'POST'
        });
        let data = await response.json();
        let translatedContent = data.translatedText;

        console.log(translatedContent);
        document.getElementById('translated_text').value = translatedContent;
        return false;
        
    }

    return (
        <div>
            <p><input id="text_to_translate" type="text" placeholder="Enter your text to translate" size={30} autoFocus></input></p>
            <button id="submit_button" onClick={translateRequest}>Translate!</button>
            <p><input id="translated_text" type="text" placeholder="Your translation will appear here" size={30}></input></p>
        </div>
    );



}

export default Translate;