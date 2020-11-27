export interface IRestaurant {
  id?: number;
  _id?: string;
  name: string;
  shippingPrice: string;
  price?: '$' | '$$' | '$$$' | '$$$$';
  score?: number;
  time: string;
  image: string;
  url: string;
}
