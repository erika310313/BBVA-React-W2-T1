import React from 'react';
import Members1 from '../../img/Members1.svg'
import Members2 from '../../img/Members2.svg'
import Members3 from '../../img/Members3.svg'
import Members4 from '../../img/Members4.svg'
import Members5 from '../../img/Members5.svg'
import './Card.css'

function Card () {

    return (
        <>
            <div class="row">
                <div class="col-sm-2">
                    <div class="card">
                        <img src={Members1} className="card-img-top" alt="" />
                            <h2 className="card-title">Julian Fernandez</h2>
                            <p className="card-text">Ceo/ CoFounder</p>
                            
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card">
                        <img src={Members2} className="card-img-top" alt="" />
                            <h2 className="card-title">Julian Fernandez</h2>
                            <p className="card-text">Ceo/ CoFounder</p>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card">
                        <img src={Members3} className="card-img-top" alt="" />
                            <h2 className="card-title">Julian Fernandez</h2>
                            <p className="card-text">Ceo/ CoFounder</p>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card">
                        <img src={Members4} className="card-img-top" alt="" />
                            <h2 className="card-title">Julian Fernandez</h2>
                            <p className="card-text">Ceo/ CoFounder</p>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card">
                        <img src={Members5} className="card-img-top" alt="" />
                            <h2 className="card-title">Julian Fernandez</h2>
                            <p className="card-text">Ceo/ CoFounder</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;