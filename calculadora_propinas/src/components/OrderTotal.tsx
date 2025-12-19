import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: () => void
}

export default function OrderTotal({order, tip, placeOrder} : OrderTotalProps) {

  const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

  //useCallback hace lo mismo que el memo solo que ahi tendriamos que usar parentesis para llamar a las funciones
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])

  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order])

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y propinas</h2>
        <p>Subtotal a pagar: {''} {/* {''} es un espacio en blanco */}
           <span className="font-bold">{ formatCurrency(subTotalAmount)}</span>
        </p>
        
        <p>Propina: {''} 
           <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        
        <p>Total a Pagar: {''} 
           <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-5 disabled:opacity-10"
        disabled={totalAmount === 0 }
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  )
}
