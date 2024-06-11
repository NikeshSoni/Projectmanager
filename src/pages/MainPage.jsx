import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import EmployerDashBord from '../components/EmployerDashboard';
import MainForm from '../components/MainForm';
import MainPreview from '../components/MainPreview';
import { UserContext } from '../Provider/UserContext';
// import {id}
const MainPage = () => {
    const userForm = useContext(UserContext);
    const { id } = useParams();
    const filterJob = userForm.user.filter((item) => {
        const job = item.jobtitle.toLowerCase().replace(/ +/g, '-');
        return job == id;
    });

    console.log("33333333333", filterJob);
    return (
        <div className='main'>
            {/* {filterJob.map( (items) => {
                 return(
                    <>
                        {items.jobtitle}
                    </>
                 )
            })} */}
            <h1>I am main page and you selected {id}</h1>
            <EmployerDashBord data={filterJob} />
        </div>
    )
}

export default MainPage;