import React, { useEffect, useState } from 'react';
import '../styles/Saved.css';

function Save() {
  const [favorites, setFavorites] = useState([]);
  const [showDetails, setShowDetails] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('starredServices');
    if (stored) {
      const parsed = JSON.parse(stored);
      setFavorites(Object.values(parsed)); // Convert object to array
    }
  }, []);

  const removeFavorite = (item) => {
    const key = `${item.Hospital_Name}-${item.Service}`;
    const stored = JSON.parse(localStorage.getItem('starredServices') || '{}');
    delete stored[key];
    localStorage.setItem('starredServices', JSON.stringify(stored));
    setFavorites(Object.values(stored));
  };

  return (
    <main className="search-page">
        <div className="top-searches">
            <h2>Global Top 10 Searches</h2>
            <button className="toggle-details" onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "Hide Details" : "Show Details"}
            </button>

            {showDetails && (
                <>
                <p>
                    Given that hospital billing is centered around Diagnosis Related Groups, an X-ray or MRI price is embedded within the code for the related diagnosis. We have provided the top 10 DRG searches<sup>*</sup> to act as a guide in navigating MediFare to find the cost of your care.
                </p>
                <ol className="top-searches-list">
                    <li>Sepsis</li>
                    <li>Heart Failure</li>
                    <li>Respiratory Infection</li>
                    <li>Pneumonia</li>
                    <li>Respiratory Failure</li>
                    <li>Infectious Disease</li>
                    <li>Acute Myocardial Infarction</li>
                    <li>Renal Failure</li>
                    <li>Urinary tract Infection</li>
                    <li>Intracranial Hemorrhage</li>
                </ol>
                <p><em>Often, a less specific term may help kickstart a search, e.g. “knee” instead of “knee replacement.”</em></p>
                <p className="source-note">*As sourced by Definitive Healthcare using Medicare data</p>
                </>
            )}
            </div>


      <h1 className="hero-heading">Your Starred Services</h1>
      {favorites.length === 0 ? (
        <p>You haven’t starred any services yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {favorites.map((item, index) => (
            <li key={index} className="result-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <details>
                  <summary><strong>Service:</strong> {item.Service}</summary>
                  <p><strong>Hospital:</strong> {item.Hospital_Name}</p>
                  <p><strong>Address:</strong> {item.Address}</p>
                  <p><strong>Submitted Covered Payment:</strong> ${item["Submitted Covered Payment"]}</p>
                  <p><strong>Total Payment Amount:</strong> ${item["Total Payment Amount"]}</p>
                  <p><strong>Medicare Payment Amount:</strong> ${item["Medicare Payment Amount"]}</p>
                </details>
                <button
                  onClick={() => removeFavorite(item)}
                  style={{
                    backgroundColor: '#ff4d4d',
                    border: 'none',
                    color: 'white',
                    padding: '6px 12px',
                    fontSize: '0.85rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    marginLeft: '10px'
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Save;
