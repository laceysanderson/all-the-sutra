import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header/Header';
import CompactSutra from './CompactSutra/CompactSutra';

function App() {
  return (
    <div className="All-the-Sutras-App">
      <Header />
      <div className="All-the-Sutras-Content container">
        <div className="list-group list-group-flush">
          <CompactSutra />
        </div>
      </div>
    </div>
  );
}

export default App;
