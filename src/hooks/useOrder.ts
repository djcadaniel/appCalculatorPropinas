import { useEffect, useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const initialMenu = (): OrderItem[] => {
    const localStorageMenu = localStorage.getItem("menu");
    return localStorageMenu ? JSON.parse(localStorageMenu) : [];
  };

  const [order, setOrder] = useState<OrderItem[]>(initialMenu);
  const [tip, setTip] = useState(0);
  const [showCar, setShowCar] = useState(false);
  const [messageCar, setMessageCar] = useState(false);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(order));
  }, [order]);

  const addItem = (item: MenuItem) => {
    setMessageCar(true);
    console.log("mensaje: " + messageCar);
    setTimeout(() => {
      setMessageCar(false);
    }, 1000);
    console.log("mensaje: " + messageCar);

    const itemExist = order.findIndex((itemOrder) => itemOrder.id === item.id);
    if (itemExist >= 0) {
      //existe en el carrito, si no hay el ID, el findindex devuelve 0
      if (order[itemExist].quantity === MAX_ITEMS) return;
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    // console.log("eliminando...", id);
    setOrder(order.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  const showDetails = () => {
    setShowCar(!showCar);
    console.log(showCar);
  };

  const increaseMount = (id: MenuItem["id"]) => {
    const element = order.map((product) => {
      if (product.id === id && product.quantity < MAX_ITEMS) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    setOrder(element);
  };

  const decrementMount = (id: MenuItem["id"]) => {
    const element = order.map((product) => {
      if (product.id === id && product.quantity > MIN_ITEMS) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });
    setOrder(element);
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
    showDetails,
    showCar,
    setShowCar,
    messageCar,
    increaseMount,
    decrementMount,
  };
}
