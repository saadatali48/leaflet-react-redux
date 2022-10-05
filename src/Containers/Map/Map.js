import React, { useEffect, useRef } from 'react';
import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import MapConfig from './Map-Config/Map-Config';

const Map = () => {

  return( <MapContainer center={[50.5, 30.5]} zoom={13}>
  <MapConfig />
</MapContainer>);
};

export default Map;