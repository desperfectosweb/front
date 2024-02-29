import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './css/base.css';
import Logo from '../imgs/ComuniCareLogo.svg';
import iconMap from '../imgs/icons/map.svg';
import iconUser from '../imgs/icons/user.svg';
import iconReport from '../imgs/icons/report.svg';
import iconCoins from '../imgs/icons/coins.svg';

const NavbarMenu = () => (
  <Navbar expand="lg" fixed="top" className='nav'>
 <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Navbar.Collapse id="basic-navbar-nav">
      <div className='a-logo'>
        <Navbar.Brand as={Link} to="/">
          <img className='imglogo' src={Logo} alt="Logo" />
        </Navbar.Brand>
        <h2> ComuniCare</h2>
      </div>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/home">
          <img className='imgIcon' src={iconMap} alt="icon Mapa" />
          Mapa
        </Nav.Link>
        <Nav.Link as={Link} to="/cuenta">
          <img className='imgIcon' src={iconUser} alt="icon Usuario" />
          Cuenta
        </Nav.Link>
        <Nav.Link as={Link} to="/reportes">
          <img className='imgIcon' src={iconReport} alt="icon Reportes" />
          Reportes
        </Nav.Link>
        <Nav.Link as={Link} to="/premios">
          <img className='imgIcon' src={iconCoins} alt="icon Premios" />
          Premios
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarMenu;
