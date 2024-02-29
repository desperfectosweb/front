import './css/base.css'
import iconSearch from '../imgs/icons/search.svg';
import imgUser from '../imgs/user.jpg';
import iconCoins from '../imgs/icons/coins.svg';
function NavbarMap() {
  return (

    <div className="navbarMap">
      <div className="search-section">
        <h3>Buscar un lugar</h3>
        <div className='div-search'>
          <input type="text" />
          <button type="submit">
            <img src={iconSearch} alt="icon Search" />
          </button>
        </div>
      </div>
      {/* <div className="zoom-section">
          <label htmlFor="zoom">Zoom del mapa</label>
          <input type="range" id="zoom" name="zoom" min="0" max="100" />
          <span>10Km</span>
        </div> */}
      {/* <div className="report-section">
          <button type="button">Crear Reporte</button>
        </div> */}
      <div className="user-section">
        <div className='div-userName'>
          <div className='div-imgUser'>
            <img src={imgUser} alt="user" />
          </div>
          <span>¡Hola, Nombre!</span>
        </div>
        <div className='div-coinsUser'>
          <div className='div-icon'>
            <img src={iconCoins} alt="icon Coins" />
          </div>
          <span>1,5000 p</span>
        </div>
      </div>
    </div>

  );
}

export default NavbarMap;
