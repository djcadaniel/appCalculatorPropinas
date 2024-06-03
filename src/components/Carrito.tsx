import { RiShoppingCartFill } from "react-icons/ri";
import { useScrollPosition } from "react-use-scroll-position";

type showDetailsProps = {
  showDetails: () => void
}

export const Carrito = ({showDetails}: showDetailsProps) => {

const {y} = useScrollPosition();
    

  return (
    <button 
      className={`z-50 w-[40px] fixed right-0 top-10 sm:right-10 3xl:right-72 ${ y > 800 ?'carritoScroll' : ''} transition-all duration-300 ease-in-out outline-none`}
      onClick={showDetails}
    >
      <RiShoppingCartFill className="w-[30px] sm:w-[40px] h-auto text-amber-300 transition-text duration-300 ease-in-out hover:text-white" />
    </button>
  )
}