import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItem) => {
    // console.log(item);
    const itemExist = order.find((itemOrder) => itemOrder.id === item.id);
    console.log(itemExist);
    //   if (itemExist) {
    //     const updatedOrder = order.map((orderItem) =>
    //       orderItem.id === item.id
    //         ? { ...orderItem, quantity: orderItem.quantity + 1 }
    //         : orderItem
    //     );
    //     setOrder(updatedOrder);
    //     ("si existe");
    //   } else {
    //     const newItem = { ...item, quantity: 1 };
    //     setOrder([...order, newItem]);
    //     console.log("no existe");
    //   }
  };

  // console.log(order);

  return {
    addItem,
  };
}
