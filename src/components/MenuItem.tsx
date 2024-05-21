import type { MenuItem } from "../types"
import { MdAddBox } from "react-icons/md";

type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <div className="w-full h-full dishes_container transition transition-bg duration-500 ease-in-out bg-[#875B36] hover:bg-[#FFA500] text-white hover:text-[#451A03] rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl p-6 transform hover:translate-y-2 hover:scale-105">
      <div className="w-full flex justify-center items-center">
        <img src={item.foto} alt="" className="max-w-[100%] min-w-[280px] h-auto p-12 sm:p-8" />
      </div>
      <div className="flex flex-row w-full h-auto">
        <div className="w-1/2 h-auto">
          <p className="text-md">{item.name}</p>
          <p className="font-bold text-xl">${item.price}</p>
        </div>
        <div className="w-1/2 h-auto flex items-end justify-end">
          <button
            className="text-center"
            onClick={() => addItem(item)}
          >
            <MdAddBox className="text-4xl text-[#FFA500] dishes_ico"/>
          </button>
        </div>

      </div>
    </div> 
  )
}