import { Carousel } from "bootstrap";
import React from "react";
import bienvenida from "../../img/bienvenida.png";
import Carrusel from "./Carrusel";


function Home() {

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                            <h1>Hola! Bienvenidx</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dignissim ac et eleifend lacus, rhoncus, dignissim sagittis. Tellus ac a, elementum ut. Tellus a morbi tincidunt ultricies malesuada eget turpis. Lacus enim non enim, velit hac turpis interdum arcu. Suspendisse at vel ultrices amet arci enim lectus porttitor ut.</p>
                            <button className="btn btn-danger"> Contactanos </button>
                    </div>
                    <div className="col-6">
                        <img src={bienvenida} className="" alt="" />
                    </div>                    
                </div>
            </div>

            <Carrusel/>
        </>
    )
}

export default Home; 


