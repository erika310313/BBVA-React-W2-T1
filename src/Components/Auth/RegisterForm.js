import React, { useState } from 'react';
import '../FormStyles.css';
import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";
/* import apiUrl from "../../Services/publicApiService"; */

const RegisterForm = () => {
   
  const [initialValues, setInitialValues] = useState({
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmpass: ''
  })

  const token = localStorage.getItem('token');
  const history = useHistory();

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

  const handleSubmit = (values) => {
    console.log('You clicked submit.');
    /* const res = await apiUrl.Post("register", {
      name: e.target.name.value.toString(),
      email: e.target.email.value.toString(),
      password: e.target.password.value.toString(),
    });
    console.log(res);
    localStorage.setItem("token", res.data.data.token); */
    const formValues = {...values};   
    console.log(formValues);
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
      } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      } 
      
      if (!values.password) {
          errors.password = 'Required';
        } else if (!/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{6,}$/i.test(values.password)) {
          errors.password = 'Invalid password';
        }

      if (!values.confirmpass) {
          errors.confirmpass = 'Required';
        } else if (values.password !== values.confirmpass) {
          errors.confirmpass = 'Passwords do not match';
      } 
      
      return errors;
    };

  const formik = useFormik({
      initialValues, 
      validate,
      onSubmit: handleSubmit,
      onChange: handleChange
  });

  return (
    <>
      {token ? (history.push('/')) :
        <div className='col-6 offset-3 py-5'>
          <form className="form-container" onSubmit={handleSubmit}>
              <input className="input-field" type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter name"></input>
              {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
              <input className="input-field" type="text" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter last name"></input>
              {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
              <input className="input-field" type="text" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter email"></input>
              {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
              <input className="input-field" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter password"></input>
              {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
              <input className="input-field" type="password" name="confirmpass" value={formik.values.confirmpass} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Confirm password"></input>
              {formik.touched.confirmpass && formik.errors.confirmpass ? <div>{formik.errors.confirmpass}</div> : null}
              <button className="submit-btn" type="submit">Register</button>
          </form>
        </div>
      }
    </>
  );
}
 
export default RegisterForm;