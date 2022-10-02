import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CreatePostsComponent } from './create-posts/create-posts.component';
import { ManageMyPostsComponent } from './manage-my-posts/manage-my-posts.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SharedModule } from '../shared/shared.module';
import { UserSidBarComponent } from './user-sid-bar/user-sid-bar.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MyFavoriteComponent } from './my-favorite/my-favorite.component';



@NgModule({
  declarations: [
    CreatePostsComponent,
    ManageMyPostsComponent,
    MyProfileComponent,
    UserSidBarComponent,
    MyFavoriteComponent
    
    ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    HttpClientModule,
    AngularEditorModule
  ]
})
export class UserModule { }
