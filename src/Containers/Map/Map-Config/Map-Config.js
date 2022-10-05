import React, { useEffect, useRef, useState } from 'react';
import { useMap } from 'react-leaflet';
import {tileLayer}  from 'leaflet';
import { useDispatch } from 'react-redux';
import { setMap } from '../../../Redux/Actions/Actions';

const MapConfig = () => {
    const dispatch = useDispatch()
    const [map] = useState(useMap())
    useEffect(()=>{
        if(map){
            dispatch(setMap(map))
        }
    },[map])
   
    const osmBasemap = tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    osmBasemap.addTo(map);
    return null
};

export default MapConfig;