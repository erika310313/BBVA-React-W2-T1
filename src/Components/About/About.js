import React from 'react';
import Header from './Header';
import './about.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const About = () => {
    const [about, setAbout] = useState("");

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
            <Header />
            <p className='short'>{about.short_description}</p>
            <p className='long'>{about.long_description}</p>
        </>
    )
}

export default About;