import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../containers/Home'
import Somos from '../containers/Somos'
import Contacto from '../containers/Contacto'


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/somos" element={<Somos />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>
    </BrowserRouter>
    )
}
