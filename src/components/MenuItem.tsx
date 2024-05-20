import type { MenuItem } from "../types"
import { MdAddBox } from "react-icons/md";

type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <div className="bg-white rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl p-6">
      <img src={item.foto} alt="" />
      <div className="flex flex-row w-full h-auto pt-5">
        <div className="w-1/2 h-auto">
          <p className="text-md">{item.name}</p>
          <p className="text-[#451A03] font-bold text-xl">${item.price}</p>
        </div>
        <div className="w-1/2 h-auto flex items-end justify-end">
          <button
            className="text-center"
            onClick={() => addItem(item)}
          >
            <MdAddBox className="text-4xl text-[#FFA500]"/>
          </button>
        </div>

      </div>
    </div> 
  )
}