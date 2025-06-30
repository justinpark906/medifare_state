import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Hospitals() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetch('https://medifare.onrender.com/api/hospitals')
      .then(res => res.json())
      .then(data => setHospitals(data.Hospitals))
      .catch(err => console.error('Error fetching hospitals:', err));
  }, []);

  return (
    <div className="hospitals-page">
      <h1>Hospitals</h1>
      <ul>
        {hospitals.map(hospital => (
          <li key={hospital.id}>
            <Link to={`/hospital/${hospital.id}`}>
              {hospital.Hospital_Name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hospitals;
