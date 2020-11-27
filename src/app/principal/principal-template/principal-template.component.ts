import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IRestaurant } from 'src/app/interfaces/restaurant/restaurant.interface';
import { RestaurantState } from '../../models/restaurants/restaurant.redux';

@Component({
  selector: 'app-principal-template',
  templateUrl: './principal-template.component.html',
  styleUrls: ['./principal-template.component.scss']
})
export class PrincipalTemplateComponent implements OnInit {

  @Select(RestaurantState.getAllRestaurants) restaurants$: Observable<IRestaurant[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
