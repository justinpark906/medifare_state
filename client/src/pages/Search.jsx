import React, { useState, useEffect } from 'react';
import '../styles/Search.css';
import Fuse from 'fuse.js';

const API_URL = 'https://medifare-state.onrender.com';

function Search() {
  const [hospitalInput, setHospitalInput] = useState('');
  const [serviceInput, setServiceInput] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [matchedHospital, setMatchedHospital] = useState('');
  const [results, setResults] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const RESULTS_PER_PAGE = 10;

  useEffect(() => {
    if (!selectedState) return;
    fetch(`${API_URL}/api/hospitals/${selectedState}`)
      .then(res => res.json())
      .then(data => {
        if (data.Hospitals) {
          setResults(data.Hospitals);
        } else {
          setResults([]);
        }
      })
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
  
    // Case 1: Service-only search
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
  
    // Case 2: Hospital search with or without service filter
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
  };

  const paginatedResults = filtered.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );

  const totalPages = Math.ceil(filtered.length / RESULTS_PER_PAGE);

  return (
    <main>
      <h1>Discover the cost of your care.</h1>
      <p>
        Please select a state, then search for a hospital or service below. Medifare currently supports the following states: California, New York, New Jersey, Texas and Massachusetts.
      </p>

      <div className="search-bar">
      <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
        <option value="">Select State</option>
        <option value="AK">Alaska</option>
        <option value="AL">Alabama</option>
        <option value="AR">Arkansas</option>
        <option value="AZ">Arizona</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="IA">Iowa</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="MA">Massachusetts</option>
        <option value="MD">Maryland</option>
        <option value="ME">Maine</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MO">Missouri</option>
        <option value="MS">Mississippi</option>
        <option value="MT">Montana</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="NE">Nebraska</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NV">Nevada</option>
        <option value="NY">New York</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VA">Virginia</option>
        <option value="VT">Vermont</option>
        <option value="WA">Washington</option>
        <option value="WI">Wisconsin</option>
        <option value="WV">West Virginia</option>
        <option value="WY">Wyoming</option>
        </select>
        <input
          type="text"
          placeholder="Search Hospital"
          value={hospitalInput}
          onChange={(e) => setHospitalInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search Service"
          value={serviceInput}
          onChange={(e) => setServiceInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {matchedHospital && (
        <h2 className="search-heading">
          Matched hospital: <strong>{matchedHospital}</strong>
        </h2>
      )}

      {error && <p className="error">{error}</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {paginatedResults.map((item, index) => (
          <li key={index} className="result-card">
            <details>
              <summary><strong>Service:</strong> {item.Service}</summary>
              <p><strong>Hospital:</strong> {item.Hospital_Name}</p>
              <p><strong>Address:</strong> {item.Address}</p>
              <p><strong>Submitted Covered Payment:</strong> ${item["Submitted Covered Payment"]}</p>
              <p><strong>Total Payment Amount:</strong> ${item["Total Payment Amount"]}</p>
              <p><strong>Medicare Payment Amount:</strong> ${item["Medicare Payment Amount"]}</p>
            </details>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            &laquo; Prev
          </button>
          <span> Page {currentPage} of {totalPages} </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next &raquo;
          </button>
        </div>
      )}
    </main>
  );
}

export default Search;
