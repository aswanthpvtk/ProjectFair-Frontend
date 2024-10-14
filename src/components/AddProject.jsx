import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectApi } from '../../services/allApi';
import { addProjectResponseContext } from '../context/ContextShare';

function AddProject() {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState("")
  //useContext hook is used to access state created inside contextShare
  
  const {addProjectResponse,setAddProjectResponse}=useContext(addProjectResponseContext);
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }

  }, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    language: "",
    github: "",
    linedin: "",
    website: "",
    overview: "",
    projectImage: ""
  });

  //state for showing project image
  const [preview, setPreview] = useState();
  useEffect(() => {

    if (projectDetails.projectImage) {
      //to create image url for preview URL.createObjectURL("Image value")
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    }
  }, [projectDetails.projectImage])

  const handleAddProject = async (e) => {
    e.preventDefault();
    const { title, language, github, website, overview, projectImage } = projectDetails;
    if (!title || !language || !github || !website || !overview || !projectImage) {
      alert("please fill the form completely")
    }
    else {
      console.log(" one", token)
      //here we are also uploading a file ,so we should sent body in the form of formData
      const reqBody = new FormData
      reqBody.append("title", title)
      reqBody.append("language", language)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("overview", overview)
      reqBody.append("projectImage", projectImage)

      //here content type we are passing is multipart formData ,so specific req header needed
      const reqHeader = {
        'Content-type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
      const result = await addProjectApi(reqBody, reqHeader)
      if (result.status === 200) {
        setAddProjectResponse(result.data)
        alert(`${title} uploaded successfully`)
        setProjectDetails(
          {
            title: "",
            language: "",
            github: "",
            linedin: "",
            website: "",
            overview: "",
            projectImage: ""
          }
        )
        setPreview("")

        handleClose()
      }
      else if (result.status === 409) {
        alert(`${title} already exist`)

      }
      else {
        alert(`${title} uploaded failed`)

      }
    }
  }
  const handleClose1 = () => {
    handleClose();
    setPreview("")
    setProjectDetails(
      {
        title: "",
        language: "",
        github: "",
        linedin: "",
        website: "",
        overview: "",
        projectImage: ""
      }
    )

  }

  return (
    <>
      <button className='btn btn-success' onClick={handleShow}>Add Project</button>
      <Modal show={show} onHide={handleClose} size={'lg'}>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor="projectImg">
                <input type="file" style={{ display: 'none' }} id='projectImg'

                  onChange={(e) => setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })}
                />
                <img src={preview ? preview : "https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_640.png"} alt="" className='w-100' />
              </label>
            </div>
            <div className='col-md-6'>

              <input type="text" placeholder='Project Title'
                value={projectDetails.title}
                onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })}
                className='form-control mb-3' />

              <input type="text" placeholder='Language used'
                value={projectDetails.language}
                onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })}
                className='form-control mb-3' />

              <input type="text" placeholder='GitHub link'
                value={projectDetails.github}
                onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })}
                className='form-control mb-3' />

              <input type="text" placeholder='Website link'
                value={projectDetails.website}
                onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })}
                className='form-control mb-3' />

              <textarea name="" placeholder='Project Overview' rows={4}
                value={projectDetails.overview}
                onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })}
                className='form-control mb-3' ></textarea>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="success" onClick={handleAddProject}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProject