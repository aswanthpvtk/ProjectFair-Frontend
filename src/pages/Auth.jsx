import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { loginApi, registerApi } from '../../services/allApi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({ register }) {
  const registerForm = register ? true : false;
  //use navigate hook is used to redirect to a particular path
  const navigate=useNavigate()
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    if ((!username || !email || !password)) {
      toast.warning("please complete the form")
    }
    else {
      const result = await registerApi(userData)
      if (result.status === 201) {
        setUserData({
          username: "",
          email: "",
          password: ""
        })
        toast.success(`${username} registerd successfully`)
        //navigate login page on successfull uder registration
        navigate('/login')
      }
      else if(result.status==400){
        toast.error(result.response.data)
      }
      else {
        toast.error("something happend")
      }
      console.log(result);

    }
  }
  const handleLogin = async(e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      toast.warning("please fill the form completley")
    }
    else {
      const result=await loginApi(userData)
      console.log("login result");
      console.log(result);
      if(result.status===200){
        sessionStorage.setItem("loggedUser",JSON.stringify(result.data.data))
        sessionStorage.setItem("token",result.data.token)
        setUserData({
          username: "",
          email: "",
          password: ""
        })
        toast.success("logged in successfully")
        navigate('/')
      }
      else if(result.status===401){
        toast.erroe("Invalid username or password")
      }
      else{
        toast.error("something went wrong")
      }
      
    }
  }
  return (
    <>
      <div style={{ width: '100%', height: '80vh', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
        <div className='container w-75'>
          <h5>
            <Link className='text-warning' style={{ textDecoration: 'none', fontWeight: 'bolder' }}>
              <i class="fa-solid fa-arrow-left me-3"></i>Back to Home</Link>
          </h5>
          <div className='bg-light'>
            <Row>
              <Col md={6} className='p-4 d-flex justify-content-center align-items-center'>
                <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" alt="" width='70%' />
              </Col>
              <Col md={6} className='p-5 d-flex justify-content-center align-items-center'>
                <form className='w-100'>
                  <h5 className='text-center'>
                    <i class="fa-brands fa-stack-overflow text-warning me-3"></i>Project Fair</h5>
                  {
                    registerForm ?
                      <>
                        <h6 className='text-center mb-3 mt-3'>Sign Up to your Account</h6>
                        <input type="text" placeholder='Name' className='form-control rounded'
                          value={userData.username}
                          onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                      </>
                      :
                      <h6 className='text-center mb-3 mt-3'>Sign In to yor Account</h6>
                  }

                  {/* {
                    register &&
                    <input type="text" placeholder='name' className='form-control' />
                  } */}

                  <div className='mb-3 mt-3'>
                    <input type="email" name="" id="" placeholder='Email Id' className='form-control rounded'
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                  </div>
                  <div className='mb-3'>
                    <input type="passwoed" name="" id="" placeholder='Password' className='form-control rounded'
                      value={userData.password}
                      onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                  </div>
                  {
                    registerForm ?
                      <div>
                        <button className='btn btn-warning w-100 rounded' onClick={handleRegister}>Register</button>
                        <p className='mt-3'>Already A User? Click here to
                          <Link className='ms-2' style={{ textDecoration: 'none', color: 'blue' }} to={'/login'}>Login</Link>
                        </p>
                      </div> :
                      <div>
                        <button className='btn btn-warning w-100 rounded' onClick={handleLogin}>Login</button>
                        <p className='mt-3'>Not Registerd yet? Click here to
                          <Link className='ms-2' style={{ textDecoration: 'none', color: 'blue' }} to={'/register'}>Regiter</Link>
                        </p>
                      </div>
                  }
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Auth