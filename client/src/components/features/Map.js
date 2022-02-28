import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import '../../styles/Maps.css';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3hweWRvIiwiYSI6ImNrem43ejh0aDA1cmoyb3F1bGs5bWkxd2UifQ._jXxhAY9xq4vxDz_gDCtgA';

  export default function Maps() {
      const mapContainer = useRef(null);
      const map = useRef(null);
      const [lng, setLng] = useState(-1.548567);
      const [lat, setLat] = useState(53.80);
      const [zoom, setZoom] = useState(9);

      useEffect(() => {
          if (map.current) return; // initialize map only once
          map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/outdoors-v11',
          center: [lng, lat],
          zoom: zoom
          });
        });

      useEffect(() => {
          if (!map.current) return; // wait for map to initialize
          map.current.on('move', () => {
          setLng(map.current.getCenter().lng.toFixed(4));
          setLat(map.current.getCenter().lat.toFixed(4));
          setZoom(map.current.getZoom().toFixed(2));
          });
        });


    return (
              <div>
              <div className="sidebar">
              Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
              </div>
              <div ref={mapContainer} className="map-container" />
              </div>
            );


    }