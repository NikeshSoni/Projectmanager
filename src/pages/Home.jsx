import EmployerDashBord from '../components/EmployerDashboard';
// import Normal from '../components/Normal';
import Preview from './Preview';
import CheckboxInput from '../components/EmployerDashboard';
import { useState } from 'react';
import ThemeContext from '../Provider/Provider'


const Home = ({jobTitle}) => {

   

    return(
       <>
       <ThemeContext.Provider value='hiii'>
           <EmployerDashBord />
       </ThemeContext.Provider>
             
            {/* <CheckboxInput /> */}
       </>
    )
}

// export  ;
export default   Home