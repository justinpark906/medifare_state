import React, { useState, useEffect } from 'react';
import '../styles/Search.css';
import HelpModal from './HelpModal';
import Fuse from 'fuse.js';
import USAMap from 'react-usa-map';
import { FaRegStar, FaStar } from 'react-icons/fa';


const API_URL = 'https://medifare-state.onrender.com';

function Search() {
  const [hospitalInput, setHospitalInput] = useState('');
  const [serviceInput, setServiceInput] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [searchKey, setSearchKey] = useState(0);
  const [showMap, setShowMap] = useState(true);
  const [matchedHospital, setMatchedHospital] = useState('');
  const [results, setResults] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showHelp, setShowHelp] = useState(false);
  const [favorites, setFavorites] = useState({});

  const RESULTS_PER_PAGE = 10;

  

  // Hide map on mobile by default
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowMap(false);
    }
  }, []);

  // Load favorites from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('starredServices');
    if (stored) setFavorites(JSON.parse(stored));
  }, []);


  useEffect(() => {
    if (!selectedState) return;
    fetch(`${API_URL}/api/hospitals/${selectedState}`)
      .then(res => res.json())
      .then(data => setResults(data.Hospitals || []))
      .catch(err => {
        console.error(err);
        setResults([]);
      });
  }, [selectedState]);

  const handleSearch = () => {
    if (!selectedState || selectedState === 'default') {
      setError('You must select a state');
      setFiltered([]);
      setMatchedHospital('');
      return;
    }

    if (!hospitalInput && !serviceInput) {
      setFiltered(results);
      setMatchedHospital('');
      setCurrentPage(1);
      setError('');
      return;
    }

    if (!hospitalInput && serviceInput) {
      const filteredResults = results.filter(entry =>
        entry.Service.toLowerCase().includes(serviceInput.toLowerCase())
      );
      setFiltered(filteredResults);
      setMatchedHospital('');
      setError(filteredResults.length === 0 ? 'No matching services found.' : '');
      setCurrentPage(1);
      return;
    }

    const fuse = new Fuse(results, {
      keys: ['Hospital_Name'],
      threshold: 0.3,
      distance: 50,
      minMatchCharLength: 2,
    });

    const searchResults = fuse.search(hospitalInput);

    if (searchResults.length === 0) {
      setFiltered([]);
      setMatchedHospital('');
      setError('No matching hospital found.');
    } else {
      const closestMatch = searchResults[0].item;
      setMatchedHospital(closestMatch.Hospital_Name);

      const filteredResults = results.filter(
        entry => entry.Hospital_Name === closestMatch.Hospital_Name &&
          (!serviceInput || entry.Service.toLowerCase().includes(serviceInput.toLowerCase()))
      );

      setFiltered(filteredResults);
      setError(filteredResults.length === 0 ? 'No matching services found for that hospital.' : '');
    }

    setCurrentPage(1);
    setSearchKey(prev => prev + 1);
    setShowMap(false);
  };

  const toggleFavorite = (item) => {
    const key = `${item.Hospital_Name}-${item.Service}`;
    const stored = JSON.parse(localStorage.getItem('starredServices') || '{}');
  
    if (stored[key]) {
      delete stored[key];
    } else {
      stored[key] = item;
    }
  
    setFavorites(stored);
    localStorage.setItem('starredServices', JSON.stringify(stored));
  };
  
  
  

  const mapHandler = (event) => {
    const stateCode = event.target.dataset.name;
    setSelectedState(stateCode);
  };

  const statesCustomConfig = () => ({
    [selectedState]: {
      fill: "#8e2de2",
    },
  });

  const paginatedResults = filtered.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );

  const totalPages = Math.ceil(filtered.length / RESULTS_PER_PAGE);

  return (
    <main className="search-page">
      <div className="search-box">
        <h1 className="hero-heading">Discover the cost of your care.</h1>
        <p className="search-subtext">Please select a state then search any hospital or service.</p>

        <div className="search-bar">
          <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
            <option value="">Select State</option>
            {[
              { code: "AK", name: "Alaska" }, { code: "AL", name: "Alabama" }, { code: "AR", name: "Arkansas" },
              { code: "AZ", name: "Arizona" }, { code: "CA", name: "California" }, { code: "CO", name: "Colorado" },
              { code: "CT", name: "Connecticut" }, { code: "DE", name: "Delaware" }, { code: "FL", name: "Florida" },
              { code: "GA", name: "Georgia" }, { code: "HI", name: "Hawaii" }, { code: "IA", name: "Iowa" },
              { code: "ID", name: "Idaho" }, { code: "IL", name: "Illinois" }, { code: "IN", name: "Indiana" },
              { code: "KS", name: "Kansas" }, { code: "KY", name: "Kentucky" }, { code: "LA", name: "Louisiana" },
              { code: "MA", name: "Massachusetts" }, { code: "MD", name: "Maryland" }, { code: "ME", name: "Maine" },
              { code: "MI", name: "Michigan" }, { code: "MN", name: "Minnesota" }, { code: "MO", name: "Missouri" },
              { code: "MS", name: "Mississippi" }, { code: "MT", name: "Montana" }, { code: "NC", name: "North Carolina" },
              { code: "ND", name: "North Dakota" }, { code: "NE", name: "Nebraska" }, { code: "NH", name: "New Hampshire" },
              { code: "NJ", name: "New Jersey" }, { code: "NM", name: "New Mexico" }, { code: "NV", name: "Nevada" },
              { code: "NY", name: "New York" }, { code: "OH", name: "Ohio" }, { code: "OK", name: "Oklahoma" },
              { code: "OR", name: "Oregon" }, { code: "PA", name: "Pennsylvania" }, { code: "RI", name: "Rhode Island" },
              { code: "SC", name: "South Carolina" }, { code: "SD", name: "South Dakota" }, { code: "TN", name: "Tennessee" },
              { code: "TX", name: "Texas" }, { code: "UT", name: "Utah" }, { code: "VA", name: "Virginia" },
              { code: "VT", name: "Vermont" }, { code: "WA", name: "Washington" }, { code: "WI", name: "Wisconsin" },
              { code: "WV", name: "West Virginia" }, { code: "WY", name: "Wyoming" }
            ].map(state => (
              <option key={state.code} value={state.code}>{state.name}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Service"
            value={serviceInput}
            onChange={(e) => setServiceInput(e.target.value)}
          />

          <input
            type="text"
            placeholder="Hospital (Optional)"
            value={hospitalInput}
            onChange={(e) => setHospitalInput(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <button onClick={() => setShowMap(!showMap)} className="map-toggle">
          {showMap ? 'Hide Map ▲' : 'Show Map ▼'}
        </button>

        {showMap && (
          <div className="usa-map-container">
            <USAMap onClick={mapHandler} customize={statesCustomConfig()} />
          </div>
        )}
      </div>

      {matchedHospital && (
        <h2 className="search-heading">
          Matched hospital: <strong>{matchedHospital}</strong>
        </h2>
      )}

      {error && <p className="error">{error}</p>}

      <ul key={searchKey} style={{ listStyle: 'none', padding: 0 }}>
        {paginatedResults.map((item, index) => {
          const key = `${item.Hospital_Name}-${item.Service}`;
          const isFavorited = favorites[key];

          return (
            <li key={index} className="result-card" style={{ position: 'relative' }}>
                <details>
                <summary><strong>Service:</strong> {item.Service}</summary>

                <div className="details-content">
                    <p><strong>Hospital:</strong> {item.Hospital_Name}</p>
                    <p><strong>Address:</strong> {item.Address}</p>
                    <p><strong>Submitted Covered Payment:</strong> ${item["Submitted Covered Payment"]}</p>
                    <p><strong>Total Payment Amount:</strong> ${item["Total Payment Amount"]}</p>
                    <p><strong>Medicare Payment Amount:</strong> ${item["Medicare Payment Amount"]}</p>

                    <button
                    className="star-inside"
                    onClick={() => toggleFavorite(item)}
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: isFavorited ? '#ffc107' : '#ccc',
                        transition: 'color 0.3s ease',
                    }}
                    title={isFavorited ? "Unstar" : "Star this service"}
                    >
                    {isFavorited ? <FaStar /> : <FaRegStar />}
                    </button>
                </div>
                </details>
                </li>
          );
        })}
      </ul>

      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            &laquo; Prev
          </button>
          <span> Page {currentPage} of {totalPages} </span>
          <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
            Next &raquo;
          </button>
        </div>
      )}

      <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
      <button
        className="help-float-button"
        onClick={() => setShowHelp(true)}
        title="How to use"
      >
        ?
      </button>
    </main>
  );
}

export default Search;
