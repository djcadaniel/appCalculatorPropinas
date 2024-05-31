import { Dispatch, SetStateAction } from "react"
import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import Discount from "./Discount"

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: ()=> void,
  descuento: number | null,
  setDescuento: Dispatch<SetStateAction<number | null>>
}

export default function OrderTotals({order, tip, placeOrder, descuento, setDescuento}: OrderTotalsProps) {

  const subTotalAmount = useMemo( ( ) => order.reduce( (total, item) => total + (item.quantity * item.price), 0 ), [order] );
  const tipAmount = useMemo(()=> subTotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(()=> subTotalAmount + tipAmount ,[tip, order])

  return (
    <>
      <div className='space-y-3 text-white'>
        <h2 className='font-black text-2xl text-[#FFA500]'>Totales y Propina:</h2>
        <p>Subtotal a pagar: <span className='font-bold'>{ formatCurrency(subTotalAmount) }</span></p>
        <p>Propina: <span className='font-bold'>{formatCurrency(tipAmount)}</span></p>
        <p>Total a pagar: <span className='font-bold'>{formatCurrency(totalAmount)}</span></p>
      </div>
      <Discount 
        order = {order}
        descuento = {descuento}
        setDescuento = {setDescuento}
        tip = {tip}
      />
      <button 
        className="w-full bg-[#FFA500] p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled= {totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  )
}
