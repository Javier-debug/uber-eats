import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'pr', loadChildren: () => import('./principal/principal.module').then((m) => m.PrincipalModule) },
  {path: '**', redirectTo: 'pr'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }