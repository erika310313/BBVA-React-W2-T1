import React from 'react';
import axios from 'axios';
import { useState , useEffect } from 'react';
import './Footer.scss';
import logo from '../../../img/logo-sm.svg';
import circle from '../../../img/circle.svg';

function Footer () {

  const [ list , setList ] = useState ([]);

  useEffect(() => {
    const endPoint = 'https://ongapi.alkemy.org/api/organization';
    axios.get(endPoint)
        .then(response => {
          const apiData = response.data;
          setList(apiData);
        })
  },[setList]);
  
  console.log(list);

  return (

    <>
     <div className='footer'>

        { list && 
        
           list.map((oneData, item) => {
                return(
                    <>
                    <div className='line1'></div>
                    <img src={logo} alt="logo" />
                    <div className='line2'></div>
                    <ul>
                    <li>Inicio</li>
                    <li>Nosotros</li>
                    <li>Novedades</li>
                    <li>Testimonios</li>
                    <li>Contacto</li>
                    <li>Contribuye</li>
                    </ul>

                    <div className="line3"></div>

                    <ul>
                    <li><img src={circle} alt="circle" /></li>
                    <li><img src={circle} alt="circle" /></li>
                    <li><img src={circle} alt="circle" /></li>
                    <li><img src={circle} alt="circle" /></li>
                    </ul>

                    <p>2022 by Alkemy. All Rights Reserved.</p>
                    
                    </>
                )
          })}
        
    </div>
    
    
    </>
   
  );
}
 
export default Footer;