import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import {PrincipalTemplateComponent } from './principal-template/principal-template.component'
import { PrincipalRoutingModule } from './principal-routing.module';



@NgModule({
  declarations: [PrincipalTemplateComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ComponentsModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }