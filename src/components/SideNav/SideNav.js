import React, {useEffect, useState} from 'react';

const SideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
        .then( res => res.json())
        .then(data => console.log(data));
    },[])

    return (
        <div>
            <h2>all catagori</h2>
        </div>
    );
};

export default SideNav;