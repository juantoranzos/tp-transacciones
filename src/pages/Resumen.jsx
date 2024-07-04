import { useSelector } from "react-redux"
import { useState , useEffect } from "react"

export const Resumen = () => {
  const transacciones = useSelector((state) => state.transactions);
  const [totalPagos, setTotalPagos] = useState(0);
  const [totalIngresos, setTotalIngresos] = useState(0);
  const balance = totalIngresos - totalPagos;
  useEffect(() => {
    let sumaPagos = 0
    let sumaIngresos = 0

    transacciones.forEach(transaccion => {
      if (transaccion.tipo === 'Pago') {
        sumaPagos += parseFloat(transaccion.monto)
      }
      if (transaccion.tipo === 'Ingreso') {
        sumaIngresos += parseFloat(transaccion.monto)
      }
    })

    setTotalPagos(sumaPagos)
    setTotalIngresos(sumaIngresos)
  }, [])
  return (
    <div>
  <h2 className="text-3xl font-bold underline text-center p-3">Lista de Transacciones</h2>
  <div >



<table className="table table-zebra w-full" >
  <thead>
    <tr className="table-primary">
      <th>Fecha</th>
      <th>Tipo</th>
      <th>Monto</th>
      <th>Descripcion</th>
    </tr>
  </thead>
  <tbody>

  </tbody>
  {
    (transacciones.length > 0) ?
    transacciones.map(transaccion => {
      return <tr>
        <td>{transaccion.fecha}</td>
        <td>{transaccion.type}</td>
        <td >{transaccion.monto}</td>
        <td >{transaccion.descripcion}</td>

      </tr>
    })
    :
    <tr >
      <td >
        <p>No hay transacciones generadas</p>
      </td>
    </tr>
  }

</table>

</div>

    </div>
  )
}
