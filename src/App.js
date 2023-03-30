import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Todo from './pages/Todo';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/todo' element={<Todo />} />
    </Routes>
  );
};

export default App;
