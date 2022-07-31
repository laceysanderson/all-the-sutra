import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CompactSutra from './CompactSutra/CompactSutra';

function App() {
  return (
    <div className="All-the-Sutras-App">
      <div className="All-the-Sutras-Content container">
        <div className="list-group list-group-flush">
          <CompactSutra />
        </div>
      </div>
    </div>
  );
}

export default App;
