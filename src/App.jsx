// components
import { CustomNavbar } from "./components/Navbar"
import { Home } from './components/Home'
import { Blog } from './components/Blog'
import { Celebs } from './components/Celebs'
import { Movies } from './components/Movies'
import { Pages } from './components/Pages'
import { TvShow } from './components/TvShow'
import { Details } from "./components/Details"

// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <div>

        <CustomNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/celebs" element={<Celebs />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/tvShows" element={<TvShow />} />
          <Route path="/details/:media/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
