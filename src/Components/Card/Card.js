import React from 'react';
import { Link } from 'react-router-dom'; 

function Card () {

    return (
        <>
        <div classNme="row">
            <div className="col-2">
                <div className="card my-2">
                    <img src={``} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Titulo</h2>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque ex magna, eu ornare neque suscipit ut. Duis laoreet malesuada dictum. Nunc ultrices ipsum nec risus semper pulvinar. Sed dignissim.</p>
                        <Link to={``} className="view-more">Ver más... </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;