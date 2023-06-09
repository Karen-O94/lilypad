import { useEffect, useState } from "react";
import phraseFixture from "../json/phrases.json";
import "./TranslatePhrases.css";
// importing hooks, table from phrases.json and css stylsheet

function TranslatePhrases({ props }) {
  const { language, languageName } = props;
  let fromLang = "en";
  let toLang = language;
  const phraseList = phraseFixture.phrases;
  const [translatedText, setTranslatedText] = useState(
    "Your translation will appear here"
  );

  //Translates list of phrases when the component loads
  useEffect(() => {
    if (language) {
      async function TranslatePhraseRequest() {
        let queryText = encodeURIComponent(phraseList.join("\n"));
        let queryURL = `http://localhost:5000/translate?source=${fromLang}&target=${toLang}&q=${queryText}`;

        const response = await fetch(queryURL, {
          method: "POST",
        });
        let data = await response.json();
        setTranslatedText(data.translatedText);
      }
      TranslatePhraseRequest();
    }
  });

  const arr1 = phraseList;
  const arr2 = translatedText.split("\n");

  const newArr = [];

  arr1.forEach((arr1val, i) => {
    newArr.push([arr1val, arr2[i]]);
  });
  // formatting phrases

  return (
    <div className="phrase-div">
      <h3>KEY PHRASES FOR YOUR VISIT</h3>
      <table className="phrase-table">
        <thead>
          <tr>
            <th>English</th>
            <th>{languageName}</th>
          </tr>
        </thead>
        <tbody>
          {translatedText &&
            newArr.map((val, i) => {
              return (
                <tr key={`${val[0]}-${i}-${val[1]}-${i}`}>
                  <td key={`original-${val[0]}-${i}`}>{val[0]}</td>
                  <td key={`translated-${val[1]}-${i}`}>{val[1]}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default TranslatePhrases;
