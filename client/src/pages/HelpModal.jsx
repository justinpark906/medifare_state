import React from 'react';
import '../styles/HelpModal.css';

function HelpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="help-modal-overlay" onClick={onClose}>
      <div className="howto-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="help-close" onClick={onClose}>×</button>
        
        <h2 className="howto-title">How to Use <span className="medifare-bold">MediFare</span></h2>

        <ol className="howto-list">
          <li>
            <span className="step-title">Select a state</span> using the dropdown or map.
          </li>
          <li>
            <span className="step-title">Search for a healthcare service</span> by name 
            <span className="example"> (e.g. "Knee joint replacement", "Digestive System")</span>.
            <p className="step-tip">💡 Tip: Tip: Use clear, focused keywords when searching. Since services are derived from standardized Medicare data, extra words may make results less accurate. For example, search “replacement” instead of “knee surgery cost.”</p>
          </li>
          <li>
            <span className="step-title">Optionally search by hospital name</span> to narrow results further.
          </li>
        </ol>
        <p className="howto-footer">
        Some services may be bundled or unavailable depending on the hospital's data.<br />
          Our pricing data is derived from publicly available Medicare data.<br />
          Different or limited results reflect gaps in published data.
        </p>
      </div>
    </div>
  );
}

export default HelpModal;
