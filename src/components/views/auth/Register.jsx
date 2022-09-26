import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from 'yup';
import logo from '../../svgs/logo.svg'
import Swal from 'sweetalert2';
import "./auth.styles.css"
import axios from "axios"

export const Register = () => {

  const navigate = useNavigate()

  const linkStyle = {
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '13px',
    color: `rgba(${30}, ${40}, ${50}, ${0.8})`,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    marginLeft: '6px'
  };


  let initialValues = {
    userName:"",
    password:"",
    email:"",
 }

 const validationSchema = Yup.object().shape({
    userName: Yup.string().required("* Required field"),
    password: Yup.string().min(6, "* Min 6 characters").required("* Required field"),
    email: Yup.string().email("* Must be a valid email").required("* Enter an email")
 });


 const onSubmit = () => {
  axios.post("https://goscrum-api.alkemy.org/auth/register", {
    user: {
      userName: values.userName,
      password: values.password,
      email: values.email,
      teamID: "9cdbd108-f924-4383-947d-8f0c651d0dad",
      role: "Team Member",
      continent: "America",
      region: "Brazil"
  },
  })
  .then(data => {
    navigate("/login", {replace:true})
    Swal.fire({
      icon: "success",
      title: "Logged in!",
      timer: 1500
    })
  })
}

  const formik = useFormik( {initialValues, validationSchema, onSubmit} );
  const {handleSubmit, handleChange, values, touched, errors} = formik
  return (
    <>
    <section className='auth-page-container'>
      <div className='auth-page'>
        <div className='auth-img'></div>

        <div className='auth-container'>
          <div className='auth'>
              <img className='logo' src={logo} alt="brand_logo" />
              <div className='title'>
                <h2>Register your Account</h2>
                <p>Welcome back, please enter your details.</p>
              </div>
            <form onSubmit={handleSubmit}>
              <div className='input-section'>
                {/* <div className='social-container'>
                  <img src="../assets/facebook-logo.png" alt="" />
                  <img src="../assets/google-logo.png" alt="" />
                </div>
                <div className='or-container'>
                  <div className='first-line'></div>
                  OR
                  <div className='second-line'></div>
                </div> */}
                <div className='input-container'>
                  <label>Email</label>
                  <input className='text-input' onChange={handleChange} value={values.email} name="email" />
                </div>
                {errors.email && touched.email && <div className="error-color">{errors.email}</div>}
                <div className='input-container'>
                  <label>Username</label>
                  <input className='text-input' onChange={handleChange} value={values.userName} name="userName" />
                </div>
                  {errors.userName && touched.userName && <div className="error-color">{errors.userName}</div>}
                <div className='input-container'> 
                  <label>Password</label>
                  <input className='text-input' onChange={handleChange} value={values.password} name="password" type="password"/>
                </div>
                  {errors.password && <div className="error-color">{errors.password}</div>}
              </div>
              <div className='button-container'>
                <button type="submit">Register</button>
              </div>
              <div className='sign-up'>
                <label>Do you have an account?</label>
                <Link style={linkStyle} to="/login">Log in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

// const onSubmit = () => {
//   axios.post("https://goscrum-api.alkemy.org/auth/register", {
//     // user: {
//     //   userName: values.userName,
//     //   password: values.password,
//     //   email: values.email,
//     //   teamID: values.teamId,
//     //   role: values.role,
//     //   continent: values.continent,
//     //   region: values.region
//     // }
//     user: {
//       userName: "1prueba2",
//       password: "1prueba2",
//       email: "1prueba2@gmail.com",
//       teamID: "9cdbd108-f924-4383-947d-8f0c651d0dad",
//       role: "Team Leader",
//       continent: "America",
//       region: "Otro"
//     }
//   })
//   .then(data=> {
//     console.log(data)
//     Swal.fire({
//       icon: "success",
//       title: "Registered!",
//       timer: 2500
//     })
//     navigate("/login", {replace:true})
//   })
//   .catch(err => {
//     console.log(err)
//     Swal.fire({
//       icon: "error",
//       title: "There´s already an account with those credentials",
//       timer: 2500
//     })
//   })

//   Swal.fire({
//     icon: "success",
//     title: "submitted",
//     timer: 2000
//   })
//  }