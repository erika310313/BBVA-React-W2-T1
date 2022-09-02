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
                            <h2 className="card-title">Mario Fuentes</h2>
                            <p className="card-text">Psicólogo</p>
                            
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card">
                        <img src={Members2} className="card-img-top" alt="" />
                            <h2 className="card-title">Cecilia Mendez</h2>
                            <p className="card-text">Psicopedagoga</p>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card">
                        <img src={Members3} className="card-img-top" alt="" />
                            <h2 className="card-title">Rodrigo Fuente</h2>
                            <p className="card-text">Contador</p>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card">
                        <img src={Members4} className="card-img-top" alt="" />
                            <h2 className="card-title">Miriam Rodriguez</h2>
                            <p className="card-text">Terapista Ocupacional</p>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card">
                        <img src={Members5} className="card-img-top" alt="" />
                            <h2 className="card-title">Marco Fernandez</h2>
                            <p className="card-text">Prof. de Educ. Física</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;