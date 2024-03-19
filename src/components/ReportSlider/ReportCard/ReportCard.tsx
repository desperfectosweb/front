import React from 'react'

import "./ReportCard.css"
import { Reporte } from '../../../pages/ReportesPage/ReportesPage'
import iconoNivel from "../../../assets/nivel_icono.svg"
import flechaDown from "../../../assets/arrows_down.svg"
import pfpIcon from "../../../assets/pfp_icon.svg"

interface Props {
  id: number;
  info: Reporte;
  clickHandler: (id: number)=>void;
}

const ReportCard = (props: Props) => {

  // const report = props.info;

  function translateLevel ( lvl : number ) : string {
    switch (lvl) {
      case 1:
        return "Leve";
      case 2:
        return "Medio";
      case 3:
        return "Malo";
      default:
        return "Nulo";
    }
  }

  return (
    <div className="report-card-container" onClick={() => props.clickHandler}>
        <div className="report-header">
          <span>
            <b>Fecha</b>
            <p>{props.info.date}</p>
          </span>
          <span style={{marginLeft: "auto", marginRight: "0.5rem"}}>
            <b>Nivel</b>
            <p>{translateLevel(props.info.level)}</p>
          </span>
          <img src={iconoNivel} alt="Signo de nivel" />
        </div>
        <div className="report-info">
            <b>{props.info.type}</b>
            <p>{props.info.address}</p>
        </div>
        <p>{props.info.info}</p>
        <div className='report-footer'>  
          <span style={{width: "48px"}} />
          <span className="report-flechas-span">
              <img src={flechaDown} alt="flecha abajo" />
          </span>
          <span className="users-icon-span">
              <img src={pfpIcon} style={{height: "16px"}} alt="commentary pfp image" />
              <img src={pfpIcon} style={{height: "16px"}} alt="commentary pfp image" />
              <img src={pfpIcon} style={{height: "16px"}} alt="commentary pfp image" />
          </span>
        </div>
    </div>
  )
}

export default ReportCard