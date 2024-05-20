import Header from "./components/Header"
import MenuItem from "./components/MenuItem"
import OrderContens from "./components/OrderContens"
import OrderTotals from "./components/OrderTotals"
import TipPercentajeForm from "./components/TipPercentajeForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order,tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  return (
    <>
      <div className="h-[100vh] w-full bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/img/madera.jpg')]">
        <div className=" bg-gradient-to-r from-black/80 via-black/50 to-yellow-800/60">
          <Header />
        </div>
        {/* <img src={fondo} alt="" className="absolute h-full w-full object-cover bg-gradient-to-r from-yellow-950 via-yellow-900 to-yellow-600 relativemix-blend-hue" /> */}
      </div>
      <main className="max-w-7xl mx-auto py-20 bg-gray-400 grid  md:grid-cols-2">
        <div className="py-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
                <MenuItem 
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContens 
                order = {order}
                removeItem = {removeItem}
              />
              <TipPercentajeForm 
                setTip = {setTip}
                tip= {tip}
              />
              <OrderTotals 
                order = {order}
                tip = {tip}
                placeOrder = {placeOrder}
              />
            </>
          ) : (
            <p className="text-center">La orden esta vacía</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
