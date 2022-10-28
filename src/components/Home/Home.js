import React from 'react';
import { Button, Container } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mx-md-5 px-md-5'>
            <h1 className='text-center text-info mt-5'>Let's begain your medical short course with us.</h1>
            <Row xs={1} md={2} className="g-1 ">
                {/* {Array.from({ length: 4 }).map((_, idx) => (
                   
                ))} */}

                <Col className='my-md-5'>
                    <Card className='w-75 bg-warning text-light mx-auto'>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body >
                            <Card.Title >6+ Main Medical Subject.</Card.Title>
                            <Card.Text>
                                The main and fundamental medical subject. Those Subject are so important for a health sector student. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='my-md-5'>
                    <Card className='w-75  bg-success text-light mx-auto'>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                            <Card.Title>24+ Subject Topic & Chapter.</Card.Title>
                            <Card.Text>
                                Into the Main subject we organize The main topic and chapter basis on those subject. There are more than 24 chapter.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='my-md-5'>
                    <Card className='w-75 bg-info text-white mx-auto'>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                            <Card.Title>12 x 6 Live support.</Card.Title>
                            <Card.Text>
                                After enrolled in the course We give you the live support about any kind of asking , cofution or problem.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='my-md-5'>
                    <Card className='w-75 bg-danger text-light mx-auto'>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                            <Card.Title>According To Bord Sylebas.</Card.Title>
                            <Card.Text>
                                The course is organize according to the curriculam an Sylebas of State Medical facality of Bangladesh.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

           <div className='text-center'>
                <Link to='/course'><Button btn btn-primary>Start Course</Button> </Link>
           </div>

        </div>
    );
};

export default Home;