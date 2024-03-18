import React from 'react'

import "./Card.css"
import { ReporteUsuario } from '../../../pages/UsuarioPage/UsuarioPage'
import flecha1 from "../../../assets/flecha1.svg"
import flecha2 from "../../../assets/flecha2.svg"
import flecha3 from "../../../assets/flecha3.svg"
import flecha4 from "../../../assets/flecha4.svg"

interface Props {
  id: number;
  report: ReporteUsuario,
  clickHandler: (id:number)=>void;
  cardStyle: string;
}

const Card = (props: Props) => {

  return (
    <div className={props.cardStyle+"card-container"} onClick={() => props.clickHandler(props.id)}>
        <div>
            <b className="report-data-entry">Fecha</b>
            <p className="report-data-entry">{props.report.date}</p>
            <b className="report-data-entry">{props.report.type}</b>
            <p className="report-data-entry">{props.report.address}</p>
        </div>
        <span className={props.cardStyle+"flechas-span"}>
          {props.cardStyle==="selected-" ?
          <>
            <img src={flecha1} alt="flecha1" />
            <img src={flecha2} alt="flecha2" />
          </>
          :
          <>
            <img src={flecha3} alt="flecha3" />
            <img src={flecha4} alt="flecha4" />
          </>
          }
        </span>
    </div>
  )
}

export default Card