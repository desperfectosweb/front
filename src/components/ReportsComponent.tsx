import React, { useState } from 'react';

// Asumiendo que la interfaz Report se importa desde otro archivo
import { Report } from '../types';


interface Props {
  reports: Report[];
  onAddReport: (report: Report) => void; // Mantén onAddReport para permitir añadir nuevos reportes
  onDeleteReport?: (reportId: string) => void; // Opcional: Para eliminar un reporte
}

const ReportsComponent: React.FC<Props> = ({ reports, onAddReport, onDeleteReport }) => {
  // Estados para el formulario de añadir nuevo reporte
  const [newReportDescription, setNewReportDescription] = useState('');
  const [newReportSeverity, setNewReportSeverity] = useState('');

  // Función para manejar la adición de un nuevo reporte
  const handleAddReport = () => {
    const newReport: Report = {
      id: Math.random().toString(36).substring(2, 15), // Ejemplo de cómo generar un ID único simple
      lat: 0, // Define latitud y longitud según sea necesario
      lng: 0,
      description: newReportDescription,
      severity: newReportSeverity,
      time: new Date(),
    };
    onAddReport(newReport);
    // Resetea el formulario
    setNewReportDescription('');
    setNewReportSeverity('');
  };



  return (
    <div className='div-container-Report'>
      <h2>Reportes</h2>
      <div>
        {/* Formulario para añadir nuevo reporte */}
        <input
          type="text"
          value={newReportDescription}
          onChange={(e) => setNewReportDescription(e.target.value)}
          placeholder="Descripción del reporte"
        />
        <input
          type="text"
          value={newReportSeverity}
          onChange={(e) => setNewReportSeverity(e.target.value)}
          placeholder="Severidad del reporte"
        />
        <button onClick={handleAddReport}>Añadir Reporte</button>
      </div>
      {reports.length > 0 ? (
        <ul>
          {reports.map((report) => (
            <li key={report.id}>
              {report.description} - Severidad: {report.severity}
              {onDeleteReport && (
                <button onClick={() => onDeleteReport(report.id)}>Eliminar</button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay reportes disponibles.</p>
      )}
    </div>
  );
};

export default ReportsComponent;

