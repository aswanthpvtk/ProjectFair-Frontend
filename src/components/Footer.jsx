import React from 'react'

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-success p-3'>
      <div className=' footer d-flex justify-content-center align-items-evenly' >

        <div style={{ width: "400px" }}>
          {/* <FontAwesomeIcon icon={faStack} style={{ color: "#FFD43B", }} /> */}
          <i class="fa-brands fa-stack-overflow text-warning"></i>
          <span className='text-white ms-3'>Project Fair</span>
          <p style={{ textAlign: 'justify' }} className='textStyle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae asperiores ex, error rerum ducimus et porro dignissimos libero voluptatibus a cumque ab, voluptate possimus vero quia eum, atque veritatis dolorum!</p>
          </div>
          </div>
          <div className='d-flex flex-column ms-3 '>
            <h4 className='textStyle' >Links</h4>
            <Link style={{textDecoration:'none', color:'white' }} to='/'>
            Landing page
            </Link>
            <Link style={{textDecoration:'none', color:'white' }} to='/home'>
            Home
            </Link>
            <Link style={{textDecoration:'none', color:'white' }} to='/watch'>
            Watch history
            </Link>
          </div>
          <div className='d-flex flex-column ms-3 '>
            <h4 className='textStyle'>Guides</h4>
            <Link style={{textDecoration:'none', color:'white' }} to='https://react.dev' >
            React 
            </Link>
            <Link style={{textDecoration:'none', color:'white' }} to='https://react-bootstrap.netlify.app/' target='_blank'>
            React Bootsrap
            </Link>
            <Link style={{textDecoration:'none', color:'white' }} to='https://www.w3schools.com/js/js_json_server.asp' target='_blank'>
            Json Server
            </Link>
          </div>
          <div className='contactUs ms-5'>
            <h4 className='textStyle'>Contact us</h4>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='Enter your email id' />
              <button className='ms-3 btn btn-warning'>SUBSCRIBE</button>
            </div>
            <div className='d-flex justify-content-evenly align-items-center mt-4'> 
              <Link className='icons' style={{textDecoration:'none', color:'white', fontSize:'30px' }}>
              <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link className='icons' style={{textDecoration:'none', color:'white', fontSize:'30px' }}>
              <i class="fa-brands fa-twitter"></i>
              </Link>
              <Link className='icons' style={{textDecoration:'none', color:'white', fontSize:'30px' }}>
              <i class="fa-brands fa-facebook"></i>
              </Link>
              <Link className='icons' style={{textDecoration:'none', color:'white', fontSize:'30px' }}>
              <i class="fa-brands fa-reddit"></i>
              </Link>

            </div>
           
          </div>
       

      
    </div>
  )
}

export default Footer