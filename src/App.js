import React from "react"
import {
  Routes,
  Route,
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import Home from "./components/Home"
import Nav from "./components/Nav"

export default function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />    
      </Routes>
    </BrowserRouter>
  )
}