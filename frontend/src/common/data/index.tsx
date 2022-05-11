export type dataListMenu = { id: number; title: string };

export type dataCategory = {
  id: number;
  title: string;
  hightlight: string;
  content: string;
  img: string;
};

export type dataProducts = {
  id: number;
  img: string;
  name: string;
  discount: number;
  price: number;
  promotion: number;
  series: string;
  collection?: string;
  message?: string;
  package?: string;
  tag?: string;
  cartQuantity?: number;
};

export type dataSeries = {
  id: number;
  name: string;
};

export type dataContent = {
  id: number;
  title: string;
  content: string;
}

export type dataRegister = {
  token: string | null,
  name: string,
  email: string,
  _id: string,
  registerStatus: string | null,
  registerError: string | unknown,
  loginStatus: string | null,
  loginError: string | null,
  userLoaded: boolean,
}
