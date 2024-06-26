import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { OrderItem } from '../types';
import { formatCurrency } from '../helpers';

const typeDiscount = [
  {
    id:'d-1',
    percent: 0.1,
    label: 'PREMIO1'
  },
  {
    id:'d-2',
    percent: 0.2,
    label: 'PREMIO2'
  },
  {
    id:'d-3',
    percent: 0.3,
    label: 'PREMIO3'
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
    let value = e.target.value;
    value = value.toUpperCase().replace(/\s/g, '');
    setInputValue(value);
  }
  
  const canjear = (label: string)=>{

    const element = typeDiscount.find(item => item.label === label);
    setDescuento(element?.percent as number)
  }

  const subTotal = order.reduce( (total, item) => total + (item.quantity * item.price), 0 )
  const discountAmount = subTotal * (tip ?? 0);
  const total = subTotal + discountAmount;
  const dctoVale= parseFloat((total * (descuento ?? 0)).toFixed(2));
  const totalDcto = total - dctoVale
  
  return (
    <div className=''>
      <h3 className="font-black text-[#FFA500] text-2xl mb-3">Vale:</h3>
      <form action="" onSubmit={handleSubmit}>
        <div className='flex flex-wrap gap-3 text-white'>
          <div className='w-full flex gap-3'>
            <input 
              className='rounded-md text-black outline-none px-0 sm:p-2'
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
          </div>
          <div className='w-full flex'>
            <div className=''>
              <p>Pocentaje del vale: {(descuento ?? 0) * 100}%</p>
              <p>Descuento del vale: {dctoVale}</p>
              <p>Total: {formatCurrency(totalDcto)}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
