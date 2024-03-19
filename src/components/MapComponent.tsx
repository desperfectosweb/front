import React, { useState, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker as GoogleMapMarker } from '@react-google-maps/api';
import FilterComponent from './FilterComponent'; // Ensure this path matches your project structure
import SearchAndZoomComponent from './SearchAndZoomComponent'; // Ensure this path matches your project structure
import ReportsComponent from './ReportsComponent'; // Ensure this path matches your project structure
import { Report } from '../types'; // Ensure this path matches your project structure
import ReportForm from './ReportForm'; // Ensure this path matches your project structure
// icons 
import iconLocation from '../imgs/icons/location.svg';

const mapContainerStyle = {
  width: '80vw',
  height: '94vh',
};

// Updated center coordinates for Barcelona, Spain
// const center = {
//   lat: 41.3851,
//   lng: 2.1734,
// };
const zoomLevel = 13;

const options = {
  disableDefaultUI: true, // This will disable the default map controls
  zoomControl: false, // Specifically disables the default zoom controls

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
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [, setSelectedMarker] = useState<Marker | null>(null);

  const [newReportDescription, setNewReportDescription] = useState('');
  const [newReportSeverity, setNewReportSeverity] = useState('');


  const [markers, setMarkers] = useState<Marker[]>([]);
  const [reports, setReports] = useState<Report[]>([]);
  // const [zoom, setZoom] = useState(zoomLevel);


  const [center, setCenter] = useState({ lat: 41.3851, lng: 2.1734 }); // Estado inicial para el centro, puedes cambiarlo por una ubicación predeterminada
  const handleFilterChange = useCallback((filters: FilterState) => {
    // Implement your filtering logic here
    // This example simply logs the filters to the console
    console.log(filters);
  }, []);






  const zoomIn = () => {
    setZoom((currentZoom) => currentZoom + 1);
  };

  // Function to decrease the zoom level
  const zoomOut = () => {
    setZoom((currentZoom) => Math.max(currentZoom - 1, 0)); // assuming you don't want to go below 0
  };

  // Add state for zoom control
  const [zoom, setZoom] = useState(zoomLevel);


  const handleLocationSearch = async (query: string) => {
    // Asegúrate de que la consulta no esté vacía
    if (!query.trim()) return;

    try {
      // Utiliza la API de Geocoding de Google Maps para buscar el lugar
      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ address: query }, (results, status) => {
        if (status === 'OK') {
          // Asegúrate de que results no sea null antes de acceder a su contenido
          if (results && results[0]) {
            // Si todo sale bien, actualiza el centro del mapa con las coordenadas del primer resultado
            setCenter({
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng(),
            });
          }
        } else {
          console.error('Geocode was not successful for the following reason:', status);
        }
      });
    } catch (error) {
      console.error('Error during location search:', error);
    }
  };




  const handleZoomChange = (newZoom: number) => {
    // Aquí puedes convertir el valor de kilómetros a nivel de zoom si es necesario
    // y luego actualizar el estado del zoom del mapa
    console.log(`Nuevo nivel de zoom: ${newZoom}`);
    setZoom(newZoom); // Actualiza el estado del zoom directamente si es un valor de zoom válido
  };




  const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const newMarker = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      };
      setMarkers((current) => [...current, newMarker]);
    }
  }, []);


  const onAddReport = useCallback(() => {
    const newReport = {
      id: Date.now().toString(), // Otra forma simple de generar un ID único
      lat: 41.3851, // Reemplaza con la latitud del marcador seleccionado
      lng: 2.1734, // Reemplaza con la longitud del marcador seleccionado
      description: newReportDescription,
      severity: newReportSeverity,
      time: new Date(),
    };
    setReports(currentReports => [...currentReports, newReport]);
    setNewReportDescription('');
    setNewReportSeverity('');
    setIsFormVisible(false); // Ocultar el formulario después de añadir el reporte
  }, [newReportDescription, newReportSeverity]);



  // const onEditReport = useCallback((reportId: string, newReportData: Partial<Report>) => {
  //   setReports((prev) =>
  //     prev.map((report) => (report.id === reportId ? { ...report, ...newReportData } : report))
  //   );
  // }, []);

  const onDeleteReport = useCallback((reportId: string) => {
    setReports((prev) => prev.filter((report) => report.id !== reportId));
  }, []);

  //   const handleFormSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //    console.log('Submitting report for:', selectedMarker);
  //   setSelectedMarker(null);
  //  };


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

  // Ajusta según la estructura de tus marcadores

  


  return (
    <section className='sct-map'>
      <FilterComponent onFilterChange={handleFilterChange} />
      <div className='div-container-btn'>
        <button className='btn-ubication' onClick={goToCurrentLocation}>
          <img src={iconLocation} alt="icono de ubicación" />
        </button>
        <button className='btn-zoom-in' onClick={zoomIn}>+</button>
        <button className='btn-zoom-out' onClick={zoomOut}>-</button>
      </div>



      <div className='div-map'>


        <ReportsComponent reports={reports} onAddReport={onAddReport} onDeleteReport={onDeleteReport} />




        <SearchAndZoomComponent
          onSearch={handleLocationSearch}
          onZoomChange={handleZoomChange}
        />
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={zoom}
          center={center}
          options={options}
          onClick={onMapClick}
        >

          {markers.map((marker, index) => (
            <GoogleMapMarker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                console.log('Marcador clickeado, mostrando formulario');
                setIsFormVisible(true);
                setSelectedMarker(marker);
              }}
            />
          ))}
        </GoogleMap>

        {/* {selectedMarker && (
          <form onSubmit={handleFormSubmit}>
            <h2>Reporte de Avería</h2>
            <label>
              Descripción:
              <textarea required />
            </label>
            <button type="submit">Enviar Reporte</button>
          </form>
        )}   */}

        {isFormVisible && (
          <ReportForm onSubmit={onAddReport} />
        )}


      </div>
    </section>
  );
};

export default MapComponent;

