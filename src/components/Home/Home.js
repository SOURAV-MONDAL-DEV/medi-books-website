import React from 'react';
import { Button, Container } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mx-md-5 px-md-5'>
            <h1 className='text-center mt-5'>let's begain your medical short course with us.</h1>
            <Row xs={1} md={2} className="g-1 ">
                {/* {Array.from({ length: 4 }).map((_, idx) => (
                   
                ))} */}

                <Col className='my-md-5'>
                    <Card className='w-75  mx-auto'>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body >
                            <Card.Title >6+ Main Medical Subject.</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='my-md-5'>
                    <Card className='w-75  mx-auto'>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                            <Card.Title>24+ Subject Topic & Chapter.</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='my-md-5'>
                    <Card className='w-75  mx-auto'>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                            <Card.Title>12 x 6 Live support.</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='my-md-5'>
                    <Card className='w-75  mx-auto'>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                            <Card.Title>According To Bord Sylebas.</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This
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