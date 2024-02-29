import React from 'react';
import iconArrow from '../imgs/icons/arrows.svg';

// Definimos una interfaz para las props del componente
interface IncidentCardProps {
  date: string;
  title: string;
  address: string;
  description: string;
}

// Usamos la interfaz definida para tipar las props del componente
const IncidentCard: React.FC<IncidentCardProps> = ({ date, title, address, description }) => (
  <div className="incident-card">
    <div className="incident-header">
      <div className="incident-date">{date}</div>
      <div className="incident-title">{title}</div>
      <div className="incident-address">{address}</div>
    </div>
    <div className="incident-body">
      <p className="incident-description">{description}</p>
    </div>
    <div className="incident-footer">
      <div className="incident-expand">
        <span>
        <img className='imgIcon2' src={iconArrow} alt="icon Alertas" />
          </span> {/* Puedes reemplazar esto con un ícono */}
      </div>
    </div>
  </div>
);

export default IncidentCard;
