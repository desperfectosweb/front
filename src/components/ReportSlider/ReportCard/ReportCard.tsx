import React from 'react'

import "./ReportCard.css"
import { Reporte } from '../../../pages/ReportesPage/ReportesPage';

interface Props {
  id: number;
  info: Reporte;
  clickHandler: (id: number)=>void;
}

const ReportCard = (props: Props) => {

  // const report = props.info;

  return (
    <div className="card-container" onClick={() => props.clickHandler}>
        <div className="report-header">
            <b>Fecha</b>
            <p>{props.info.date}</p>
        </div>
        <div className="report-info">
            <b>{props.info.type}</b>
            <p>{props.info.address}</p>
        </div>
        <span className="flechas-span">
            {/* <img src={flecha1} alt="flecha1" />
            <img src={flecha2} alt="flecha2" /> */}
        </span>
    </div>
  )
}

export default ReportCard