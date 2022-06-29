import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { MapsApp } from './MapsApp';
import mapboxgl from 'mapbox-gl';
import { token } from './utils/const';
 


mapboxgl.accessToken=`${token}`;
if(!navigator.geolocation){
  alert('Tu navegador no tiene opcion de Geolocalización');
  throw new Error('Tu navegador no tiene opcion de Geolocalización');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
