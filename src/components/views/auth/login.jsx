import React from 'react'
import { Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from 'yup';
import "./auth.styles.css"
import logo from '../../svgs/logo.svg'
import Swal from 'sweetalert2';
import axios from 'axios';


export const Login = () => {

  const linkStyle = {
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '13px',
    color: `rgba(${30}, ${40}, ${50}, ${0.8})`,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    marginLeft: '6px'
  };

const navigate = useNavigate()

  let initialValues = {
    userName:"",
    password:""
 }

 const validationSchema = Yup.object().shape({
    userName: Yup.string().required("* Required field"),
    password: Yup.string().min(6, "* Min 6 characters").required("* Required field")
 });

const onSubmit = () => {
  axios.post("https://goscrum-api.alkemy.org/auth/login", {
      // userName: "federico",
      // password: "123456789"
      userName: values.userName,
      password: values.password
  })
  .then(data => {
    // console.log(data)
    const token = data.data.result.token;
    // console.log(token)
    localStorage.setItem("token", token)

    /*DEBERIA estar OK */
    console.log(data.data.result.user.userName);
    if (data.data.result.user.userName === "admin") {
      localStorage.setItem("admin", "admin")
    }
    else{
      localStorage.setItem("user", data.data.result.user.userName)
    }
    
    Swal.fire({
      icon: "success",
      title: "Logged in!",
      timer: 2500
    })
    navigate("/", {replace:true})
  })
  .catch(err => {
    console.error(err)
    Swal.fire({
      icon: "error",
      title: "Wrong username or password",
      timer: 2000
    })
  })
}

  const formik = useFormik( {initialValues, validationSchema, onSubmit} );
  const {handleSubmit, handleChange, values, errors} = formik
  return (
    <>
    <section className='auth-page-container'>
      <div className='auth-page'>
        <div className='auth-img'></div>

        <div className='auth-container'>
          <div className='auth'>
              <img className='logo' src={logo} alt="brand_logo" />
              <div className='title'>
                <h2>Log in to your Account</h2>
                <p>Welcome back, please enter your details.</p>
              </div>
            <form onSubmit={handleSubmit}>
              <div className='input-section'>
                <div className='social-container'>
                  <img src="../assets/facebook-logo.png" alt="" />
                  <img src="../assets/google-logo.png" alt="" />
                </div>
                <div className='or-container'>
                  <div className='first-line'></div>
                  OR
                  <div className='second-line'></div>
                </div>
                <div className='input-container'>
                  <label>Username</label>
                  <input className='text-input' onChange={handleChange} value={values.userName} name="userName" />
                </div>
                  {errors.userName && <div className="error-color">{errors.userName}</div>}
                <div className='input-container'> 
                  <label>Password</label>
                  <input className='text-input' onChange={handleChange} value={values.password} name="password" type="password"/>
                </div>
                  {errors.password && <div className="error-color">{errors.password}</div>}
                  <div className='options-container'>
                    <div className='opt-in-container'>
                      <input type="checkbox" name="my-checkbox" id="opt-in" />
                      <label for="opt-in">Remember me</label>
                    </div>
                    <label>Forgot Password?</label>
                  </div>
              </div>
              <div className='button-container'>
                <button type="submit">Log in</button>
              </div>
              <div className='sign-up'>
                <label>Don’t have an account?</label>
                <Link style={linkStyle} to="/register">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

