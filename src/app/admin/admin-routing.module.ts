import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageMyPostsComponent } from '../user/manage-my-posts/manage-my-posts.component';
import { HomeComponent } from './home/home.component';
import { ManageArticleComponent } from './manage-article/manage-article.component';
import { ManageBadWordComponent } from './manage-bad-word/manage-bad-word.component';
import { ManageCaregoryComponent } from './manage-caregory/manage-caregory.component';
import { ManageContactUsComponent } from './manage-contact-us/manage-contact-us.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { ManageTestamonialComponent } from './manage-testamonial/manage-testamonial.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportedArticleComponent } from './reported-article/reported-article.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'manage-user',
    component:ManageUserComponent
  },
  {
    path:'manage-badword',
    component:ManageBadWordComponent
  },
  {
    path:'manage-category',
    component:ManageCaregoryComponent
  },
  {
    path:'manage-article',
    component:ManageArticleComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'reports',
    component:ReportsComponent
  },
  {
    path:'manage-testamonial',
    component:ManageTestamonialComponent
  },
  {
    path:'manage-contactUs',
    component:ManageContactUsComponent
  },
  {
    path:'reportedArticle',
    component:ReportedArticleComponent
  }
  ,{
    path:'managePages',
    component:ManagePagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
