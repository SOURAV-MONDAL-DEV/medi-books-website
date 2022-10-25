import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

const Course = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                        <SideNav></SideNav>
                    </Col>
                    <Col lg="8">
                        <Outlet></Outlet>
                    </Col>
                </Row>
               
            </Container>
        </div>
    );
};

export default Course;