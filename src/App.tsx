import React from 'react';
import { BrowserRouter as Router,Route, Navigate, Routes}  from 'react-router-dom';
import './App.css';
import LoginComponent from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Navigate to='/login'/>}>
          </Route>
          <Route path='/login' element={<LoginComponent />}>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
