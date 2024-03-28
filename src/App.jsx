import React from 'react'
import Header from './component/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Routes/Home'
import Footer from './component/Footer'
import Login from './component/Routes/Login'
import YourPage from './component/Routes/YourPage'
import Register from './component/Register'
import NoPage from './component/Routes/NoPage'

export default function App() {
  return (
    <div className=''>
      <Header/>

{/* <YourPage/> */}
      <Routes>
      <Route path= "/register" element= {<Register/>}></Route>
      <Route index  element= {<Home/>}></Route>
        <Route path= "login" element= {<Login/>}></Route>
        <Route path= "yourpage" element= {<YourPage/>}></Route>
        <Route path= "*" element= {<NoPage/>}></Route>
       
      </Routes>

      <Footer/>
    </div>
  )
}
