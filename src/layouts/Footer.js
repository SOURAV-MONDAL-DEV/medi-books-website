import React from 'react';
import { Link } from 'react-router-dom';
import {FaGoogle, FaFacebook, FaTwitter, FaYoutube,  } from "react-icons/fa";
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark text-center text-white mt-4'>
            <h4 className='pt-5'>Find us on:</h4>
            <Button className='m-3' variant='outline-primary'><FaGoogle></FaGoogle></Button>
            <Button className='m-3' variant='outline-primary'><FaFacebook></FaFacebook></Button>
            <Button className='m-3' variant='outline-primary'><FaTwitter></FaTwitter></Button>
            <Button className='m-3' variant='outline-primary'><FaYoutube></FaYoutube></Button>
            <div className='text-center p-3'>
                <p>© 2022 Copyright: <Link to='/'>MediBooks.com</Link></p>
                
            </div>
        </div>
    );
};

export default Footer;