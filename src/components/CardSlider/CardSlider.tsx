import React, { useRef, useState } from 'react'
import Slider from 'react-slick'

import Card from './Card/Card'
import { ReporteUsuario } from '../../pages/UsuarioPage/UsuarioPage'
import "./CardSlider.css"

interface Props {
  reports: Array<ReporteUsuario>,
}

const CardSlider = (props: Props) => {

    const [cardInfo, setCardInfo] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [selectedCard, setSelectedCard] = useState(0);

    const settings = {
        className: "center",
        infinite: true,
        arrows: false,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true,
        afterChange: function(index:number) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };

    const handleCardSelection = (id: number) => {
        setSelectedCard(id);
    }; 
    
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {props.reports?.map((report, index) => {return <Card id={index+1} key={index} report={report} clickHandler={handleCardSelection} cardStyle={selectedCard === index+1 ? "selected-" : ""}/>})}
            </Slider>
        </div>
    )
}

export default CardSlider

