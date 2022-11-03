export interface IProduct {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
}

export interface IMenu {
  name: string;
  img: string;
  children: IMenuChild[];
}

export interface IMenuChild {
  name: string;
  categories: string[];
}

// IBasket extends IProduct to add quantity property
export interface IBasket extends IProduct {
  quantity: number;
}
