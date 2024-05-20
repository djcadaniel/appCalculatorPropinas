
import logo from '/img/logo.png'
import { menuItems } from "../data/db";
import { Carrito } from './Carrito';


export default function Header() {

  return (
    <header className="contain h-full w-full border border-1 border-solid">
      <nav className="px-10 sm:px-5 w-full h-auto flex justify-between items-center py-10">
        <img src={logo} alt="logo del restaurant" className="h-36"/>
        <Carrito />
      </nav>
      <div className="px-10 w-full h-[calc(100vh-225px)] flex flex-col sm:flex-row justify-center items-center font-montserrat">
        <div className="order-2 w-full sm:order-1 sm:w-1/2 h-full md:pr-4 lg:pr-28 flex flex-col justify-center items-start space-y-4 text-white ">
          <h1 className="text-4xl text-[color:#F59E0B]">{menuItems[0].name}</h1>
          <p className="text-md  text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quaerat culpa similique molestiae facere. Maxime saepe cumque deserunt, nesciunt esse magnam dolor sit architecto quas similique quos nostrum tempora? Quis.</p>
          <p className="text-2xl text-[color:#F59E0B]">Precio: $.{menuItems[0].price}</p>
          <button className="px-5 py-2 rounded-lg bg-amber-500 transition-colors duration-300 ease-in-out hover:bg-amber-950 hover:text-white">
            Añadir
          </button>
        </div>
        <div className="order-1 sm:order-2 w-1/2 flex justify-center items-center">
          <img src={menuItems[0].foto} alt="" className="animate-float min-w-80"/>
        </div>
      </div>
    </header>
  )
}