import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles (if any)
import App from './App'; // Main application
import reportWebVitals from './reportWebVitals'; // Optional performance monitoring

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance in your app (can remove if not needed)
reportWebVitals();

