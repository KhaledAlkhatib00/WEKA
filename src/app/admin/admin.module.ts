import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ManageBadWordComponent } from './manage-bad-word/manage-bad-word.component';
import { ManageCaregoryComponent } from './manage-caregory/manage-caregory.component';
import { ManageArticleComponent } from './manage-article/manage-article.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { ManageTestamonialComponent } from './manage-testamonial/manage-testamonial.component';
import { ManageContactUsComponent } from './manage-contact-us/manage-contact-us.component';
import { ReportedArticleComponent } from './reported-article/reported-article.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    ManageUserComponent,
    ManageBadWordComponent,
    ManageCaregoryComponent,
    ManageArticleComponent,
    ProfileComponent,
    ReportsComponent,
    ManageTestamonialComponent,
    ManageContactUsComponent,
    ReportedArticleComponent,
    ManagePagesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule
  ] ,
})
export class AdminModule { }
