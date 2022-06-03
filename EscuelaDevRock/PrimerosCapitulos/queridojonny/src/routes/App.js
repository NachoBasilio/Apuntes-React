import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../containers/Home'
import Somos from '../containers/Somos'
import Contacto from '../containers/Contacto'
import Layout from '../components/Layout'

export default function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/somos" element={<Somos />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </Layout>
    </BrowserRouter>
    )
}
