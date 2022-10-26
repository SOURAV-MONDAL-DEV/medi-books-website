import React from 'react';

const Subject = ({categori}) => {
    return (
        <div className='m-4 mt-5 p-4 border border-info'>
            <div><h3>{categori.title}</h3></div>
            <div className='mx-auto'><img src={categori.picture} class="img-fluid w-100 mx-auto" alt="image"/></div>
        </div>
    );
};

export default Subject;