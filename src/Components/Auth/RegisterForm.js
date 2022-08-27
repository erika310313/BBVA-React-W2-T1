/* Al no disponer aún del servicio de peticiones HTTP, solamente almacenar los campos completados en un objeto
 (para posteriormente enviarlo). */

import React, { useState } from 'react';
import '../FormStyles.css';
import { useFormik } from 'formik';

const RegisterForm = () => {
    
    const [initialValues, setInitialValues] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmpass: ''
    })
    
    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'lastName'){
            setInitialValues({...initialValues, lastName: e.target.value})
        } if(e.target.name === 'email'){
            setInitialValues({...initialValues, email: e.target.value})
        } if(e.target.name === 'password'){
            setInitialValues({...initialValues, password: e.target.value})
        } if(e.target.name === 'confirmpass'){
            setInitialValues({...initialValues, confirmpass: e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
        localStorage.setItem('token', 'tokenValueExample')
    }

    const validate = values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } 

        if (!values.lastName) {
          errors.lastName = 'Required';
        }
      
        if (!values.email) {
          errors.email = 'Required';
        } /* else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        } */ 
        
        if (!values.password) {
            errors.password = 'Required';
          } else if (!/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{6,}$/i.test(values.password)) {
            /* /^(?=.*\s)/ validación para no permitir espacios */
            errors.password = 'Invalid password';
          }

        if (!values.confirmpass) {
            errors.confirmpass = 'Required';
          } else if (values.password != values.confirmpass) {
            errors.confirmpass = 'Passwords do not match';
        }

        return errors;
      };

    const formik = useFormik({
        initialValues, 
        validate,

    });

    return (
        <form className="form-container" onSubmit={formik.handleSubmit}>
            <input className="input-field" type="text" name="name" value={formik.initialValues.name} onChange={formik.handleChange} placeholder="Enter name"></input>
            <input className="input-field" type="text" name="lastName" value={formik.initialValues.lastName} onChange={formik.handleChange} placeholder="Enter last name"></input>
            <input className="input-field" type="text" name="email" value={formik.initialValues.email} onChange={formik.handleChange} placeholder="Enter email"></input>
            <input className="input-field" type="text" name="password" value={formik.initialValues.password} onChange={formik.handleChange} placeholder="Enter password"></input>
            <input className="input-field" type="text" name="confirmpass" value={formik.initialValues.confirmpass} onChange={formik.handleChange} placeholder="Confirm password"></input>
            <button className="submit-btn" type="submit">Register</button>
        </form>
    );
}
 
export default RegisterForm;