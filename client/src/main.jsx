import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import this
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>      {/* ✅ wrap App with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
