import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contex/AuthProvider/AuthProvider';

const CheakOut = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://medi-books-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);


    const {topic, user} = useContext(AuthContext);
    let topicId = topic || 0 

    const categori = categories.find( c=> c.id === topicId )

    return (
        <div  className='m-lg-4 mt-5 p-4 border border-info overflow-auto'>
            <div className='d-flex mx-auto'>
                <img  className='mx-auto' src={user?.photoURL} ></img>
            </div>
            <div className='text-center'>
                <h1>HELLO, {user?.displayName}</h1>
                <h3>Wellcome to your {categori?.name} course.</h3>
            </div>
            <div className='d-flex mx-auto'>
                <img  className='mx-auto' src={categori?.picture} ></img>
            </div>
            <div>
            <div className='mt-4 p-3'><h4>From this course, You will learn The main Topic on this subject below :</h4></div>
                <div className='p-3'>{categori?.description?.map(topic => <p className='d-flex align-items-center'>⦿{topic}</p>)||<div> <p>⦿ Cell</p><p>⦿ Bone</p><p>⦿ Skin</p><p>⦿ Blood</p></div>}
                </div>
                <h6 className='m-0mt-4 p-3'>Note : The course is only for The Basics Knowledge of Madicle Subject. By Enrolling in the course you will achive a good idea on those subject.</h6>
                <h6 className='m-0 p-3'>Happy Learning.</h6>
            </div>
        </div>
    );
};

export default CheakOut;