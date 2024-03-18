import React, { useState } from 'react'
import Slider from 'react-slick'

import ReportCard from "./ReportCard/ReportCard"
import { Reporte } from '../../pages/ReportesPage/ReportesPage'
import "./ReportSlider.css"

interface Props {
    reports: Array<Reporte>,
}

const ReportSlider = (props: Props) => {

    const [selectedCard, setSelectedCard] = useState(0);

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true,
        arrows: false,
        afterChange: function(index:number) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };

    const handleCardSelection = (id: number) => {
        setSelectedCard(id);
    }

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {props.reports?.map((report, index) => {return <ReportCard key={index} id={index} info={report} clickHandler={handleCardSelection}/>})}
            </Slider>
        </div>
    )
}

export default ReportSlider