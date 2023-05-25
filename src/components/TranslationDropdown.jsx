// import { useEffect, useState } from "react";


// function TranslationDropdown() {

//     const [languagesList, setLanguagesList] = useState([])
//     const [selectedLanguageKey, setLanguageKey] = useState('')
//     const languageKey = (selectedLanguage) => {
//         setLanguageKey(selectedLanguage.target.value)
// }
    
//     useEffect(() => {

//         async function GetLanguageList() {
//             const response = await fetch('http://0.0.0.0:5000/languages', {
//             method: 'GET'
//           });
//         let language = await response.json();
//         setLanguagesList(language)
//         }
//         GetLanguageList()

        

//     }, [])

//     return (
//         <div>
//             <div>
//                 <div>
//                 <select className="language-select" onChange={languageKey}>
//                             <option>Please Select Language..</option>
//                             {languagesList.map((language) => {
//                                 return (
//                                     <option value={language.code}>
//                                         {language.name}
//                                     </option>
//                                 )
//                             })}
//                         </select>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default TranslationDropdown