import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import useLocalStorage from 'use-local-storage'
import Header from '../Header/Header';
import SutraListing from '../SutraListing/SutraListing';

function App() {

  // Check if the user has a perferred Default theme.
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // If they do then use it and if not, set to light.
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  // Quick function to switch the theme.
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="All-the-Sutras-App" data-theme={theme}>
      <Header />
      <div id='toggle-switch'>
        <label>
          <input type='checkbox' onChange={switchTheme} checked={theme === 'light' ? false : true} />
          <span class='slider'></span>
        </label>
      </div>
      <div className="All-the-Sutras-Content container">
        <SutraListing />
      </div>
    </div>
  );
}

export default App;
