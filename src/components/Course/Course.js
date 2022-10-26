import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import Subject from '../Subject/Subject';

import { useEffect, useState } from 'react';

const Course = () => {


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    const showSubDetails = id => {
        console.log(id);
    }


    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                        <SideNav showSubDetails={showSubDetails}></SideNav>
                    </Col>
                    <Col lg="8">
                        <Subject categories={categories}></Subject>
                    </Col>
                </Row>
               
            </Container>
        </div>
    );
};

export default Course;