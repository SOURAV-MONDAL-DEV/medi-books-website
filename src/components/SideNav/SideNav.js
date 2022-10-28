import React, { useEffect, useState } from 'react';




import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';





const SideNav = ({showSubDetails}) => {

    const [radioValue, setRadioValue] = useState('1');




    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://medi-books-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className='mt-3 text-success'>
            <h2 className='border-bottom  border-primary pb-2'>Your favourite course is here.  Cheak them Out from below: </h2>


            <ButtonGroup className='d-flex flex-column pt-4'>
                {categories.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant="outline-info"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}

                        className="mb-3 rounded text-dark fw-semibold"
                        onClick={()=>showSubDetails(radio.id)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>

        </div>
    );
};

export default SideNav;