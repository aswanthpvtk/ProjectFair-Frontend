import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddProject from '../components/AddProject'
import EditProject from '../components/EditProject'
import { deleteProjectApi, getUserProjectApi } from '../../services/allApi'
import { addProjectResponseContext, editprojectResponseContext } from '../context/ContextShare'

function MyProject() {
    const [userProject, setUserProject] = useState()
    const { editprojectResponse, setEditProjectResponse } = useContext(editprojectResponseContext)

    const { addProjectResponse, setAddProjectResponse } = useContext(addProjectResponseContext)
    const getUserProject = async () => {
        const token = sessionStorage.getItem("token");
        const reqHeader = {
            ' Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        const result = await getUserProjectApi(reqHeader);
        console.log("user project");
        console.log(result);
        setUserProject(result.data)


    }
    useEffect(() => {
        getUserProject()
    }, [addProjectResponse, editprojectResponse])
    const handleDelete = async (id) => {

        const token = sessionStorage.getItem("token");
        const reqHeader = {
            'Content-type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }
        const result = await deleteProjectApi(id, reqHeader)
        console.log("delete response");
        console.log(result);
        if (result.status == 200) {
            alert("project deleted successfully")
            getUserProject()
        }
        else {
            alert("something went wrong")
        }


    }
    return (
        <>
            <div className='shadow p-5 mb-5'>
                <div className='d-flex mt-4'>
                    <h5 className='text-success me-auto'>My Projects</h5>
                    {/* add project button component */}
                    <AddProject />
                </div>

                {
                    userProject?.length > 0 ?
                        userProject.map((item) => (
                            <div className='p-3 mt-4 rounded-2 d-flex bg-light'>
                                <h5>{item.title}</h5>

                                <div className='d-flex ms-auto align-items-center'>
                                    <EditProject project={item} />
                                    {/* <Link className='ms-3 text-success'>
                                        <i class="fa-solid fa-link"></i>
                                    </Link> */}
                                    <a href={item.website} target='_blank' className='btn'>
                                        <i class="fa-solid fa-link"></i>
                                    </a>
                                    <a href={item.github} target='_blank' className='btn'>
                                        <i class="fa-brands fa-github "></i>
                                    </a>

                                    {/* <Link className='ms-3 text-body'>
                                        <i class="fa-brands fa-github "></i>
                                    </Link> */}
                                    <button className='btn' onClick={() => handleDelete(item._id)}>
                                        <i class="fa-solid fa-trash text-danger"></i>
                                    </button>


                                </div>
                            </div>

                        )) :
                        <p>no projects found</p>
                }


            </div>
        </>
    )
}

export default MyProject