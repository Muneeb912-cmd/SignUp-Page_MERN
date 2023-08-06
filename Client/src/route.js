import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginScreen from './Components/Login _Screen/LoginScreen';
import SignUpScreen from './Components/SignUp_Screen/SignupForm';
import Home from './Components/Home/Home';




const MyRouter=()=> {
  return (
    <div className="MyRouter">
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default MyRouter;