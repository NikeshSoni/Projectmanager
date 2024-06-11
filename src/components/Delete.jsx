import clear from '../assets/Icons/delete.png';
import dublicate from '../assets/Icons/dublicate.png';
import { useEffect, useState } from 'react';

const Delete = () => {

    const [ dublicateState , setDublicateState ] = useState()  

    const handleDublicate = () => {
        // return alert('hii')
    }
    return(
        <div className="position-absolute border border-2 copyDelete">
            <div className='d-flex gap-2'>
                <img src={clear} className='img-fluid' />
                <p>Delete</p>
            </div>
            <div onClick={handleDublicate} className='d-flex gap-2 mt-1'>
                <img src={dublicate} className='img-fluid' />
                <p>Dublicate</p>
            </div>
        </div>
    )
}

export default Delete;