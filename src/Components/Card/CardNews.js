import React from 'react';
import { Link } from 'react-router-dom'; 
import News1 from '../../img/News1.svg';
import News2 from '../../img/News2.svg';

import './CardNews.css';


function CardNews() {
    return(
        <>
            <div className="card mb-3" style="max-width: 540px;">
                <div className="row">
                    <div className="col-md-4">
                    <img src={News1} className="img-fluid rounded-start" alt="" />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque ex magna, eu ornare neque suscipit ut. Duis laoreet malesuada dictum. Nunc ultrices ipsum nec risus semper pulvinar. Sed dignissim.</p>
                            <button className="btn btn-primary"><Link to="/activities" className="text-header white" >Ver Actividad</Link></button> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3" style="max-width: 540px;">
                <div className="row">
                    <div className="col-md-4">
                    <img src={News2} className="img-fluid rounded-start" alt="" />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque ex magna, eu ornare neque suscipit ut. Duis laoreet malesuada dictum. Nunc ultrices ipsum nec risus semper pulvinar. Sed dignissim.</p>
                            <button className="btn btn-primary"><Link to="/activities" className="text-header white" >Ver Actividad</Link></button> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardNews; 
