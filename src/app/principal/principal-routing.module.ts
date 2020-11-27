import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalTemplateComponent } from './principal-template/principal-template.component';

const routes: Routes =  [
    {path: 'res', component: PrincipalTemplateComponent},
    {path: '**', redirectTo: 'res'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: []
})
export class PrincipalRoutingModule {}