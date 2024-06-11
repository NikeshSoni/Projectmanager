import { useContext , useState} from 'react';
import { useParams } from 'react-router-dom';
import EmployerDashBord from '../components/EmployerDashboard';
import { UserContext } from '../Provider/UserContext';

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
            <div className='text-center my-3'>
                 <h1 className='heading'> This is  {id} Page..</h1>
            </div>
            <EmployerDashBord data={filterJob} />
        </div>
    )
}

export default MainPage;