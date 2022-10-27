import React from 'react';

const Subject = ({categori}) => {
    return (
        <div className='m-lg-4 mt-5 p-4 border border-info'>
            <div><h3>{categori?.title || "On this course you will learn The basic Fundamental of Human Anatomy"}</h3></div>
            <div className='mx-auto'><img src={categori?.picture || "https://images.unsplash.com/photo-1629301771443-ea9ee4aee526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW4lMjBhbmF0b215fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} class="img-fluid w-100 mx-auto" alt=""/></div>
        </div>
    );
};

export default Subject;