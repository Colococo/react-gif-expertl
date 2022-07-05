import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';// para que styles este en la parte global

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);

