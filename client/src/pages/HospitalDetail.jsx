import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function HospitalDetail() {
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    fetch('https://medifare.onrender.com/api/hospitals')
      .then(res => res.json())
      .then(data => {
        const found = data.Hospitals.find(h => h.id === id);
        setHospital(found);
      })
      .catch(err => console.error('Error loading hospital detail:', err));
  }, [id]);

  if (!hospital) return <p>Loading...</p>;

  return (
    <div className="hospital-detail">
      <h2>{hospital.Hospital_Name}</h2>
      <p><strong>Address:</strong> {hospital.Address}</p>
      <p><strong>Phone:</strong> {hospital.Phone}</p>
      <p><strong>Email:</strong> {hospital.Email}</p>
    </div>
  );
}

export default HospitalDetail;
