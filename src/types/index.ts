export type MenuItem = {
  id: number;
  name: string;
  price: number;
  foto: string;
};

export type OrderItem = MenuItem & {
  quantity: number;
};
