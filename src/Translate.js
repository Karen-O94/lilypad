
export default function Translate() {
    let fromLang = 'en';
    let toLang = 'fr';
    let text = 'hello world';
  
    let url = `http://localhost:5000/translate`;
    url += '?q=' + encodeURI(text);
    url += `&source=${fromLang}`;
    url += `&target=${toLang}`;
  
    console.log(url)
  
    fetch(url, { 
      method: 'POST',
    })
    .then(res => res.json())
    .then((response) => {
      console.log("response from api: ", response);
    })
    .catch(error => {
      console.log("There was an error with the translation request: ", error);
    });   
  }
  