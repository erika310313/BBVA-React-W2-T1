import React, { useState } from 'react';
import { useFormik } from 'formik';
import '../FormStyles.css';
import { Redirect } from 'react-router-dom';


const LoginForm = () => {
    const [values, setInitialValues] = useState({
        email: '',
        password: ''
    });

    const validate = values => {
        const errors = {};
        if (! values.email) {
            errors.email = 'Los campos no pueden estar vacíos';
        } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
            errors.email = 'Escribir una dirección de correo electrónico válida';
        }
      
        if (! values.password) {
            errors.password = 'Los campos no pueden estar vacíos';
        } else if (!/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,16}$/.test(values.password)) {
            errors.password = 'Escribir una contraseña válida'
        }
      
        return errors;
    };

    const handleChange = (e) => {
        if(e.target.name === 'email'){
            setInitialValues({...values, email: e.target.value})
        } if(e.target.name === 'password'){
            setInitialValues({...values, password: e.target.value})
        }
    }

    const fakeToken = 1234;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('token', fakeToken)
        const datosLogin = {
            email: values.email,
            password: values.password
        }
        console.log(datosLogin);
    }

    const formik = useFormik ({
        initialValues: {
            email: "",
            password: "",
        },
        validate,
        onChange: handleChange,
        onSubmit: handleSubmit
    });

    let token = localStorage.getItem('token')

    return (
        <>
        { token && <Redirect replace to='/' />}
        <div className='col-6 offset-3 py-5'>
            <form className="form-container" onSubmit={handleSubmit}>
                <input className="input-field" type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter email"></input>
                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                <input className="input-field" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter password"></input>
                {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                <button className="submit-btn" type="submit">Log In</button>
            </form>
        </div>
        </>
    );
}
 
export default LoginForm;