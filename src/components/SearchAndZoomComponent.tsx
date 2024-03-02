import React, { useState } from 'react';

interface SearchAndZoomProps {
  onSearch: (query: string) => void; // Función para manejar la búsqueda
  onZoomChange: (newZoom: number) => void; // Función para manejar el cambio de zoom
}

const SearchAndZoomComponent: React.FC<SearchAndZoomProps> = ({ onSearch, onZoomChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [zoom, setZoom] = useState(10); // Valor inicial del zoom en kilómetros

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newZoom = Number(event.target.value);
    setZoom(newZoom);
    onZoomChange(newZoom);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Buscar un lugar"
        />
        <button type="submit">Buscar</button>
      </form>
      <label>
        Zoom del mapa
        <input
          type="range"
          min="1"
          max="20"
          value={zoom}
          onChange={handleZoomChange}
        /> {zoom} km
      </label>
    </div>
  );
};

export default SearchAndZoomComponent;
