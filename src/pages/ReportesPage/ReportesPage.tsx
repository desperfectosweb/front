import React, { useState } from 'react'

import ReportFilter from '../../components/ReportFilter/ReportFilter'
import ReportSlider from '../../components/ReportSlider/ReportSlider';
import "./ReportesPage.css"
import ReportCard from '../../components/ReportSlider/ReportCard/ReportCard';

interface Props {}

export type Reporte = {
  id: number, 
  level: number, 
  date: string, 
  type: string, 
  address: string, 
  info: string
}

const ReportesPage = (props: Props) => {

  const [activosList, setActivosList] = useState([
    {id: 1, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
    {id: 2, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
    {id: 3, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
    {id: 4, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
    {id: 5, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
    {id: 6, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
  ]);
  const [historialList, setHistorialList] = useState([
    {id: 1, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
    {id: 2, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
    {id: 3, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
    {id: 4, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
    {id: 5, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
    {id: 6, level: 1, date:"01/01/24", type:"Averia en carretera", address: "Calle 33, municipio 1", info: "Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed. Eleifend ullamcorper sed nam ac amet varius pretium quis. Imperdiet lorem faucibus lectus at a a."},
  ]);

  const handleCardSelection = (id: number) => {
    
  }

  return (
    <div >
      <ReportFilter />
      <div className="reportes-container">
        <div className="activos-container">
          <h4 style={{ margin: 0 }}>
            Reportes Activos
          </h4>
          <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: "center"}}>
            {activosList.slice(0, 3).map((report, index) => {return <ReportCard key={index} id={index} info={report} clickHandler={handleCardSelection}/>})}
          </div>
          {/* <ReportSlider reports={activosList} /> */}
        </div>
        <div className="separator"></div>
        <div className="historial-container">
          <h4 style={{ margin: 0 }}>
            Historial de reportes
          </h4>
          <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: "center"}}>
            {historialList.slice(0, 3).map((report, index) => {return <ReportCard key={index} id={index} info={report} clickHandler={handleCardSelection}/>})}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportesPage