import clear from '../assets/Icons/delete.png';
import dublicate from '../assets/Icons/dublicate.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Delete = () => {

    const [ dublicateState , setDublicateState ] = useState()  

    const handleDublicate = () => {
        // return alert('Before Dublicate You Can submit the form')
    }

    const handleDelete = () => {
        //  return alert('Before Delete You Can submit the form');
    }

    return(
        <div className="position-absolute border border-2 copyDelete">
            <div onClick={handleDelete}>
                <Link to='/' className='d-flex gap-2 mt-1 text-decoration-none' >
                    <img src={clear} className='img-fluid' />
                    <p>Delete</p>
               </Link>
            </div>
            <div onClick={handleDublicate}>
               <Link to='/' className='d-flex text-decoration-none gap-2 mt-1' >
                    <img src={dublicate} className='img-fluid' />
                    <p>Dublicate</p>
               </Link>
            </div>
        </div>
    )
}

export default Delete;