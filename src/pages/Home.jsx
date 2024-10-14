import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import home_image from '../assets/image2.jpeg'
import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';
import { getHomeProjectApi } from '../../services/allApi';

function Home() {
  const [isLogin,setIsLogin]=useState(false)
  const [homeProject,setHomeProject]=useState([])

  const getHomeProjectItems=async()=>{
    const result= await getHomeProjectApi();
    console.log("home projects");
    console.log(result);
    setHomeProject(result.data)
    
    
  }
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLogin(true)
    }
    getHomeProjectItems()
  },[])
 
  return (
    <>
    <Header/>
      <div className='container-fluid bg-success p-4 mb-4' style={{ width: "100%", height: "75vh" }}>
        <Row>
          <Col md={6} className='d-flex justify-content-center align-items-center flex-column'>
            <div>
              <h3 className='text-light'>Project Fair</h3>
              <h6>One stop destination for may software projects</h6>
            </div>
            {
              isLogin ?
              <Link to={'/dashboard'}>
                <button className='btn btn-outline-light my-4'>Manage Projects <i class="fa-solid fa-arrow-right"></i> </button>
              </Link>:
              <Link to={'/login'}>
              <button className='btn btn-outline-light my-4'>Get Started <i class="fa-solid fa-arrow-right"></i> </button>
              </Link>
            }
            
          </Col>
          <Col md={6} className='d-flex justify-content-center align-items-center flex-column mt-5'>
            <img src={home_image} width="75%" alt="" />
          </Col>
        </Row>
      </div>
      <div className='container-fluid'>
        <h2 className='text-center my-5'>Explore our Projects</h2>
        <marquee scrollAmount={15}>
          <div className='row'>
          {
            homeProject?.length>0?
            homeProject.map((item)=>(
              <div className='col-md-4  justify-content-center d-flex p-4' style={{ width: '400px' }}>
              {/* bing project card */}
              <ProjectCard project={item} />
            </div>
            )):
            <p>no projects found</p>
          }
            
            {/* <div className='col-md-4  justify-content-center d-flex p-4'>
              bing project card
              <ProjectCard />
            </div>
            <div className='col-md-4  justify-content-center d-flex p-4'>
              bing project card
              <ProjectCard />
            </div> */}
          </div>
        </marquee>

        <Link to={'/project'} style={{ textDecoration: 'none', color: 'blue' }}>
          <h5 className='text-center'>See more projects</h5>
        </Link>
      </div>
      
    </>
  )
}

export default Home