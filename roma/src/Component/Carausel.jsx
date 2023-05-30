import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './carausel.css'
import CarImg from '.././img/car_rec2.jpeg'

const handleDragStart = (e) => e.preventDefault();

const items  = [
  <img className='car_img' Prefer alt='img'  src={CarImg} onDragStart={handleDragStart} role="presentation" />,
  <img className='car_img' Prefer alt='img' src={CarImg} onDragStart={handleDragStart} role="presentation" />,
  <img className='car_img' Prefer alt='img' src={CarImg} onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () => {
  return (
    <div className='car_div'>

    <AliceCarousel    mouseTracking items={items} />
    </div>
  );
}
export default Gallery