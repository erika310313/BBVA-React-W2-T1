/* Criterios de aceptación: En base del formulario de creación existente que contiene los campos Name, Description 
y Order, agregar el campo Imagen. Para la Descripción, reemplazar el campo de texto por la librería CKEditor. 
El objetivo es crear un formulario reutilizable para las acciones de edición como de creación. Para esto, deberá 
poder recibir un objeto de forma condicional, y comportarse como un formulario de creación o edición según 
corresponda. En el caso de no recibir el objeto como propiedad, deberá realizar una petición POST al endpoint de 
creación (/Slides/create). En el caso de recibirlo, completar el formulario con los campos del mismo y realizar una 
petición PATCH al endpoint de actualización del server (/Slides/:id). Este formulario se mostrará en el backoffice 
tanto en las rutas de creación y edición (/backoffice/Slides).

Validaciones:

Todos los campos son obligatorios

Name debe tener una longitud mínima de 4 caracteres 

Órder debe ser único

La imagen deberá tener un formato .jpg o .png */

import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { Redirect } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams } from 'react-router-dom';
import apiPrivate from '../../Services/privateApiService';

const SlidesForm = () => {

    const endpoint = 'slides/'
    let { id } = useParams();
    const [error, setError] = useState('')

    const [slideValues, setSlideValues] = useState({
        name: '',
        description: '',
        order:'',
        image: ''
    });

    const getSlides = async () => {

        const idTest = 1411 /* para probar el funcionamiento; dsps cambiar por id*/

        if(idTest){
            const res = await apiPrivate.Get(`${endpoint + idTest}`)
            const {name, description, order, image} = res.data.data
            setSlideValues({
                name, description, order, image,
            })
        }
    }

    useEffect(() => {
        getSlides();
    }, []);

    const validate = () => {
        if(slideValues.name.length < 4) {
            setError('Name is too short')
            return false
        }
        
        if(!slideValues.description || !slideValues.image) {
            setError('Fields cannot be empty')
            return false
        }
        return true 
    }

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setSlideValues({...slideValues, name: e.target.value})
        } if(e.target.name === 'description'){
            setSlideValues({...slideValues, description: e.target.value})
        } if(e.target.name === 'image'){
            setSlideValues({...slideValues, image: e.target.value})
        } if(e.target.name === 'order'){
            setSlideValues({...slideValues, order: e.target.value})
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(slideValues);
    }

    let token = localStorage.getItem ('token');


    return (
        <>
        { !token && <Redirect to="/" /> }

        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={slideValues.name} onChange={handleChange} placeholder="Slide Title"></input>
            <input className="input-field" type="text" name="description" value={slideValues.description} onChange={handleChange} placeholder="Write the description"></input>
            <button className="submit-btn" type="submit">Send</button>
        </form>
        </>
    );
}
 
export default SlidesForm;