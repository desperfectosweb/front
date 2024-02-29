import React, { useState, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker as GoogleMapMarker } from '@react-google-maps/api';
import FilterComponent from './FilterComponent'; // Ensure this path matches your project structure

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

// Updated center coordinates for Barcelona, Spain
const center = {
  lat: 41.3851,
  lng: 2.1734,
};
const zoomLevel = 13;

const options = {
  styles: [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#263c3f' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#6b9a76' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#38414e' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#212a37' }],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9ca5b3' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#746855' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#1f2835' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#f3d19c' }],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#2f3948' }],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#17263c' }],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#515c6d' }],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#17263c' }],
    },
  ],
};


interface Marker {
  lat: number;
  lng: number;
  time: Date;
}

interface FilterState {
  distance: number;
  dateRange: string;
  severity: string;
  showHistory: boolean;
}

const MapComponent: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDXVy0i2UQ6szLj9VstATaGSx_fzjSC2Lw", // Replace with your actual API key
  });

  const [markers, setMarkers] = useState<Marker[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);

  const handleFilterChange = useCallback((filters: FilterState) => {
    // Implement your filtering logic here
    // This example simply logs the filters to the console
    console.log(filters);
  }, []);

  const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const newMarker: Marker = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      };
      setMarkers((current) => [...current, newMarker]);
      setSelectedMarker(newMarker);
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting report for:', selectedMarker);
    setSelectedMarker(null);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <section className='sct-map'>
      <FilterComponent onFilterChange={handleFilterChange} />
      <div className='div-map'>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={zoomLevel} // Actualizado para usar la variable zoomLevel
          center={center}
          options={options} // Aquí aplicas los estilos personalizados
          onClick={onMapClick}
        >
          {markers.map(marker => (
            <GoogleMapMarker
              key={marker.time.toISOString()}
              position={{ lat: marker.lat, lng: marker.lng }}
            />
          ))}
        </GoogleMap>
        {selectedMarker && (
          <form onSubmit={handleFormSubmit}>
            <h2>Reporte de Avería</h2>
            <label>
              Descripción:
              <textarea required />
            </label>
            <button type="submit">Enviar Reporte</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default MapComponent;

