import { useState } from 'react'

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

export default function Discount() {

  const [inputValue, setInputValue] = useState('');
  const [descuento, setDescuento] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  
  const canjear = (label)=>{
    const vale = typeDiscount.map(item => {
      if(item.label === label){
        console.log('son iguales')
        return item;
      }
    })
    console.log(vale)
    // setDescuento(vale)
    console.log(descuento)
  }
  
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
          <h2>Descuento:{}</h2>
        </div>
      </form>
    </div>
  )
}
