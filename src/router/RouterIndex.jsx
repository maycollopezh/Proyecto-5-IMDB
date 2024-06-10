import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MovieDetail from '../pages/MovieDetail';

const RouterIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/movieDetail/:id' element={<MovieDetail/>}></Route>
    </Routes>
  );
};

export default RouterIndex;