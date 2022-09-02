import React from 'react';
import Header from './Header';
import './about.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import imgAbout from './img/about.png';
import { useHistory } from 'react-router-dom';

const About = () => {
    const [about, setAbout] = useState("");

    const history = useHistory();

    const handleClick = (e) => {
        history.push ('/'); 
    }

    useEffect(() => {
        const endPoint = 'https://ongapi.alkemy.org/api/organization'
        axios
            .get(endPoint)
            .then(response => {
                const aboutData = response.data.data;
                setAbout(aboutData);
            })
    }, []);


    return (
        <>
        
        
            <h3 className='header__h3'>Nosotros</h3>
            <img src={imgAbout} alt='about' className='img_about'/>
         <div className="info-about">
            <p className='short'>{about.short_description}</p>
            <p className='long'>{about.long_description}</p>
            <button onClick={handleClick} className='btn_about'>Ir al inicio</button>
         </div>
            
        </>
    )
}

export default About;