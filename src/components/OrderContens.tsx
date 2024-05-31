import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"
import { MdDeleteForever } from "react-icons/md";

type OrderContensProps = {
  order: OrderItem[],
  removeItem: (id: MenuItem['id']) => void,
  increaseMount: (id: MenuItem['id'])=> void,
  decrementMount: (id: MenuItem['id'])=> void,
}

export default function OrderContens({order, removeItem, increaseMount, decrementMount}: OrderContensProps) {
  return (
    <div>
      <h2 className='font-black text-[#FFA500] text-4xl'>Consumo</h2>
      <div className="space-y-3 mt-10">
        {
          order.map(item => (
            <div 
              key={item.id}
              className="flex justify-between items-center   border-t border-gray-200 py-5 last-of-type:border-b"
            >
              <div className="text-white">
                <p>
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} - { formatCurrency(item.price * item.quantity) }
                </p>
              </div>
              <div className="flex gap-5">
                <button 
                  className="bg-[#81a737] h-8 w-8 rounded-full text-white font-black text-2xl"
                  onClick={()=>increaseMount(item.id)}
                >
                  +
                </button>
                <button 
                  className=" bg-[#81a737] h-8 w-8 rounded-full text-white font-black text-2xl"
                  onClick={()=>decrementMount(item.id)}
                >
                  -
                </button>
                <button 
                  className="bg-[#e8460153] h-8 w-8 rounded-full text-white font-black flex justify-center items-center"
                  onClick={()=>removeItem(item.id)}
                >
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          )
          )
        }
      </div>
    </div>
  )
}