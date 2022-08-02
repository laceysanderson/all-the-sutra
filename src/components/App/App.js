import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from '../Header/Header';
import SutraListing from '../SutraListing/SutraListing';

function App() {

  return (
    <div className="All-the-Sutras-App">
      <Header />
      <div className="All-the-Sutras-Content container">
        <SutraListing />
      </div>
    </div>
  );
}

export default App;
