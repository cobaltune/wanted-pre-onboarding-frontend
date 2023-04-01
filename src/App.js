import React from 'react';
import { Route, Routes } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';

import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Todo from './pages/Todo';

const App = () => {
  return (
    <div className='App'>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/signup' element={<Signin />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </div>
  );
};

export default App;
