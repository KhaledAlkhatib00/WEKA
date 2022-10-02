import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllpostsComponent } from './allposts/allposts.component';
import { CategorysComponent } from './categorys/categorys.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {path:'category',component:CategorysComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'searchResult',component:SearchResultComponent},
  {path:'allPosts',component:AllpostsComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
