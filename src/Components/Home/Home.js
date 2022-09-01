import React from "react";
import { Link } from 'react-router-dom';
import bienvenidos from "../../img/Bienvenidos.svg";
import Card from "../Card/Card"
import "./Home.css"


function Home() {

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                            <h1>Hola! Bienvenidx</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dignissim ac et eleifend lacus, rhoncus, dignissim sagittis. Tellus ac a, elementum ut. Tellus a morbi tincidunt ultricies malesuada eget turpis. Lacus enim non enim, velit hac turpis interdum arcu. Suspendisse at vel ultrices amet arci enim lectus porttitor ut.</p>
                            <button className="btn btn-danger"><Link to="/contact-us" className="text-header white" >Contáctanos</Link></button> 
                    </div>
                    <div className="col-6">
                        <img src={bienvenidos} className="img" alt="bienvenidos" />
                    </div>                    
                </div>
            </div>
            
            <div className="container">
                <h3>Nuestro Staff</h3>
                <Card/>
            </div>

            <div className="container">
                <h3>Testimonios</h3>
                <Card/>
            </div>
            
        </>
    )
}

export default Home; 


