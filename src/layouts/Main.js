import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import { AuthContext } from '../contex/AuthProvider/AuthProvider';
import Footer from './Footer';

const Main = () => {
    const {loading} = useContext(AuthContext);
    return (

        <div className='container-sm'>
            <Header></Header>
            
            <div className='text-center'>
            {
                loading ? <Spinner animation="border" variant="info"></Spinner> : <></>
            }
            </div>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        
    
    );
};

export default Main;