import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './component/Login';

// route to login component
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} /> 
    </Routes>
  );
}

export default App;