import React, { useEffect } from 'react';
import './App.css';
import LandingPage from './components/Pages/LandingPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Spinner from './components/Image/loadingspinner.gif'
import Home from './components/Pages/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/Firebase';
const Login = React.lazy(() => import('./components/Pages/Loginpage'))
const SignUp = React.lazy(() => import('./components/Pages/SignUp'))
function App() {
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        navigate('/home')
      }
      else {
        navigate('/login')
      }
    })
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <React.Suspense fallback={<div style={{ textAlign: 'center' }}><img src={Spinner} alt="" /></div>}>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </React.Suspense>
    </>

  );
}

export default App;
