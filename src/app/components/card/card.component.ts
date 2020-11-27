import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { IRestaurant } from 'src/app/interfaces/restaurant/restaurant.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() restaurant: IRestaurant; 
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    console.log(this.restaurant)
  }

  goToUrl(): void {
    this.document.location.href = this.restaurant.url;
  }

}
