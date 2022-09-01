import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import './Footer.scss';
import logo from '../../img/logo-sm.svg';
import face from '../../img/social-facebook.png';
import ig from '../../img/social-instagram.png';
import twitter from '../../img/social-twitter.png';
import youtu from '../../img/social-youtube.png';


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

        {/* { list && 
        
           list((oneData, item) => {
                return( */}
                    
                    <div className='line1'></div>
                    <img src={logo} alt="logo" className='logo' />
                    <div className='line2'></div>
                    <ul>
                    <li><Link className="text-header" to="/">Inicio</Link></li>
                    <li><Link className="text-header" to="/about-us">Nosotros</Link></li>
                    <li> <Link className="text-header" to="/news">Novedades</Link></li>
                    <li><Link className="text-header" to="/testimonies">Testimonios</Link></li>
                    <li><Link className="text-header" to="/contact-us">Contacto</Link></li>
                    <li>Contribuye</li>
                    </ul>

                    <div className="line3"></div>

                    <ul>
                    <li><a href="https://es-la.facebook.com/">
                         <img src={face} alt="circle" className='icon' />
                        </a>
                    </li>
                    <li><a href="https://www.instagram.com/">
                        <img src={ig} alt="circle" className='icon' />
                        </a>
                    </li>
                    <li><a href="https://twitter.com/?lang=es">
                        <img src={twitter} alt="circle" className='icon' />
                        </a>
                    </li>
                    <li><a href="https://www.youtube.com/">
                        <img src={youtu} alt="circle" className='icon' />
                        </a>
                    </li>
                    </ul>

                    <p>2022 by Alkemy. All Rights Reserved.</p>
                    
                {/* )
          })} */}
        
    </div>
    
    
    </>
   
  );
}
 
export default Footer;