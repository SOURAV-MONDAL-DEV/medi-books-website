import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaDownload, FaCrown } from "react-icons/fa";

const Subject = ({categori}) => {
    return (
        <div className='m-lg-4 mt-5 p-4 border border-info overflow-auto'>
            <div className='text-end'>
                <Button className='btn-danger m-1'><FaDownload></FaDownload> Download PDF</Button>
                <Button className='m-1'><Link to='/cheakout' className='text-white text-decoration-none'><FaCrown></FaCrown> Buy Premium</Link></Button>
            </div>
            <div><h3 className='my-3'>{categori?.title || "On this course you will learn The basic Fundamental of Human Anatomy"}</h3></div>
            <div className='mx-auto'><img src={categori?.picture || "https://images.unsplash.com/photo-1629301771443-ea9ee4aee526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW4lMjBhbmF0b215fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} class="img-fluid w-100 mx-auto" alt=""/></div>
            <div><p>lorem </p></div>
        </div>
    );
};

export default Subject;