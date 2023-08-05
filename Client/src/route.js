import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginScreen from './Components/Login _Screen/LoginScreen';
import SignUpScreen from './Components/SignUp_Screen/SignupForm';
import ArticleList from './Components/Articles/Articles';



const MyRouter=()=> {
  return (
    <div className="MyRouter">
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path='/article' element={<ArticleList/>}/>
      </Routes>
    </div>
  );
}

export default MyRouter;