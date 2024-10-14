import React from 'react'
import Header from '../components/Header'
import MyProject from '../components/MyProject'
import Profile from '../components/Profile'

function Dashboard() {
  const userData=JSON.parse(sessionStorage.getItem("loggedUser"));
  console.log("logged user data");
  console.log(userData);
  
  
  return (
    <>
      <Header />
      <div className='container-fluid'>
        <h4 className='ms-4 my-4'>
          Welcome <span className='text-warning'>{userData.username}</span>
        </h4>
        <div className='row'>
          <div className='col-md-8'>
            {/* bind my project component */}
            <MyProject />
          </div>
          <div className='col-md-4'>
            {/* bind profile component */}
            <Profile />
          </div>

        </div>
      </div>

    </>
  )
}

export default Dashboard