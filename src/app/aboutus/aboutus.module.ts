import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutushomeComponent } from './aboutushome/aboutushome.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AboutushomeComponent
  ],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    SharedModule
  ]
})
export class AboutusModule { }
