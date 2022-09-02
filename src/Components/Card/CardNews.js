import React from 'react';
import { Link } from 'react-router-dom'; 
import News1 from '../../img/News1.svg';
import News2 from '../../img/News2.svg';

import './CardNews.scss';


function CardNews() {
    return(
        <>
          <div className="row card-news">
            <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-6">
                        <img src={News1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing proin risus cursus elementum 
                                sed massa cras sapien placerat. Diam integer congue id amet proin. Ullamcorper nibh sit vitae ac </p>
                               
                                <Link to="/activities" className="text-header" >Ver Actividad</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>

            <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-6">
                        <img src={News2} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing proin risus cursus elementum 
                                sed massa cras sapien placerat. Diam integer congue id amet proin. Ullamcorper nibh sit vitae ac </p>
                             
                                <Link to="/activities" className="text-header" >Ver Actividad</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>  
        </div>
      
        </>
    )
}

export default CardNews; 
