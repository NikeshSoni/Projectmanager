import './App.scss';
import Home  from './pages/Home';
import Preview from './pages/Preview';
import {  HashRouter , Routes, Route } from "react-router-dom";
import EmployerDashBord from './components/EmployerDashboard';
import MainPage from './pages/MainPage';
import { UserProvider } from './Provider/UserProvider';

function App() {
  return (
      <>
        <UserProvider>
          <HashRouter>
              <Routes>
                <Route path='/' element={<Home />} /> 
                <Route path='/preview/:id' element={<MainPage />} />
              </Routes>
            </HashRouter>
        </UserProvider>
      </>
  )
}

export default App;
