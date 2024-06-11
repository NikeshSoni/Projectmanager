import './App.scss';
import Home  from './pages/Home';
import Preview from './pages/Preview';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployerDashBord from './components/EmployerDashboard';
import CheckboxInput from './components/Dummy';
import MainPage from './pages/MainPage';
import { UserProvider } from './Provider/UserProvider';

function App() {
  return (
      <>
        <UserProvider>
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} /> 
                <Route path='/preview/:id' element={<MainPage />} />
              </Routes>
            </BrowserRouter>
        </UserProvider>
      </>
  )
}

export default App;
