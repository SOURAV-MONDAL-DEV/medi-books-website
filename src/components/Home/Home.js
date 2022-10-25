import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>this is HoME</h1>
            <Link to='/course'>Course</Link>
        </div>
    );
};

export default Home;