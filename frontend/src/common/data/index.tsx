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
  price?: number;
  promotion: number;
  series: string;
  collection?: string;
  message?: string;
  package?: string;
  tag?: string;
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
