// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Blogs from './Blogs/Blogs';
import DashBoard from './DashBoard/DashBoard';
import Header from './Header/Header';
import Home from './Home/Home';
import Reviews from './Reviews/Reviews';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route> 
        <Route path='/reviews' element={<Reviews></Reviews>}></Route> 
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
