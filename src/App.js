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
import VisualLearning from './pages/VisualLearning';
import AuditoryLearning from './pages/AuditoryLearning';
import KinestheticLearning from './pages/KinestheticLearning';
import LearningApproaches from './pages/LearningApproaches';
import ThinkingMethods from './pages/ThinkingMethods';
import Footer from './components/Footer';

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
    <div className='app'>
    {user===null?
    <Loading/>:
    <userContext.Provider value={user}>
      <div className='content'>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute ><Home /></ProtectedRoute>} />
          <Route path="login" element={<Signin user={user}/>} />
          <Route path="register" element={<Signup user={user} />} />
          <Route path="class" element={<Class />} />
          <Route path="learning-approaches" element={<ProtectedRoute ><LearningApproaches /></ProtectedRoute>} />
          <Route path="thinking-methods" element={<ProtectedRoute ><ThinkingMethods /></ProtectedRoute>} />
          <Route path="visual-learning" element={<ProtectedRoute ><VisualLearning /></ProtectedRoute>} />
          <Route path="auditory-learning" element={<ProtectedRoute ><AuditoryLearning /></ProtectedRoute>} />
          <Route path="kinesthetic-learning" element={<ProtectedRoute ><KinestheticLearning /></ProtectedRoute>} />
          <Route path="survey/*" element={<Survey />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
      <Footer />
    </userContext.Provider>
    }
    </div>

  );
}

export default App;
