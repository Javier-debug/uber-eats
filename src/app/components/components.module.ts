import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CollapseComponent } from './collapse/collapse.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    NavBarComponent,
    CollapseComponent,
    CardComponent,
  ],
  exports: [
    NavBarComponent,
    CollapseComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ComponentsModule { }