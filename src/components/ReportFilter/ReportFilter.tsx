import React, { ChangeEventHandler, useState } from 'react'

import "./ReportFilter.css"
import pfpIcon from "../../assets/pfp_icon.svg"

interface Props {}

const ReportFilter = (props: Props) => {

  const [lugar, setLugar] = useState("");
  const [sliderValue, setSliderValue] = useState(10);
  const [fecha, setFecha] = useState("all");
  const [gravedad, setGravedad] = useState(0);

  const handleLugar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLugar(e.target.value)
  }

  const SLIDER_MAX = 20;

  const getBackgroundSize = () => {
    return { backgroundSize: `${(sliderValue * 100) / SLIDER_MAX}% 100%` };
  };

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(e.target.value))
  }

  const handleFecha = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFecha(e.target.value)
  }
  
  const handleGravedad = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGravedad(parseInt(e.target.value))
  }

  return (
    <div className='filter-container'>
        <h4 style={{width: "50px"}}>Filtrar reportes</h4>
        <div className="filter-field">
          <b>Buscar un lugar</b>
          <span style={{display: "flex", flexDirection: "row", justifyContent: 'flex-start', alignItems: "center", gap: "0.5rem"}}>
            <input type="text" placeholder="Lorem ipsum" style={{width: "80px", background: "white", color: "black", border: "none"}} onChange={handleLugar}></input>
            <button style={{color: "white", background: "var(--desperfectos)", padding: "2px 8px"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{padding: 0}} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            </button>
          </span>
        </div>
        <div className="filter-field">
          <b>Zoom del mapa</b>
          <input type="range" min={0} max={SLIDER_MAX} onChange={handleSlider} style={getBackgroundSize()} value={sliderValue} />
          <p>{sliderValue} km</p>
        </div>
        <div className="filter-field">
          <b>Por fecha</b>
          <select className="fecha-select" onChange={handleFecha} value={fecha}>
              <option value="all">---</option>
              <option value="today">Hoy</option>
              <option value="yesterday">Ayer</option>
              <option value="week">Última semana</option>
              <option value="month">Último mes</option>
          </select>
        </div>
        <div className="filter-field">
          <b>Por gravedad</b>
          <select className="gravedad-select" onChange={handleGravedad} value={gravedad}>
              <option value={0}>Todos los reportes</option>
              <option value={1}>Leves</option>
              <option value={2}>Medios</option>
              <option value={3}>Graves</option>
          </select>
        </div>
        <span className="user-span">
          <img src={pfpIcon} className="pfp-icon" alt="pfp image" />
          <p>¡Hola, Nombre!</p>
        </span>
    </div>
  )
}

export default ReportFilter