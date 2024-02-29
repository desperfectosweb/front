import React, { useState } from 'react';

interface FilterProps {
  onFilterChange: (filters: { distance: number; dateRange: string; severity: string; showHistory: boolean }) => void;
}

const FilterComponent: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [distance, setDistance] = useState<number>(10);
  const [dateRange, setDateRange] = useState<string>('Última semana');
  const [severity, setSeverity] = useState<string>('Todos los reportes');
  const [showHistory, setShowHistory] = useState<boolean>(false);

  const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDistance = Number(event.target.value);
    setDistance(newDistance);
    updateFilters(newDistance, dateRange, severity, showHistory);
  };

  const handleDateRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDateRange = event.target.value;
    setDateRange(newDateRange);
    updateFilters(distance, newDateRange, severity, showHistory);
  };

  const handleSeverityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSeverity = event.target.value;
    setSeverity(newSeverity);
    updateFilters(distance, dateRange, newSeverity, showHistory);
  };

  const handleShowHistoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowHistory(event.target.checked);
    updateFilters(distance, dateRange, severity, event.target.checked);
  };

  const updateFilters = (distance: number, dateRange: string, severity: string, showHistory: boolean) => {
    onFilterChange({
      distance,
      dateRange,
      severity,
      showHistory
    });
  };

  return (
    <div className='filter-container'>
      <h1>Filtrar Reportes</h1>
      <div>
        <label>Por Distancia</label>
        <input
          type="range"
          value={distance}
          min="1"
          max="100"
          onChange={handleDistanceChange}
        />
      </div>
      <div>
        <label>Por Fecha</label>
        <select value={dateRange} onChange={handleDateRangeChange}>
          <option value="Última semana">Última semana</option>
          {/* Add more options here */}
        </select>
      </div>
      <div>
        <label>Por Gravedad</label>
        <select value={severity} onChange={handleSeverityChange}>
          <option value="Todos los reportes">Todos los reportes</option>
          {/* Add more options here */}
        </select>
      </div>
      <div>
        <label>¿Mostrar historial de reportes?</label>
        <input
          type="checkbox"
          checked={showHistory}
          onChange={handleShowHistoryChange}
        />
      </div>
    </div>
  );
};

export default FilterComponent;
