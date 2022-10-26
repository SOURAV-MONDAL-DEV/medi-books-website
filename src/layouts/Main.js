import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from './Footer';

const Main = () => {
    return (

        <div className='container-sm'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        
    
    );
};

export default Main;