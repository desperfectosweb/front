import React, { useState, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker as GoogleMapMarker } from '@react-google-maps/api';
import FilterComponent from './FilterComponent'; // Ensure this path matches your project structure

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

// Updated center coordinates for Barcelona, Spain
// const center = {
//   lat: 41.3851,
//   lng: 2.1734,
// };
const zoomLevel = 13;

const options = {
  styles: [
    {
      featureType: 'all',
      elementType: 'all',
      stylers: [
        { saturation: -20 } // Desatura todos los colores para dar un aspecto más apagado
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        { lightness: 100 }, // Hace las carreteras más claras
        { visibility: 'simplified' } // Simplifica la visualización de las carreteras
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        { hue: '#fff' }, 
        { lightness: 50 } // Hace el color del agua más claro
      ]
    },
    {
      featureType: 'poi', // Puntos de interés
      elementType: 'labels.icon',
      stylers: [
        { visibility: 'off' } // Oculta los íconos de los puntos de interés
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        { lightness: 60 } // Hace los parques más claros
      ]
    }
    // Puedes seguir agregando más estilos para otros tipos de elementos
  ]
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
  const [center, setCenter] = useState({ lat: 41.3851, lng: 2.1734 }); // Estado inicial para el centro, puedes cambiarlo por una ubicación predeterminada


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
  const goToCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          alert('No se pudo obtener la ubicación');
        }
      );
    }
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <section className='sct-map'>
      <FilterComponent onFilterChange={handleFilterChange} />
      <button onClick={goToCurrentLocation}>Ir a mi ubicación</button> {/* Botón para ir a la ubicación actual */}
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

