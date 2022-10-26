import React, { useEffect, useState } from 'react';




import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';





const SideNav = ({showSubDetails}) => {

    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');




    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h2>all catagori{categories.length}</h2>


            <ButtonGroup className='d-flex flex-column '>
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