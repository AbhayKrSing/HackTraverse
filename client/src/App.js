import React, { useEffect, useState } from 'react';
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
  const [LoginUser, setLoginUser] = useState(null)
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/home')
        setLoginUser(user)
      }
      else {
        navigate('/login')
      }
    })
    return (() => {
      unsuscribe()
    })
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <React.Suspense fallback={<div style={{ textAlign: 'center' }}><img src={Spinner} alt="Loading" /></div>}>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/home' element={<Home LoginUser={LoginUser} setLoginUser={setLoginUser} />}></Route>
        </Routes>
      </React.Suspense>
    </>

  );
}

export default App;
