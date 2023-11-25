import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import withUserInfo, { useUserLogin } from './Context/context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Content from './Pages/Content';
import About from './Pages/About';
import Navbar from './Components/Navbar';

function App() {
  const ctx = useUserLogin()
  useEffect(()=>{
    ctx.setUser({
      name:"Devansh",
      email:"guyaswsm@gmail.com",
      password:"bandd007@"
    })
  },[])
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/content' element={<Content></Content>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default withUserInfo(App);
