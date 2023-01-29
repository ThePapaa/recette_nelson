import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './home/home';
import Tests from './tests/tests';
import Recipes from './recipes/recipes';
import Navbar from './components/navbar';

function App() {
  return (
    <section className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/tests" element={<Tests />} />
      </Routes>

    </section>
  );
}

export default App;
