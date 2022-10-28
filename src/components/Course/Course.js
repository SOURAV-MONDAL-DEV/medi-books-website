import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideNav from '../SideNav/SideNav';
import Subject from '../Subject/Subject';

import { useEffect, useState } from 'react';

const Course = () => {


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://medi-books-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])


    const [categori, setCategori] = useState([]);

    const showSubDetails = (id) => {
        const cat = categories.find(c => c.id === id);
        setCategori(cat);
    }
    
   
    

    return (
        <div >
            <Container>
                <Row>
                    <Col lg="4">
                        <SideNav showSubDetails={showSubDetails}></SideNav>
                    </Col>
                    <Col lg="8">
                        <Subject categori={categori} ></Subject>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Course;