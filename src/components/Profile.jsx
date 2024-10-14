import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='shadow p-4 mb-4'>
        <div className='d-flex'>
          <h5>Profile</h5>
          <button className='ms-auto btn btn-info' onClick={() => setOpen(!open)}>

            {open ?
              <i class="fa-solid fa-angle-up"></i> :
              <i class="fa-solid fa-angle-down"></i>

            }
          </button>
        </div>
        <Collapse in={open}>
          <div>
            <div className="d-flex justify-conent-center align-items-center ">
              <label htmlFor="profileImg">
                <input type="file" id='profileImg' style={{ display: 'none' }} />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s" alt=""
                  width='180px' style={{ borderRadius: '50%',marginLeft:'120px' }}  />
              </label>
            </div>
            <div>
              <input type="text" placeholder='GitHub Link' className='form-control mb-3 mt-2' />
              <input type="text" placeholder='LinkedIn Link' className='form-control mb-3' />
              <button className='btn btn-info w-100'>Update</button>
            </div>

          </div>
        </Collapse>
      </div>
    </>
  )
}

export default Profile