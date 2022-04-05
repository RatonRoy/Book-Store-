// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import DashBoard from './components/DashBoard/DashBoard';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Header from './components/Header/Header';
import NoRouting from './components/NoRouting/NoRouting'

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route> 
        <Route path='/reviews' element={<Reviews></Reviews>}></Route> 
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NoRouting></NoRouting>}></Route>
      </Routes>
    </div>
  );
}

export default App;
