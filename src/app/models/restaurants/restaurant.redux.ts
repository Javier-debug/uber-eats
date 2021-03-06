import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { getStateDiffChanges } from '@ngxs/store/src/internal/internals';
import { IRestaurant } from '../../interfaces/restaurant/restaurant.interface';

export interface  IRRestaurant {
  restaurants: IRestaurant[];
  selectedId: number;
}

@Injectable()
@State<IRRestaurant>({
  name: 'restaurantState',
  defaults: {
    restaurants: [{
      id: 1,
      name: "La chilakleta",
      score: 4.7,
      shippingPrice: "MXN20",
      image: "https://duyt4h9nfnj50.cloudfront.net/resized/1543716414111-w2880-ed.jpg",
      price: "$$",
      time: "10-20 min",
      url: "https://www.ubereats.com/mx/leon/food-delivery/la-chilakleta/bRxGEed2Sr6ZNlPKMCN5aQ"
    },
    {
      id: 2,
      name: "Starbucks (PlazaZentro)",
      score: 4.7,
      shippingPrice: "MXN22",
      image: "https://www.elfinanciero.com.mx/uploads/2020/03/05/f51238cd021583451962_standard_desktop_medium_retina.webp",
      price: "$",
      time: "15-25 min",
      url: "https://www.ubereats.com/mx/leon/food-delivery/starbucks-plaza-zenttro/YBtcylasSla5BmusIomWsw"
    },
    {
      id: 3,
      name: "Tacos Genesis",
      score: 4.8,
      shippingPrice: "MXN22",
      image: "data:image/jpeg;base64,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",
      price: "$",
      time: "10-20 min",
      url: ""
    },
    {
      id: 4,
      name: "Quesadillas Doña Rosy",
      score: 4.7,
      shippingPrice: "MXN24",
      image: "https://d1ralsognjng37.cloudfront.net/ec35c69f-dbc6-4c35-849a-d0e6ffb4e9e6.jpeg",
      price: "$",
      time: "15-25 min",
      url: "https://www.ubereats.com/mx/leon/food-delivery/quesadillas-dona-rosy/GzFF78H3QxGB8nBXeHlNzg"
    },
    {
      id: 5,
      name: "La Panoteca Campestre",
      score: 4.8,
      shippingPrice: "MXN20",
      image: "https://duyt4h9nfnj50.cloudfront.net/resized/1533579065069-w2880-7b.jpg",
      price: "$$",
      time: "15-25 min",
      url: "https://www.ubereats.com/mx/leon/food-delivery/la-panoteca-campestre/snmyxvAhQpWVq4RRIJEbMw"
    },
    {
      id: 6,
      name: "López de Vaca Taquería",
      score: 4.7,
      shippingPrice: "MXN24",
      image: "https://duyt4h9nfnj50.cloudfront.net/resized/76b7b19e9e0ea167a751f8a8959ac453-w2880-39.jpg",
      price: "$",
      time: "15-25 min",
      url: "https://www.ubereats.com/mx/leon/food-delivery/lopez-de-vaca-taqueria/StfBuQgjSO2wNZpa0CB7tg"
    },
    {
      id: 7,
      name: "Olive Garde Leon",
      score: 4.6,
      shippingPrice: "MXN22",
      image: "https://duyt4h9nfnj50.cloudfront.net/resized/1530077326521-w2880-4d.jpg",
      price: "$$$$",
      time: "25-35 min",
      url: "https://www.ubereats.com/mx/leon/food-delivery/olive-garden-leon/PBsgb8qjSnWNG77h5ATV9w"
    },
    {
      id: 8,
      name: "Focaccia Pizzería",
      score: 4.6,
      shippingPrice: "MXN28",
      image: "https://img-global.cpcdn.com/recipes/505daec58bc6d1c1/400x400cq70/photo.jpg",
      price: "$$$$",
      time: "25-35 min",
      url: "https://www.ubereats.com/mx/leon/food-delivery/focaccia-pizzeria/dQd49Qe9TcWw19rHocvIYg"
    },
  ],
    selectedId: 0
  }
})


export class RestaurantState {
  constructor() {}

  @Selector()
  static getAllRestaurants(state: IRRestaurant) {
    return state.restaurants;
  }

}