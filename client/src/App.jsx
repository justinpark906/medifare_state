import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Search from './pages/Search';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
