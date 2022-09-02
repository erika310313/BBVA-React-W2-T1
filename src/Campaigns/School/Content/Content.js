import React from 'react';
import Countdown from 'react-countdown';
import Campaigns1 from '../img/Activities4.jpg';
import Campaigns2 from '../img/Campaigns2.jpg';
import Campaigns3 from '../img/Campaigns3.jpg';
/* import img1 from '../img/campaign-recent-02.jpg';
import img2 from '../img/campaign-recent-03.jpg';
import img3 from '../img/campaign-tabs.jpg'; */
import './Content.scss';

function Content () {

  const Completionist = () => <span>Empezo la campaña!</span>;

  return (
    <>
      <div className='content-school'>
        <h1>Descripcion de la campaña</h1>
        <div id="carouselExampleIndicators" className="carousel" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Campaigns1} className="img-fluid" alt="Responsive image"/>
              </div>
              <div className="carousel-item">
                <img src={Campaigns2}  className="img-fluid" alt="Responsive image"/>
              </div>
              <div className="carousel-item">
                <img src={Campaigns3} className="img-fluid" alt="Responsive image"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <ul>
            <li>Fecha</li>
            <li>Hora</li>
            <li>Lugar</li>
          </ul>
          <div className="countdown">
             <Countdown date={Date.now() + 450000000} > 
               <Completionist />
              </Countdown>
          </div>
         
      </div>
    </>
  );
}
 
export default Content;