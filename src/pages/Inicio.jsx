import React from 'react'
import { Header } from '../components/Header'
import { Formulario } from '../components/Formulario'

export const Inicio = () => {
  return (
    <main>
        <h1 className="text-3xl font-bold underline text-center p-3 m-3">Nueva transaccion</h1>
        <Formulario actionType="new" />


   

    </main>
  )
}
