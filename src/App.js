import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import Loading from './pages/Loading';
import ProtectedRoute from './components/ProtectedRoute';
import { userContext } from './userContext';
import Class from './pages/Class';
import Survey from './pages/Survey';


function App() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        console.log(user)
        const uid = user.uid;
      } else {
        setUser(false)
        // User is signed out
        console.log("user is logged out")
      }
    });

  }, [])



  return (
    <>
    {user===null?
    <Loading/>:
    <userContext.Provider value={user}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute ><Home /></ProtectedRoute>} />
          <Route path="login" element={<Signin user={user}/>} />
          <Route path="register" element={<Signup user={user} />} />
          <Route path="class" element={<Class />} />
          <Route path="survey/*" element={<Survey />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </userContext.Provider>}
    </>

  );
}

export default App;
