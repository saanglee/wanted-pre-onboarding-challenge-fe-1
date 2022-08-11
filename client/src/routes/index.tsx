import { Route, Routes } from 'react-router-dom';
import Home from '../pages/homePage/Home';
import LogIn from '../pages/login/LogIn';
import AddToDo from '../pages/todo/AddToDo';
import Detail from '../pages/todo/DetailToDo';
import EditToDo from '../pages/todo/EditToDo';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/add' element={<AddToDo />} />
      <Route path='/edit/:id' element={<EditToDo />} />
      <Route path='/todo/:id' element={<Detail />} />
    </Routes>
  );
};

export default App;
