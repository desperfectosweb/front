import React, { useState } from 'react'

import "./PremiosPage.css"

interface Props {}

const PremiosPage = (props: Props) => {

  const [userPoints, setUserPoints] = useState(15000);
  const [premiosObtenidos, setPremiosObtenidos] = useState<string[]|null>([]);

  const handleSelectPremio = (e: React.MouseEvent<HTMLButtonElement>) => {
    let temp = [...premiosObtenidos , e.currentTarget.getAttribute('value')];
    console.log(temp);
    setPremiosObtenidos(temp);
  }

  return (
    <div className="premios-container">
      <h4 className="premios-header">Canje de puntos</h4>
      <div className="puntos-container">
        <b style={{width: "50px"}}>¡Puntos ganados!</b>
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
      <div className="selection-container">
        <div className="premio-card">
          <b>Bonificaciones en el Impuesto sobre Bienes Inmuebles</b>
          <p>Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a.</p>
          <button disabled={premiosObtenidos?.includes("1")} className="premio-button" value="1" onClick={handleSelectPremio}>{premiosObtenidos?.includes("1") ? "Obtenido" : "14000p"}</button>
        </div>
        <div className="premio-card">
          <b>Bonificaciones en el Impuesto sobre Vehículos de Tracción Mecánica</b>
          <p>Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a.</p>
          <button disabled={premiosObtenidos?.includes("2")} className="premio-button" value="2" onClick={handleSelectPremio}>{premiosObtenidos?.includes("2") ? "Obtenido" : "18000p"}</button>
        </div>
        <div className="premio-card">
          <b>Exenciones Parciales en Tasas Municipales</b>
          <p>Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a.</p>
          <button disabled={premiosObtenidos?.includes("3")} className="premio-button" value="3" onClick={handleSelectPremio}>{premiosObtenidos?.includes("3") ? "Obtenido" : "19500p"}</button>
        </div>
      </div>
    </div>
  )
}

export default PremiosPage