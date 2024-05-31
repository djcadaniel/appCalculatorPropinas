import Discount from "./components/Discount"
import Header from "./components/Header"
import MenuItem from "./components/MenuItem"
import OrderContens from "./components/OrderContens"
import OrderTotals from "./components/OrderTotals"
import TipPercentajeForm from "./components/TipPercentajeForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order,tip, setTip, addItem, removeItem, placeOrder, showDetails, showCar, messageCar, increaseMount ,decrementMount } = useOrder()

  return (
    <>
      <div className="h-[100vh] w-full bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/img/madera.jpg')]">
        <div className="bg-gradient-to-r from-black/80 via-black/50 to-yellow-800/60">
          <Header 
            showDetails = {showDetails}
            addItem={addItem}
            order = {order}
          />
        </div>
        {/* <img src={fondo} alt="" className="absolute h-full w-full object-cover bg-gradient-to-r from-yellow-950 via-yellow-900 to-yellow-600 relativemix-blend-hue" /> */}
      </div>
      <div className={`${messageCar ? 'fixed bg-amber-950 text-white border border-yellow-600 top-10 right-0 sm:right-1/2 left-[35%] sm:left-1/2': 'hidden'} w-[200px] text-center p-3 rounded-lg z-50`}>
        <p>Producto añadido😀</p>
      </div>
      <div 
        className={`opacity-90 ${ showCar ? 'showCar' : '  '} z-50 fixed top-0 -left-full h-full w-[90%] lg:w-[50%] transition-all duration-500 ease-in-out p-5 space-y-10 bg-[#875B36]`}
      >
        {order.length > 0 ? (
          <>
            <OrderContens 
              order = {order}
              removeItem = {removeItem}
              increaseMount = {increaseMount}
              decrementMount = {decrementMount}
            />
            <TipPercentajeForm 
              setTip = {setTip}
              tip= {tip}
            />
            <Discount />
            <OrderTotals 
              order = {order}
              tip = {tip}
              placeOrder = {placeOrder}
            />
          </>
        ) : (
          <p className="text-center w-full bg-black/20 text-white py-6">Carrito vacío 😝</p>
        )}
      </div>
      <main className="mx-auto w-full bg-[#48392D] font-montserrat">
        <section className="w-full h-auto contain p-10">
          <h2 className="text-4xl font-black text-white">Menú</h2>
          <div className="w-full h-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 px-5 sm:px-10 md:px-20 py-5">
            {menuItems.map(item => (
                <MenuItem 
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
