// 2d99d37be73b8fbdce7716bae7fbfe55      api key

import './App.css';
import Firstpart from './Firstpart';
import Navbar from './Navbar';
import requests from './requests';

function App() {
  return (
  <div>
    <Navbar />
    <Firstpart title="Trending Now" fetchUrl={requests.fetchTrending} bigone={true}/>
    <Firstpart title="Netflix Movies" fetchUrl={requests.fetchNetflixOriginals}/>
    <Firstpart title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
  </div>
  );
}

export default App;
