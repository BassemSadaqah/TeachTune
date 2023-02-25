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


function App() {
  
  const [user, setUser] = useState(null);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user)
        const uid = user.uid;
        // ...
        console.log("uid", uid)
      } else {
        setUser(false)
        // User is signed out
        // ...
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </userContext.Provider>}
    </>

  );
}

export default App;
