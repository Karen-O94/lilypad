// import logo from './logo.svg';
import './App.css';
import DataProvider from './components/DataProvider';
import Translate from './components/Translate';
import TranslatePhrases from './components/TranslatePhrases';
// import TranslationDropdown from './components/TranslationDropdown';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <TranslatePhrases />
        <Translate />
        {/* <TranslationDropdown /> */}
      </DataProvider>
      
    </div>
  );
}

export default App;
