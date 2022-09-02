import React from 'react';
import Testimonials1 from '../../img/Testimonials1.svg';
import Testimonials2 from '../../img/Testimonials2.svg';
import Testimonials3 from '../../img/Testimonials3.svg';
import Testimonials4 from '../../img/Testimonials4.svg';
import Testimonials5 from '../../img/Testimonials5.svg';


import './CardTestimonials.scss'


function CardTestimonials () {

    return (
        <>
            <div class="row card-testi">
                <div className="card col-sm-2">
                    <div className="card-head">
                       <img src={Testimonials1} className="img-card" alt="..." /> 
                    </div>
                    <div className="card-body">
                        <h2 className="card-title" >Nombre y Apellido</h2>
                        <p className="card-text">testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimonio</p>
                    </div>
                </div>
                <div className="card col-sm-2">
                    <div className="card-head">
                      <img src={Testimonials2} className="img-card" alt="..." />
                    </div>
                    <div className="card-body">
                    <h2 className="card-title" >Nombre y Apellido</h2>
                        <p className="card-text">testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimonio</p>
                    </div>
                </div>
                <div className="card col-sm-2">
                    <div className="card-head">
                      <img src={Testimonials3} className="img-card" alt="..." />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title" >Nombre y Apellido</h2>
                        <p className="card-text">testimootestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimonio</p>
                    </div>
                </div>
                <div className="card col-sm-2">
                    <div className="card-head">
                      <img src={Testimonials4} className="img-card" alt="..." />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title" >Nombre y Apellido</h2>
                        <p className="card-text">testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimonio</p>
                    </div>
                </div>
                <div className="card col-sm-2">
                    <div className="card-head">
                      <img src={Testimonials5} className="img-card" alt="..." />
                    </div>
                    <div className="card-body">
                          <h2 className="card-title" >Nombre y Apellido</h2>
                        <p className="card-text">testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimonio</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardTestimonials;