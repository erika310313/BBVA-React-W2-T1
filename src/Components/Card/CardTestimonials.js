import React from 'react';
import Testimonials1 from '../../img/Testimonials1.svg';
import Testimonials2 from '../../img/Testimonials2.svg';
import Testimonials3 from '../../img/Testimonials3.svg';
import Testimonials4 from '../../img/Testimonials4.svg';
import Testimonials5 from '../../img/Testimonials5.svg';


import './CardTestimonials.css'


function CardTestimonials () {

    return (
        <>
        <div class="row">
                <div class="col-sm-2">
                    <div class="card">
                        <div class="card-body">
                            <img src={Testimonials1} className="card-img-top" alt="" />
                                <h2 className="card-title">Nombre y Apellido</h2>
                                <p className="card-text">"testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimonio"</p>
                        </div>    
                    </div>
                </div>
                {/* <div class="col-sm-2">
                    <div class="card">
                        <img src={Testimonials2} className="card-img-top" alt="" />
                            <h2 className="card-title">Julian Fernandez</h2>
                            <p className="card-text">Ceo/ CoFounder</p>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card">
                        <img src={Testimonials3} className="card-img-top" alt="" />
                            <h2 className="card-title">Julian Fernandez</h2>
                            <p className="card-text">Ceo/ CoFounder</p>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card">
                        <img src={Testimonials4} className="card-img-top" alt="" />
                            <h2 className="card-title">Julian Fernandez</h2>
                            <p className="card-text">Ceo/ CoFounder</p>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card">
                        <img src={Testimonials5} className="card-img-top" alt="" />
                            <h2 className="card-title">Julian Fernandez</h2>
                            <p className="card-text">Ceo/ CoFounder</p>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default CardTestimonials;