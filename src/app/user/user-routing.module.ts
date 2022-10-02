import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from '../app.module';
import { ContactUsModule } from '../contact-us/contact-us.module';
import { ProfileGuard } from '../profile.guard';
import { ManageMyPostsComponent } from './manage-my-posts/manage-my-posts.component';
import { MyFavoriteComponent } from './my-favorite/my-favorite.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {path:'myPosts',component:ManageMyPostsComponent,canActivate:[ProfileGuard]},
  {path:'myProfile',component:MyProfileComponent,canActivate:[ProfileGuard]},
  {path:'myFavorite',component:MyFavoriteComponent,canActivate:[ProfileGuard]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
