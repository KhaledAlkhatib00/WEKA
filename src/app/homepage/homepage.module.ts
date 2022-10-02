import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HomepostsComponent } from './homeposts/homeposts.component';
import { PostsComponent } from './posts/posts.component';
import { CategorysComponent } from './categorys/categorys.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AllpostsComponent } from './allposts/allposts.component';
import { TostimonialComponent } from './tostimonial/tostimonial.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomepostsComponent,
    PostsComponent,
    CategorysComponent,
    SidebarComponent,
    SearchResultComponent,
    AllpostsComponent,
    TostimonialComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule
  ]
})
export class HomepageModule { }
