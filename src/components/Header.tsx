import { RiShoppingCartFill } from "react-icons/ri";
import logo from '/img/logo.png'
import { menuItems } from "../data/db";

export default function Header() {
  return (
    <header className="contain h-full w-full border border-1 border-solid">
      <nav className="px-5 w-full h-auto flex justify-between items-center py-10">
        <img src={logo} alt="logo del restaurant" className="h-36"/>
        <button className="w-[40px] fixed right-20 3xl:right-72">
          <RiShoppingCartFill className="w-[40px] h-auto text-amber-300 transition-text duration-300 ease-in-out hover:text-amber-950" />
        </button>
      </nav>
      <div className="px-5 w-full h-[calc(100vh-225px)] flex justify-center items-center font-montserrat">
        <div className="w-1/2 h-full pr-28 flex flex-col justify-center items-start space-y-4 text-white text-justify">
          <h1 className="text-4xl text-[color:#F59E0B]">{menuItems[0].name}</h1>
          <p className="text-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quaerat culpa similique molestiae facere. Maxime saepe cumque deserunt, nesciunt esse magnam dolor sit architecto quas similique quos nostrum tempora? Quis.</p>
          <p className="text-2xl text-[color:#F59E0B]">Precio: $.{menuItems[0].price}</p>
          <button className="px-5 py-2 rounded-lg bg-amber-500 transition-colors duration-300 ease-in-out hover:bg-amber-950 hover:text-white">
            Añadir
          </button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={menuItems[0].foto} alt="" className="animate-float"/>
        </div>
      </div>
    </header>
  )
}