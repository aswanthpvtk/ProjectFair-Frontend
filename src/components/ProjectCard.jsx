import React from 'react'
import Card from 'react-bootstrap/Card';
import mediaPlayer from '../assets/mediaPlayer.jpeg'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../services/baseurl';

function ProjectCard({project}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Card style={{ width: '18rem' }} onClick={handleShow}>
                <Card.Img variant="top" src={`${BASE_URL}/uploads/${project.projectImage}`} height="200px" />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>

                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{project.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <img src={`${BASE_URL}/uploads/${project.projectImage}`} alt="" width='100%' />
                        </Col>
                        <Col md={6}>
                            <h4>Description:</h4>
                            <p>{project.overview}</p>
                                  <h4>Technologies:</h4>
                                  <p>{project.language}</p>
                        </Col>
                    </Row>

                </Modal.Body>
                <div className='d-flex mt-3 ms-3 mb-4'>
                    <Link className='ms-5 me-3' style={{textDecoration:'none'}} to={project.github} target='_blank'>
                    <i class="fa-brands fa-github fa-2x text-dark">
                        {/* <a href={project.github} target='_blank'></a> */}
                    </i>
                    </Link>
                    <Link to={project.website} target='_blank'>
                    <i class="fa-solid fa-link fa-2x text-dark">
                    {/* <a href={project.website} target='_blank'></a> */}
                    </i>
                    </Link>
                </div>
            </Modal>
        </>
    )
}

export default ProjectCard