
import { useContext } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";
import Preview from '../pages/Preview'

const  JobPost = ({title}) => {
    const userId = title.toLowerCase().replace(/ +/g,'-');
    return(

       <>
        <button className="w-100"> 
            <Link className="text-decoration-none" to={`/preview/${userId}`}>{title}</Link>
        </button>
       </>
    )
}

export default JobPost;
