import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusModule } from './aboutus/aboutus.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AutherizationGuard } from './autherization.guard';
import { ContactUsModule } from './contact-us/contact-us.module';
import { HomepageModule } from './homepage/homepage.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path:'admin',
    loadChildren:()=>AdminModule,
    canActivate:[AutherizationGuard]
  },
  {
    path:'security',
    loadChildren:()=>AuthModule
  },
  {
    path:'',
    loadChildren:()=>HomepageModule
  },
  {
    path:'user',
    loadChildren:()=>UserModule
  },
  {
    path:'contact',
    loadChildren:()=>ContactUsModule
  }
  ,
  {
    path:'about',
    loadChildren:()=>AboutusModule
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
