import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Search from './pages/Search';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Footer from './components/Footer';
import Hospitals from './pages/Hospitals';
import HospitalDetail from './pages/HospitalDetail';

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
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/hospital/:hospitalName" element={<HospitalDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
