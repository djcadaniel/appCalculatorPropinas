import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { OrderItem } from '../types';
import { formatCurrency } from '../helpers';

const typeDiscount = [
  {
    id:'d-1',
    percent: 0.1,
    label: 'premio1'
  },
  {
    id:'d-2',
    percent: 0.2,
    label: 'premio2'
  },
  {
    id:'d-3',
    percent: 0.3,
    label: 'premio3'
  },
]

type DiscountProp = {
  order: OrderItem[],
  descuento : number | null,
  setDescuento : Dispatch<SetStateAction<number | null>>
  tip: number
}

export default function Discount({descuento, setDescuento, order, tip}: DiscountProp) {

  const [inputValue, setInputValue] = useState('');
  

  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  
  const canjear = (label: string)=>{

    const element = typeDiscount.find(item => item.label === label);
    setDescuento(element?.percent as number)
  }

  const subTotal = order.reduce( (total, item) => total + (item.quantity * item.price), 0 )
  const discountAmount = subTotal * (tip ?? 0);
  const total = subTotal + discountAmount;
  const dctoVale = total * (descuento ?? 0)
  const totalDcto = total - dctoVale
  
  return (
    <div className='flex justify-start items-center gap-4'>
      <h3 className="font-black text-[#FFA500] text-2xl">Vale:</h3>
      <form action="" onSubmit={handleSubmit}>
        <div className='flex gap-3 text-white'>
          <input 
            className='rounded-md text-black outline-none px-2'
            id='discount'
            type="text"
            name='discount'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button 
            className='bg-amber-300 hover:bg-amber-950 px-6 py-2 rounded-md  text-yellow-950 hover:text-white'
            onClick={()=>canjear(inputValue)}
          >
            Canjear
          </button>
          <div className='bg-amber-300 text-yellow-950 p-2'>
            <p>Pocentaje del vale: {(descuento ?? 0) * 100}%</p>
            <p>Descuento del vale: {dctoVale}</p>
            <p>Total: {formatCurrency(totalDcto)}</p>
          </div>
        </div>
      </form>
    </div>
  )
}
