import React from 'react';
import Countdown, {calcTimeDelta} from 'react-countdown';
import './content.css'
import img_campaign from './images/campaign-big-item.jpg'

const Content = () => {
  const Completionist = () => <span>¡Empieza la campaña!</span>;
  const date = calcTimeDelta("2023-01-01");

  return (
    <>
      <div className="container">
        <img src={img_campaign} alt='campaign' className='img_principal'/>
        <p className="container__p"><b>Descripción:</b> lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis dolores maxime minus maiores? Sed eligendi recusandae eaque.
          Magni corrupti nihil molestias cupiditate. Impedit, similique commodi odit natus perferendis cum.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis dolores maxime minus maiores? Sed eligendi recusandae eaque.
          Magni corrupti nihil molestias cupiditate. Impedit, similique commodi odit natus perferendis cum.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis dolores maxime minus maiores? Sed eligendi recusandae eaque.
          Magni corrupti nihil molestias cupiditate. Impedit, similique commodi odit natus perferendis cum.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis dolores maxime minus maiores? Sed eligendi recusandae eaque.
          Magni corrupti nihil molestias cupiditate. Impedit, similique commodi odit natus perferendis cum.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis dolores maxime minus maiores? Sed eligendi recusandae eaque.
          Magni corrupti nihil molestias cupiditate. Impedit, similique commodi odit natus perferendis cum.
          lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis dolores maxime minus maiores? Sed eligendi recusandae eaque.
          Magni corrupti nihil molestias cupiditate. Impedit, similique commodi odit natus perferendis cum.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis dolores maxime minus maiores? Sed eligendi recusandae eaque.
          Magni corrupti nihil molestias cupiditate. Impedit, similique commodi odit natus perferendis cum.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis dolores maxime minus maiores? Sed eligendi recusandae eaque.
          Magni corrupti nihil molestias cupiditate. Impedit, similique commodi odit natus perferendis cum.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis dolores maxime minus maiores? Sed eligendi recusandae eaque.
          Magni corrupti nihil molestias cupiditate. Impedit, similique commodi odit natus perferendis cum.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis dolores maxime minus maiores? Sed eligendi recusandae eaque.
          Magni corrupti nihil molestias cupiditate. Impedit, similique commodi odit natus perferendis cum.
          Magni corrupti nihil molestias cupiditate. Impedit, similique commodi odit natus perferendis cum.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis dolores maxime minus maiores? Sed eligendi recusandae eaque.
          Magni corrupti nihil molestias cupiditate. Impedit, similique commodi odit natus perferendis cum.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis dolores maxime minus maiores? Sed eligendi recusandae eaque.
          Magni corrupti nihil molestias cupiditate. Impedit, similique commodi odit natus perferendis cum.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis dolores maxime minus maiores? Sed eligendi recusandae eaque.
          Magni corrupti nihil molestias cupiditate. Impedit, similique commodi odit natus perferendis cum.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis dolores maxime minus maiores? Sed eligendi recusandae eaque.
          Magni corrupti nihil molestias cupiditate. Impedit, similique commodi odit natus perferendis cum.
        </p>
        <p className='container__p-date'><b>Fecha: </b>01-01-2023</p>
        <p className='container__p-hour'><b>Hora: </b>13:00</p>
        <p className='container__p-place'><b>Lugar: </b>Obelisco</p>

        <h2 className='container__h2'>Falta...</h2>
        <p className="finish">
        <Countdown date={Date.now() + date.total}>
          <Completionist />
        </Countdown>
        </p>
      </div>
    </>
  );
}
 
export default Content;