import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutushomeComponent } from './aboutushome/aboutushome.component';

const routes: Routes = [
  {path:'aboutUs',component:AboutushomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutusRoutingModule { }
