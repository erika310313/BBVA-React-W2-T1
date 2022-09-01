import React from 'react';
import { Link } from 'react-router-dom'; 

function CardsNews () {
    return(
        <>
            <div className="card mb-3" style="max-width: 540px;">
                <div className="row">
                    <div className="col-md-4">
                    <img src={``} className="img-fluid rounded-start" alt="" />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Titulo</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque ex magna, eu ornare neque suscipit ut. Duis laoreet malesuada dictum. Nunc ultrices ipsum nec risus semper pulvinar. Sed dignissim.</p>
                            <Link to={``} className="view-more">Ver más... </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardsNews; 
