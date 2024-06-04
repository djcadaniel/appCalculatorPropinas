export type MenuItem = {
  id: number;
  name: string;
  price: number;
  foto: string;
  promotion: number;
  activatePro: boolean;
};

export type OrderItem = MenuItem & {
  quantity: number;
};
