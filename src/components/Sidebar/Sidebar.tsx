

import { Link } from 'react-router-dom';
import "./Sidebar.css"

import comunicareLogo from "../../assets/comunicare_icono.svg"
import mapaLogo from "../../assets/mapa_icono.svg"
import usuarioLogo from "../../assets/usuario_icono.svg"
import reportesLogo from "../../assets/reportes_icono.svg"
import premiosLogo from "../../assets/premios_icono.svg"

interface Props {
  isOpen ?: boolean;
  toggleSidebar ?: () => void;
}

const Sidebar = (props: Props) => {

  // const sidebarClass = props.isOpen ? "sidebar open" : "sidebar"
  const sidebarClass = "sidebar open"

  return (
    <div className={sidebarClass}>
      <div className="logo-container">
        <img src={comunicareLogo} style={{width: "auto", height: "auto", padding: 0}} className="logo" alt="Comunicare logo" />
        Comunicare
      </div>
      <div className="link-container">
        <Link to="/home/">
          <div className="link">
            <img src={mapaLogo} style={{width: "auto", height: "auto", padding: 0}} className="logo" alt="Mapa logo" />
            Mapa
          </div>
        </Link>
        <Link to="/home/usuario">
          <div className="link">
          <img src={usuarioLogo} style={{width: "auto", height: "auto", padding: 0}} className="logo" alt="Usuario logo" />
            Usuario
          </div>
        </Link>
        <Link to="/home/reportes">
          <div className="link">
            <img src={reportesLogo} style={{width: "auto", height: "auto", padding: 0}} className="logo" alt="Reportes logo" />
            Reportes
          </div>
        </Link>
        <Link to="/home/premios">
          <div className="link">
            <img src={premiosLogo} style={{width: "auto", height: "auto", padding: 0}} className="logo" alt="Premios logo" />
            Reportes
          </div>
        </Link>
      </div>

      {/* <button onClick={props.toggleSidebar} className="sidebar-toggle">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button> */}
    </div>
  )
}

export default Sidebar