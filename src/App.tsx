import React from 'react';
import { BrowserRouter as Router,Route, Navigate, Routes}  from 'react-router-dom';
import './App.css';
import LoginComponent from './pages/login';
import HomePage from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Navigate to='/login'/>}>
          </Route>
          <Route path='/login' element={<LoginComponent />}>
          </Route>
          <Route path='/home' element={<HomePage />}>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
