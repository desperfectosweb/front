import React from 'react'
import "./UsuarioPage.css"

import pfpIcon from "../../assets/pfp_icon.svg"

interface Props {}

const UsuarioPage = (props: Props) => {
  return (
    <div className='usuario-container'>
      <div className='usuario-header'>
        <div className='pfp-container'><img src={pfpIcon} alt="pfp image" /></div>
        <div className='pfp-data'>
          <p>¡Hola, Nombre!</p>
          <p>San José, Costa Rica</p>
          <button>Editar</button>
        </div>
      </div>
      <div className='column-reportes'>
        <div className='reportes-container'>
          hello
        </div>
        <div className='points-container'>
          <span>¡Puntos ganados!</span>
          <span>1,5000 p</span>
        </div>
      </div>
      <div className='column-info'>
        <div className='personal-info-container'>
          <div style={{margin: "auto", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}}>
            <h4>Información personal</h4>
            <div>
              Nombre completo
              Teléfono
              Email
              Región
            </div>
          </div>
        </div>
        <div className='comments-conections-container'>
          <div className='comments-container'>
            Hello 4</div>
          <div className='connections-container'>Hello 4</div>
        </div>
      </div>
    </div>
  )
}

export default UsuarioPage