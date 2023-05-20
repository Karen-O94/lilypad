// import logo from './logo.svg';
import './App.css';
import Translate from './components/Translate';
import TranslatePhrases from './components/TranslatePhrases';
// import TranslationDropdown from './components/TranslationDropdown';

function App() {
  return (
    <div className="App">

      {/* <TranslationDropdown /> */}
      <TranslatePhrases />
      <Translate />

    </div>
  );
}

export default App;
