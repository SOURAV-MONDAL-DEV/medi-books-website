import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaDownload, FaCrown } from "react-icons/fa";
import { AuthContext } from '../../contex/AuthProvider/AuthProvider';
import Pdf from 'react-to-pdf';
const ref = React.createRef();

const Subject = ({ categori }) => {

    const { setTopic } = useContext(AuthContext);
    setTopic(categori?.id);


    return (
        <div className='m-lg-4 mt-5 p-4 border border-info overflow-auto'>
            <div className='text-end'>



                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <Button  onClick={toPdf} className='btn-danger m-1'><FaDownload></FaDownload> Download PDF</Button> }
                </Pdf>
                <Button className='m-1'><Link to='/cheakout' className='text-white text-decoration-none'><FaCrown></FaCrown> Buy Premium</Link></Button>
            </div >
            <div ref={ref} className='bg-info '>
                <div className='bg-info p-4'><h3 className='my-3'>{categori?.title || "On this course you will learn The basic Fundamental of Human Anatomy"}</h3></div>
                <div className='mx-auto'><img src={categori?.picture || "https://images.unsplash.com/photo-1629301771443-ea9ee4aee526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW4lMjBhbmF0b215fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} class="img-fluid w-100 mx-auto" alt="" /></div>
                <div className='mt-4 p-3'><h4>You will learn The main Topic on this subject below :</h4></div>
                <div className='p-3'>{categori?.description?.map(topic => <p className='d-flex align-items-center'>⦿{topic}</p>) || <div> <p>⦿ Cell</p><p>⦿ Bone</p><p>⦿ Skin</p><p>⦿ Blood</p></div>}
                </div>
                <h6 className='m-0mt-4 p-3'>Note : The course is only for The Basics Knowledge of Madicle Subject. By Enrolling in the course you will achive a good idea on those subject.</h6>
                <h6 className='m-0 p-3'>Happy Learning.</h6>
            </div>
        </div>
    );
};

export default Subject;