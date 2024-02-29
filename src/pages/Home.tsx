import React from 'react';
import NavbarMenu from '../components/Navbar';
import MapComponent from '../components/MapComponent';



// Ejemplo de datos de incidentes


const HomePage: React.FC = () => {


  return (
    <main>
      <section className='main-sct'>
        <NavbarMenu />
        <MapComponent />
      </section>
    </main>
  );
};

export default HomePage;