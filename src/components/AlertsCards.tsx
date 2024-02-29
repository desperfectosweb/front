import React from 'react';
import IncidentCard from './IncidentCard';

// Este debería ser el tipo de tus datos de incidentes
interface Incident {
  date: string;
  title: string;
  address: string;
  description: string;
}

interface AlertCardsProps {
  incidents: Incident[]; // Un array de incidentes
}

const AlertCards: React.FC<AlertCardsProps> = ({ incidents }) => (
  <div className='div-containerCards'>
    {incidents.map((incident, index) => (
      <IncidentCard
        key={index}
        date={incident.date}
        title={incident.title}
        address={incident.address}
        description={incident.description}
      />
    ))}
  </div>
);

export default AlertCards;
