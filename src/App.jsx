import './App.css';

import backgroundImage1 from "./Assets/img1.jpg";
import Footer from './Components/Footer';

import Header from './Components/Header';
import MovieSearch from './Components/MovieSearch';

function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${backgroundImage1})`,
      width: "100%",
      backgroundSize: "cover"
    }}>
      <Header />
      <MovieSearch />
      <Footer />
    </div>
  );
}

export default App;
