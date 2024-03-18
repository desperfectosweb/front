import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import CardSlider from '../../components/CardSlider/CardSlider'
import "./UsuarioPage.css"

import pfpIcon from "../../assets/pfp_icon.svg"

interface Props {}

export type ReporteUsuario = {
  id: number, 
  level: number, 
  date: string, 
  type: string, 
  address: string, 
  info: string
}

const UsuarioPage = (props: Props) => {

  const [headerInfo, setHeaderInfo] = useState({name: "Juan", place: "San José, Costa Rica"});
  const [cardFilter, setCardFilter] = useState("todos");
  const [reportesList, setReportesList] = useState([
    {id: 1, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
    {id: 2, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
    {id: 3, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
    {id: 4, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
    {id: 5, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
    {id: 6, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
  ]);
  const [userPoints, setUserPoints] = useState(15000);
  const [userData, setUserData] = useState({name: "José David Rodriguez", phone: "(+34) 8888 8888", email: "jose@email.com", region: "Barcelona/España"});

  const handleSelectChange = (event: SelectChangeEvent) => {}

  return (
    <div className='usuario-container'>
      <div className='usuario-header'>
        <div className='pfp-container'><img src={pfpIcon} alt="pfp image" /></div>
        <div className='pfp-data'>
          <div>¡Hola, {headerInfo.name}!</div>
          <div>{headerInfo.place}</div>
          <button style={{background: "var(--desperfectos)", height: "30px", display: "flex", alignItems: "center"}}>Editar</button>
        </div>
      </div>
      <div className='column-reportes'>
        <div className='usuario-reportes-container'>
          <div className="slider-header">
              <b>Reportes realizados</b>
              {/* <FormControl>
                <Select value={cardFilter} onChange={handleSelectChange} >
                  <MenuItem value="todos">Todos</MenuItem>
                  <MenuItem value="activos">Activos</MenuItem>
                  <MenuItem value="revision">En revisión</MenuItem>
                  <MenuItem value="cerrados">Cerrados</MenuItem>
                </Select>
              </FormControl> */}
          </div>
          <CardSlider reports={reportesList}/>
        </div>
        <div className='points-container'>
          <b>¡Puntos ganados!</b>
          <b style={{display: "flex", alignItems: "center"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
              <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
            </svg>
            &nbsp;
            {userPoints} p
          </b>
        </div>
      </div>
      <div className='column-info'>
        <div className='personal-info-container'>
          <div style={{margin: "2rem", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "1rem"}}>
            <h3 style={{margin: 0}}>Información personal</h3>
            <div className="data-container">
              <div className="data-unit">
                <b>Nombre completo</b>
                <p>{userData.name}</p>
              </div>
              <div className="data-unit">
                <b>Teléfono</b>
                <p>{userData.phone}</p>
              </div>
              <div className="data-unit">
                <b>Email</b>
                <p>{userData.email}</p>
              </div>
              <div className="data-unit">
                <b>Región</b>
                <p>{userData.region}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='comments-conections-container'>
          <div className='comments-container'>
            <b style={{marginTop: "1rem"}}>Comentarios</b>
            <div style={{marginLeft: "1rem"}}>
              <span style={{display: "flex", flexDirection: "row", justifyContent: 'flex-start', alignItems: "center", gap: "1rem"}}>
                <img src={pfpIcon} style={{height: "16px"}} alt="commentary pfp image" /> <p> User name</p>
              </span>
              <p>Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper</p>
            </div>
          </div>
          <div className='connections-container'>
            <b style={{marginTop: "1rem"}}>Conexiones</b>
            <span style={{display: "flex", flexDirection: "row", justifyContent: 'flex-start', alignItems: "center", gap: "1rem"}}>
              <img src={pfpIcon} style={{height: "16px"}} alt="commentary pfp image" />
              <img src={pfpIcon} style={{height: "16px"}} alt="commentary pfp image" />
              <img src={pfpIcon} style={{height: "16px"}} alt="commentary pfp image" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsuarioPage