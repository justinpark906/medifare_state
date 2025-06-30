import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Results.css'; // Make sure to create & style this CSS file

function Results() {
  const location = useLocation();
  const hospital = location.state?.hospital || '';
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState({});
  const servicesPerPage = 10;

  useEffect(() => {
    if (hospital) {
      const query = encodeURIComponent(hospital);
      fetch(`http://localhost:3000/search?hospital=${query}`)
        .then(res => res.json())
        .then(data => {
          const allServices = Object.values(data).flat();
          setServices(allServices);
        })
        .catch(err => console.error('Failed to fetch:', err));
    }
  }, [hospital]);

  const toggleExpand = (index) => {
    setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(indexOfFirstService, indexOfLastService);
  const totalPages = Math.ceil(services.length / servicesPerPage);

  return (
    <div className="results-page">
      <h1>Results for {hospital}</h1>
      {currentServices.map((service, idx) => (
        <div key={idx} className="service-card">
          <div onClick={() => toggleExpand(idx + indexOfFirstService)} className="service-header">
            {service.Description}
          </div>
          {expanded[idx + indexOfFirstService] && (
            <div className="service-details">
              <p><strong>Cash Pay:</strong> ${service["Cash Pay"]}</p>
              <p><strong>Plan:</strong> {service["Insurance Plan"]}</p>
            </div>
          )}
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={i + 1 === currentPage ? 'active' : ''}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Results;
