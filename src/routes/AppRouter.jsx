import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { Editar } from "../pages/Editar";
import { Buscar } from "../pages/Buscar";
import { Resumen } from "../pages/Resumen";


import React from 'react'
import { Header } from "../components/Header";

 const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/editar" element={<Editar />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/resumen" element={<Resumen />} />

    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter